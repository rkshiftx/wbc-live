import { getAdapter } from '@/lib/data';
import GameCard from '@/components/GameCard';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const adapter = getAdapter();
  const games = await adapter.getGames();

  const live = games.filter(g => g.status === 'live');
  const scheduled = games.filter(g => g.status === 'scheduled');
  const final_ = games.filter(g => g.status === 'final');

  return (
    <div className="py-6 space-y-6">
      {/* Live Games */}
      {live.length > 0 && (
        <section>
          <h2 className="flex items-center gap-2 text-sm font-medium text-red-400 mb-3 px-1">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
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
        <div className="text-center py-12 text-gray-500">
          本日の試合はありません
        </div>
      )}
    </div>
  );
}
