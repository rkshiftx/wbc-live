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
  const isFinal = game.status === 'final';

  // Determine winning team for final games
  const homeWins = isFinal && game.score_home > game.score_away;
  const awayWins = isFinal && game.score_away > game.score_home;

  return (
    <Link
      href={`/game/${game.id}`}
      className={`block bg-gray-900 rounded-xl p-4 border transition active:scale-[0.98] ${
        isLive
          ? 'border-red-500/30 hover:border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.08)]'
          : 'border-gray-800 hover:border-gray-700'
      }`}
    >
      {/* Status */}
      <div className="flex items-center justify-between mb-3">
        <span
          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${
            isLive
              ? 'bg-red-500/20 text-red-400'
              : isFinal
              ? 'bg-gray-700/50 text-gray-300'
              : 'bg-blue-500/20 text-blue-400'
          }`}
        >
          {isLive && (
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
            </span>
          )}
          {statusLabel(game.status, game.inning)}
        </span>
        <span className="text-xs text-gray-500">{formatTime(game.starts_at)}</span>
      </div>

      {/* Teams & Score */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">{away.flag}</span>
            <span className={`text-sm font-medium ${awayWins ? 'text-white' : isFinal ? 'text-gray-400' : 'text-white'}`}>
              {away.nameJa}
            </span>
          </div>
          <span className={`text-xl font-bold tabular-nums ${awayWins ? 'text-white' : isFinal && !awayWins ? 'text-gray-500' : 'text-white'}`}>
            {game.score_away}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">{home.flag}</span>
            <span className={`text-sm font-medium ${homeWins ? 'text-white' : isFinal ? 'text-gray-400' : 'text-white'}`}>
              {home.nameJa}
            </span>
          </div>
          <span className={`text-xl font-bold tabular-nums ${homeWins ? 'text-white' : isFinal && !homeWins ? 'text-gray-500' : 'text-white'}`}>
            {game.score_home}
          </span>
        </div>
      </div>
    </Link>
  );
}
