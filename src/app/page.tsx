import { getAdapter } from '@/lib/data';
import type { Game } from '@/types/game';
import GameCard from '@/components/GameCard';
import AutoRefresh from '@/components/AutoRefresh';

export const dynamic = 'force-dynamic';

function groupByDate(games: Game[]) {
  const groups: Record<string, Game[]> = {};
  for (const g of games) {
    const d = new Date(g.starts_at);
    const key = d.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
    if (!groups[key]) groups[key] = [];
    groups[key].push(g);
  }
  return groups;
}

function dateLabel(dateKey: string): string {
  // dateKey is like "2026/03/06"
  const [y, m, d] = dateKey.split('/').map(Number);
  const date = new Date(y, m - 1, d);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.round((date.getTime() - today.getTime()) / 86400000);

  const label = date.toLocaleDateString('ja-JP', { month: 'long', day: 'numeric', weekday: 'short' });
  if (diff === 0) return `${label} — 今日`;
  if (diff === 1) return `${label} — 明日`;
  if (diff === -1) return `${label} — 昨日`;
  return label;
}

export default async function HomePage() {
  const adapter = getAdapter();
  const games = await adapter.getGames();

  const live = games.filter(g => g.status === 'live');
  const hasLive = live.length > 0;

  // Group non-live games by date
  const nonLive = games.filter(g => g.status !== 'live');
  const dateGroups = groupByDate(nonLive);
  const sortedDates = Object.keys(dateGroups).sort();

  // Find today's index for initial focus
  const todayKey = new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
  const todayIdx = sortedDates.indexOf(todayKey);
  // Show from yesterday or today
  const startIdx = Math.max(0, todayIdx - 1);
  const visibleDates = sortedDates.slice(startIdx);

  return (
    <div className="py-6 space-y-6">
      <AutoRefresh enabled={hasLive} intervalMs={15000} />

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

      {/* Games grouped by date */}
      {visibleDates.map(dateKey => {
        const dateGames = dateGroups[dateKey];
        const finals = dateGames.filter(g => g.status === 'final');
        const scheduled = dateGames.filter(g => g.status === 'scheduled');
        if (finals.length === 0 && scheduled.length === 0) return null;

        return (
          <section key={dateKey}>
            <h2 className="text-sm font-medium text-gray-400 mb-3 px-1">
              {dateLabel(dateKey)}
            </h2>
            <div className="space-y-3">
              {finals.map(game => (
                <GameCard key={game.id} game={game} />
              ))}
              {scheduled.map(game => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </section>
        );
      })}

      {games.length === 0 && (
        <div className="text-center py-16 space-y-3">
          <div className="text-4xl">⚾</div>
          <p className="text-gray-500 text-sm">試合がありません</p>
        </div>
      )}
    </div>
  );
}
