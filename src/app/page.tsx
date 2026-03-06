import { getAdapter } from '@/lib/data';
import GameCard from '@/components/GameCard';
import AutoRefresh from '@/components/AutoRefresh';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const adapter = getAdapter();
  const games = await adapter.getGames();

  const live = games.filter(g => g.status === 'live');
  const scheduled = games.filter(g => g.status === 'scheduled');
  const final_ = games.filter(g => g.status === 'final');
  const hasLive = live.length > 0;

  const today = new Date().toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });

  return (
    <div className="py-6 space-y-6">
      <AutoRefresh enabled={hasLive} intervalMs={15000} />

      {/* Date header */}
      <div className="px-1">
        <p className="text-xs text-gray-500">{today}</p>
      </div>

      {/* Live Games */}
      {live.length > 0 && (
        <section>
          <h2 className="flex items-center gap-2 text-sm font-medium text-red-400 mb-3 px-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            LIVE
          </h2>
          <div className="space-y-3">
            {live.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      )}

      {/* Scheduled */}
      {scheduled.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-gray-400 mb-3 px-1">試合予定</h2>
          <div className="space-y-3">
            {scheduled.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      )}

      {/* Final */}
      {final_.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-gray-400 mb-3 px-1">試合結果</h2>
          <div className="space-y-3">
            {final_.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      )}

      {games.length === 0 && (
        <div className="text-center py-16 space-y-3">
          <div className="text-4xl">⚾</div>
          <p className="text-gray-500 text-sm">本日の試合はありません</p>
        </div>
      )}
    </div>
  );
}
