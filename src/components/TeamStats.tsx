import { getAdapter } from '@/lib/data';

interface Props {
  homeTeam: string;
  awayTeam: string;
  homeFlag: string;
  awayFlag: string;
}

async function getTeamStats(teamCode: string) {
  const adapter = getAdapter();
  const games = await adapter.getGames();
  const finished = games.filter(g => g.status === 'final');

  let wins = 0, losses = 0, rs = 0, ra = 0;
  for (const g of finished) {
    if (g.home_team === teamCode) {
      rs += g.score_home;
      ra += g.score_away;
      if (g.score_home > g.score_away) wins++;
      else losses++;
    } else if (g.away_team === teamCode) {
      rs += g.score_away;
      ra += g.score_home;
      if (g.score_away > g.score_home) wins++;
      else losses++;
    }
  }
  return { wins, losses, rs, ra };
}

export default async function TeamStats({ homeTeam, awayTeam, homeFlag, awayFlag }: Props) {
  const [home, away] = await Promise.all([
    getTeamStats(homeTeam),
    getTeamStats(awayTeam),
  ]);

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
      <h3 className="text-xs text-gray-500 mb-3">大会成績</h3>
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        {/* Away */}
        <div>
          <div className="text-lg mb-1">{awayFlag}</div>
          <div className="text-white font-bold">{away.wins}勝{away.losses}敗</div>
          <div className="text-gray-500 text-[10px]">得{away.rs} 失{away.ra}</div>
        </div>
        {/* VS */}
        <div className="flex items-center justify-center">
          <span className="text-gray-600 text-sm">VS</span>
        </div>
        {/* Home */}
        <div>
          <div className="text-lg mb-1">{homeFlag}</div>
          <div className="text-white font-bold">{home.wins}勝{home.losses}敗</div>
          <div className="text-gray-500 text-[10px]">得{home.rs} 失{home.ra}</div>
        </div>
      </div>
    </div>
  );
}
