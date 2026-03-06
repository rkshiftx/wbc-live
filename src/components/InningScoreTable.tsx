import type { Game } from '@/types/game';
import { getTeam } from '@/lib/teams';
import { TOTAL_INNINGS } from '@/lib/constants';

interface Props {
  game: Game;
}

export default function InningScoreTable({ game }: Props) {
  const scores = game.inning_scores ?? [];
  const away = getTeam(game.away_team);
  const home = getTeam(game.home_team);

  const totalAway = scores.reduce((sum, s) => sum + (s.away ?? 0), 0);
  const totalHome = scores.reduce((sum, s) => sum + (s.home ?? 0), 0);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs text-center">
        <thead>
          <tr className="text-gray-500">
            <th className="py-1 px-2 text-left w-16"></th>
            {Array.from({ length: TOTAL_INNINGS }, (_, i) => (
              <th key={i} className="py-1 px-1 min-w-[24px]">{i + 1}</th>
            ))}
            <th className="py-1 px-2 font-bold text-gray-300">R</th>
          </tr>
        </thead>
        <tbody>
          {/* Away team */}
          <tr className="text-gray-300 border-t border-gray-800">
            <td className="py-1.5 px-2 text-left font-medium">
              {away.flag} {away.code}
            </td>
            {Array.from({ length: TOTAL_INNINGS }, (_, i) => {
              const s = scores[i];
              return (
                <td key={i} className="py-1.5 px-1 tabular-nums">
                  {s?.away !== undefined && s.away !== null ? s.away : '-'}
                </td>
              );
            })}
            <td className="py-1.5 px-2 font-bold text-white tabular-nums">{totalAway}</td>
          </tr>
          {/* Home team */}
          <tr className="text-gray-300 border-t border-gray-800">
            <td className="py-1.5 px-2 text-left font-medium">
              {home.flag} {home.code}
            </td>
            {Array.from({ length: TOTAL_INNINGS }, (_, i) => {
              const s = scores[i];
              return (
                <td key={i} className="py-1.5 px-1 tabular-nums">
                  {s?.home !== undefined && s.home !== null ? s.home : '-'}
                </td>
              );
            })}
            <td className="py-1.5 px-2 font-bold text-white tabular-nums">{totalHome}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
