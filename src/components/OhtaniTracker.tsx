'use client';

import type { PlayerTracker } from '@/types/game';
import { resultLabel } from '@/lib/utils';

interface Props {
  tracker: PlayerTracker;
}

const RESULT_COLORS: Record<string, string> = {
  hr: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  single: 'bg-green-500/20 text-green-400 border-green-500/30',
  double: 'bg-green-500/20 text-green-400 border-green-500/30',
  triple: 'bg-green-500/20 text-green-400 border-green-500/30',
  walk: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  hbp: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  strikeout: 'bg-red-500/20 text-red-400 border-red-500/30',
  groundout: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  flyout: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  sacrifice: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
};

export default function OhtaniTracker({ tracker }: Props) {
  return (
    <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">⭐</span>
        <h3 className="font-bold text-white">{tracker.player_name}</h3>
        <span className="text-xs text-gray-400">今日の成績</span>
      </div>

      {/* Stats summary */}
      <div className="flex gap-4 mb-3 text-center">
        <div>
          <div className="text-xl font-bold text-white">{tracker.stats.avg}</div>
          <div className="text-xs text-gray-500">打率</div>
        </div>
        <div>
          <div className="text-xl font-bold text-white">{tracker.stats.ab}</div>
          <div className="text-xs text-gray-500">打数</div>
        </div>
        <div>
          <div className="text-xl font-bold text-white">{tracker.stats.hits}</div>
          <div className="text-xs text-gray-500">安打</div>
        </div>
        <div>
          <div className="text-xl font-bold text-yellow-400">{tracker.stats.hr}</div>
          <div className="text-xs text-gray-500">HR</div>
        </div>
        <div>
          <div className="text-xl font-bold text-white">{tracker.stats.rbi}</div>
          <div className="text-xs text-gray-500">打点</div>
        </div>
      </div>

      {/* At-bat timeline */}
      <div className="space-y-1.5">
        {tracker.at_bats.map((ab, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-xs text-gray-500 w-10">{ab.inning}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded border ${
                RESULT_COLORS[ab.result] ?? 'bg-gray-500/20 text-gray-400 border-gray-500/30'
              }`}
            >
              {resultLabel(ab.result)}
            </span>
            <span className="text-xs text-gray-400 truncate">{ab.description}</span>
            {ab.rbi > 0 && (
              <span className="text-xs text-yellow-400 ml-auto">{ab.rbi}打点</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
