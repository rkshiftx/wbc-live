'use client';

import type { GameSituation } from '@/types/game';

interface Props {
  situation: GameSituation;
  awayTeam: string;
  homeTeam: string;
}

function CountDots({ count, max, activeColor }: { count: number; max: number; activeColor: string }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }, (_, i) => (
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-full border ${
            i < count ? activeColor : 'border-gray-600 bg-transparent'
          }`}
        />
      ))}
    </div>
  );
}

function BaseIndicator({ runner, position }: { runner: string | null; position: string }) {
  const isOccupied = runner !== null;
  return (
    <div className="relative group">
      <div
        className={`w-7 h-7 rotate-45 border-2 transition-all ${
          isOccupied
            ? 'bg-yellow-400 border-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.5)]'
            : 'bg-gray-800 border-gray-600'
        }`}
      />
      {isOccupied && (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] text-yellow-300 opacity-0 group-hover:opacity-100 transition">
          {runner}
        </div>
      )}
      <span className="sr-only">{position}: {runner ?? 'empty'}</span>
    </div>
  );
}

export default function DiamondView({ situation, awayTeam, homeTeam }: Props) {
  const { batter, next_batter, pitcher, count, runners, defense } = situation;

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-2.5 border-b border-gray-800 flex items-center justify-between">
        <h3 className="text-sm font-medium text-white flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          LIVE
        </h3>
        <div className="flex items-center gap-3">
          {/* BSO Count */}
          <div className="flex items-center gap-2 text-[10px] text-gray-400">
            <div className="flex items-center gap-1">
              <span>B</span>
              <CountDots count={count.balls} max={4} activeColor="bg-green-400 border-green-400" />
            </div>
            <div className="flex items-center gap-1">
              <span>S</span>
              <CountDots count={count.strikes} max={3} activeColor="bg-yellow-400 border-yellow-400" />
            </div>
            <div className="flex items-center gap-1">
              <span>O</span>
              <CountDots count={count.outs} max={3} activeColor="bg-red-400 border-red-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex gap-4">
          {/* Diamond + Runners */}
          <div className="flex-shrink-0">
            <div className="relative w-28 h-28">
              {/* Field background */}
              <div className="absolute inset-0">
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  {/* Outfield grass */}
                  <path d="M60 10 L110 60 L60 110 L10 60 Z" fill="#1a3a1a" stroke="#2d5a2d" strokeWidth="1" opacity="0.5" />
                  {/* Infield dirt */}
                  <path d="M60 35 L85 60 L60 85 L35 60 Z" fill="#3a2a1a" stroke="#5a4a3a" strokeWidth="0.5" opacity="0.4" />
                </svg>
              </div>

              {/* 2nd base - top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <BaseIndicator runner={runners.second} position="2塁" />
              </div>
              {/* 3rd base - left */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2">
                <BaseIndicator runner={runners.third} position="3塁" />
              </div>
              {/* 1st base - right */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2">
                <BaseIndicator runner={runners.first} position="1塁" />
              </div>
              {/* Home plate - bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <div className="w-5 h-5 bg-white rotate-45 border border-gray-300" />
              </div>
            </div>
          </div>

          {/* Batter / Pitcher / Next */}
          <div className="flex-1 min-w-0 space-y-3">
            {/* Current matchup */}
            <div className="space-y-2">
              {/* Pitcher */}
              {pitcher && (
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-500 w-4">投</span>
                  <span className="text-xs font-mono text-gray-400">#{pitcher.number}</span>
                  <span className="text-sm text-white font-medium truncate">{pitcher.name}</span>
                  <span className="text-[10px] text-gray-500 ml-auto">ERA {pitcher.era}</span>
                </div>
              )}
              {/* Batter */}
              {batter && (
                <div className="flex items-center gap-2 bg-blue-500/10 rounded-lg px-2 py-1.5 border border-blue-500/20">
                  <span className="text-[10px] text-blue-400 w-4">打</span>
                  <span className="text-xs font-mono text-blue-300">#{batter.number}</span>
                  <span className="text-sm text-white font-bold truncate">{batter.name}</span>
                  <span className="text-[10px] text-gray-400 ml-auto">{batter.avg}</span>
                </div>
              )}
              {/* Next batter */}
              {next_batter && (
                <div className="flex items-center gap-2 opacity-60">
                  <span className="text-[10px] text-gray-500 w-4">次</span>
                  <span className="text-xs font-mono text-gray-500">#{next_batter.number}</span>
                  <span className="text-xs text-gray-400 truncate">{next_batter.name}</span>
                  <span className="text-[10px] text-gray-500 ml-auto">{next_batter.avg}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Defense positions */}
        <details className="mt-3 group">
          <summary className="text-[10px] text-gray-500 cursor-pointer hover:text-gray-300 transition flex items-center gap-1">
            <svg className="w-3 h-3 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            {awayTeam === homeTeam ? '' : `${homeTeam} `}守備配置
          </summary>
          <div className="mt-2 grid grid-cols-3 gap-1 text-[10px]">
            <div className="text-center text-gray-500">
              <div className="text-gray-400">{defense.left}</div>
              <div className="text-gray-600">左</div>
            </div>
            <div className="text-center text-gray-500">
              <div className="text-gray-400">{defense.center}</div>
              <div className="text-gray-600">中</div>
            </div>
            <div className="text-center text-gray-500">
              <div className="text-gray-400">{defense.right}</div>
              <div className="text-gray-600">右</div>
            </div>
            <div className="text-center text-gray-500">
              <div className="text-gray-400">{defense.shortstop}</div>
              <div className="text-gray-600">遊</div>
            </div>
            <div className="text-center text-gray-500">
              <div className="text-gray-400">{defense.pitcher}</div>
              <div className="text-gray-600">投</div>
            </div>
            <div className="text-center text-gray-500">
              <div className="text-gray-400">{defense.second}</div>
              <div className="text-gray-600">二</div>
            </div>
            <div className="text-center text-gray-500">
              <div className="text-gray-400">{defense.third}</div>
              <div className="text-gray-600">三</div>
            </div>
            <div className="text-center text-gray-500">
              <div className="text-gray-400">{defense.catcher}</div>
              <div className="text-gray-600">捕</div>
            </div>
            <div className="text-center text-gray-500">
              <div className="text-gray-400">{defense.first}</div>
              <div className="text-gray-600">一</div>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
