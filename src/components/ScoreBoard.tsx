import type { Game } from '@/types/game';
import TeamBadge from './TeamBadge';
import InningScoreTable from './InningScoreTable';
import { statusLabel } from '@/lib/utils';

interface Props {
  game: Game;
}

export default function ScoreBoard({ game }: Props) {
  const isLive = game.status === 'live';

  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
      {/* Status */}
      <div className="flex justify-center mb-4">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
            isLive
              ? 'bg-red-500/20 text-red-400'
              : game.status === 'final'
              ? 'bg-gray-700/50 text-gray-300'
              : 'bg-blue-500/20 text-blue-400'
          }`}
        >
          {isLive && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />}
          {statusLabel(game.status, game.inning)}
        </span>
      </div>

      {/* Score */}
      <div className="flex items-center justify-between gap-4">
        <TeamBadge code={game.away_team} size="lg" />
        <div className="flex items-center gap-3">
          <span className="text-5xl font-bold text-white tabular-nums">{game.score_away}</span>
          <span className="text-2xl text-gray-500">-</span>
          <span className="text-5xl font-bold text-white tabular-nums">{game.score_home}</span>
        </div>
        <TeamBadge code={game.home_team} size="lg" reverse />
      </div>

      {/* Inning Score Table */}
      {game.inning_scores && game.inning_scores.length > 0 && (
        <div className="mt-4">
          <InningScoreTable game={game} />
        </div>
      )}
    </div>
  );
}
