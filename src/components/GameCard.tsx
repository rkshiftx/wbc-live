import Link from 'next/link';
import type { Game } from '@/types/game';
import { getTeam } from '@/lib/teams';
import { formatTime, statusLabel } from '@/lib/utils';

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  const home = getTeam(game.home_team);
  const away = getTeam(game.away_team);
  const isLive = game.status === 'live';

  return (
    <Link
      href={`/game/${game.id}`}
      className="block bg-gray-900 rounded-xl p-4 border border-gray-800 hover:border-gray-700 transition active:scale-[0.98]"
    >
      {/* Status */}
      <div className="flex items-center justify-between mb-3">
        <span
          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${
            isLive
              ? 'bg-red-500/20 text-red-400'
              : game.status === 'final'
              ? 'bg-gray-700/50 text-gray-300'
              : 'bg-blue-500/20 text-blue-400'
          }`}
        >
          {isLive && <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />}
          {statusLabel(game.status, game.inning)}
        </span>
        <span className="text-xs text-gray-500">{formatTime(game.starts_at)}</span>
      </div>

      {/* Teams & Score */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">{away.flag}</span>
            <span className="text-sm font-medium text-white">{away.nameJa}</span>
          </div>
          <span className="text-xl font-bold text-white tabular-nums">{game.score_away}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">{home.flag}</span>
            <span className="text-sm font-medium text-white">{home.nameJa}</span>
          </div>
          <span className="text-xl font-bold text-white tabular-nums">{game.score_home}</span>
        </div>
      </div>
    </Link>
  );
}
