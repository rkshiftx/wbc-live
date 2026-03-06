import type { GameEvent } from '@/types/game';
import { getTeam } from '@/lib/teams';
import { inningDisplay, formatTime } from '@/lib/utils';

interface Props {
  events: GameEvent[];
}

export default function EventTimeline({ events }: Props) {
  if (events.length === 0) return null;

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-400 px-1">スコア経過</h3>
      <div className="space-y-1">
        {events.map((evt) => {
          const team = evt.payload_json.team ? getTeam(evt.payload_json.team as string) : null;
          const isHR = evt.event_type === 'hr';

          return (
            <div
              key={evt.id}
              className={`flex items-start gap-3 p-3 rounded-lg ${
                isHR ? 'bg-yellow-500/10 border border-yellow-500/20' : 'bg-gray-900/50'
              }`}
            >
              <div className="text-xs text-gray-500 pt-0.5 min-w-[40px]">
                {inningDisplay(evt.payload_json.inning as string)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  {team && <span className="text-sm">{team.flag}</span>}
                  {isHR && <span className="text-xs bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded font-medium">HR</span>}
                  <span className="text-sm text-white">
                    {evt.payload_json.description as string}
                  </span>
                </div>
                {evt.payload_json.score_home !== undefined && (
                  <div className="text-xs text-gray-400 mt-1">
                    {evt.payload_json.score_away}-{evt.payload_json.score_home}
                  </div>
                )}
              </div>
              <span className="text-xs text-gray-600">{formatTime(evt.created_at)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
