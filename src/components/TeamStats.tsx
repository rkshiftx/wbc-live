interface Props {
  homeTeam: string;
  awayTeam: string;
  homeFlag: string;
  awayFlag: string;
}

// Mock team stats - in production from API
const MOCK_STATS: Record<string, { wins: number; losses: number; rs: number; ra: number }> = {
  JPN: { wins: 2, losses: 0, rs: 15, ra: 3 },
  CZE: { wins: 0, losses: 2, rs: 2, ra: 12 },
  KOR: { wins: 1, losses: 1, rs: 7, ra: 6 },
  AUS: { wins: 0, losses: 2, rs: 4, ra: 10 },
  USA: { wins: 1, losses: 0, rs: 5, ra: 1 },
  DOM: { wins: 0, losses: 1, rs: 4, ra: 6 },
  VEN: { wins: 1, losses: 0, rs: 6, ra: 4 },
};

function getStats(code: string) {
  return MOCK_STATS[code] ?? { wins: 0, losses: 0, rs: 0, ra: 0 };
}

export default function TeamStats({ homeTeam, awayTeam, homeFlag, awayFlag }: Props) {
  const home = getStats(homeTeam);
  const away = getStats(awayTeam);

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
