import { getAdapter } from '@/lib/data';
import { getTeam } from '@/lib/teams';
import type { TournamentGame } from '@/types/game';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'トーナメント表 | WBC 超速報',
};

function PoolGroup({ pool, games }: { pool: string; games: TournamentGame[] }) {
  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
      <div className="px-4 py-2 bg-gray-800/50 border-b border-gray-800">
        <h3 className="text-sm font-bold text-white">Pool {pool}</h3>
      </div>
      <div className="divide-y divide-gray-800">
        {games.map(game => {
          const home = game.home_team ? getTeam(game.home_team) : null;
          const away = game.away_team ? getTeam(game.away_team) : null;
          const isLive = game.status === 'live';

          return (
            <Link
              key={game.id}
              href={`/game/${game.id}`}
              className="block px-4 py-3 hover:bg-gray-800/30 transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white">
                      {away ? `${away.flag} ${away.nameJa}` : 'TBD'}
                    </span>
                    <span className="text-sm font-bold text-white tabular-nums">
                      {game.status !== 'tbd' && game.status !== 'scheduled' ? game.score_away : ''}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white">
                      {home ? `${home.flag} ${home.nameJa}` : 'TBD'}
                    </span>
                    <span className="text-sm font-bold text-white tabular-nums">
                      {game.status !== 'tbd' && game.status !== 'scheduled' ? game.score_home : ''}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  {isLive && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-red-500/20 text-red-400">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                      LIVE
                    </span>
                  )}
                  {game.status === 'final' && (
                    <span className="text-xs text-gray-500">終了</span>
                  )}
                  {game.status === 'scheduled' && (
                    <span className="text-xs text-gray-500">
                      {new Date(game.starts_at).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', hour12: false })}
                    </span>
                  )}
                  {game.status === 'tbd' && (
                    <span className="text-xs text-gray-600">TBD</span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function KnockoutRound({ title, games }: { title: string; games: TournamentGame[] }) {
  if (games.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-400 mb-2 px-1">{title}</h3>
      <div className="space-y-2">
        {games.map(game => {
          const home = game.home_team ? getTeam(game.home_team) : null;
          const away = game.away_team ? getTeam(game.away_team) : null;

          return (
            <div
              key={game.id}
              className="bg-gray-900 rounded-xl border border-gray-800 p-4"
            >
              <div className="space-y-1 text-center">
                <span className="text-sm text-white">
                  {away ? `${away.flag} ${away.nameJa}` : '???'}
                </span>
                <div className="text-xs text-gray-500">vs</div>
                <span className="text-sm text-white">
                  {home ? `${home.flag} ${home.nameJa}` : '???'}
                </span>
              </div>
              <div className="text-xs text-gray-600 text-center mt-2">
                {new Date(game.starts_at).toLocaleDateString('ja-JP', { month: 'short', day: 'numeric' })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default async function TournamentPage() {
  const adapter = getAdapter();
  const allGames = await adapter.getTournament();

  const poolGames = allGames.filter(g => g.round === 'pool');
  const pools: Record<string, TournamentGame[]> = {};
  poolGames.forEach(g => {
    const pool = g.pool ?? '?';
    if (!pools[pool]) pools[pool] = [];
    pools[pool].push(g);
  });

  const quarters = allGames.filter(g => g.round === 'quarter');
  const semis = allGames.filter(g => g.round === 'semi');
  const finals = allGames.filter(g => g.round === 'final');

  return (
    <div className="py-6 space-y-6">
      <h1 className="text-lg font-bold text-white px-1">トーナメント表</h1>

      {/* Pool Round */}
      <div className="space-y-4">
        <h2 className="text-sm font-medium text-gray-400 px-1">プール</h2>
        {Object.keys(pools).sort().map(pool => (
          <PoolGroup key={pool} pool={pool} games={pools[pool]} />
        ))}
      </div>

      {/* Knockout */}
      <KnockoutRound title="準々決勝" games={quarters} />
      <KnockoutRound title="準決勝" games={semis} />
      <KnockoutRound title="決勝" games={finals} />
    </div>
  );
}
