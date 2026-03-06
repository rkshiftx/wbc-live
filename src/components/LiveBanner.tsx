'use client';

import { useState, useEffect } from 'react';
import type { GameEvent } from '@/types/game';
import { getTeam } from '@/lib/teams';

interface Props {
  events: GameEvent[];
}

export default function LiveBanner({ events }: Props) {
  const [visible, setVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(events.length - 1);

  useEffect(() => {
    if (events.length === 0) return;
    setCurrentIndex(events.length - 1);
    setVisible(true);
  }, [events.length]);

  // Auto-cycle through recent events
  useEffect(() => {
    if (events.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => {
        const start = Math.max(0, events.length - 3);
        return prev <= start ? events.length - 1 : prev - 1;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [events.length]);

  if (events.length === 0 || !visible) return null;

  const event = events[currentIndex];
  if (!event) return null;

  const team = event.payload_json.team ? getTeam(event.payload_json.team as string) : null;
  const isHR = event.event_type === 'hr';

  return (
    <div
      className={`relative overflow-hidden rounded-xl border transition-all ${
        isHR
          ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30'
          : 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20'
      }`}
    >
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-300 text-xs cursor-pointer"
      >
        &times;
      </button>
      <div className="px-4 py-3 flex items-center gap-3">
        <div className="text-lg flex-shrink-0">
          {isHR ? '💥' : team ? team.flag : '⚾'}
        </div>
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-medium truncate ${isHR ? 'text-yellow-300' : 'text-white'}`}>
            {event.payload_json.description as string}
          </p>
          {event.payload_json.score_home !== undefined && (
            <p className="text-xs text-gray-400 mt-0.5">
              {event.payload_json.score_away}-{event.payload_json.score_home}
            </p>
          )}
        </div>
        {events.length > 1 && (
          <div className="flex gap-1">
            {events.slice(-3).map((_, i) => (
              <div
                key={i}
                className={`w-1 h-1 rounded-full ${
                  currentIndex === events.length - 3 + i ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
