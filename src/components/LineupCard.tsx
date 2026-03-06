import type { GameSituation } from '@/types/game';

interface Props {
  situation: GameSituation;
  teamName: string;
}

// Mock lineup data - in production this would come from the API
const MOCK_LINEUP = [
  { order: 1, name: 'ラーズ・ヌートバー', number: 23, position: '右' },
  { order: 2, name: '近藤 健介', number: 8, position: '左' },
  { order: 3, name: '大谷 翔平', number: 17, position: 'DH' },
  { order: 4, name: '吉田 正尚', number: 7, position: '指' },
  { order: 5, name: '村上 宗隆', number: 55, position: '三' },
  { order: 6, name: '牧 秀悟', number: 2, position: '二' },
  { order: 7, name: '源田 壮亮', number: 6, position: '遊' },
  { order: 8, name: '甲斐 拓也', number: 19, position: '捕' },
  { order: 9, name: '鈴木 誠也', number: 51, position: '中' },
];

export default function LineupCard({ teamName }: Props) {
  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
      <div className="px-4 py-2.5 border-b border-gray-800">
        <h3 className="text-sm font-medium text-white">{teamName} スタメン</h3>
      </div>
      <div className="divide-y divide-gray-800/50">
        {MOCK_LINEUP.map((player) => (
          <div
            key={player.order}
            className="px-4 py-2 flex items-center gap-3 hover:bg-gray-800/30 transition"
          >
            <span className="text-xs text-gray-500 w-4 text-center font-mono">{player.order}</span>
            <span className="text-[10px] text-gray-500 w-6 text-center bg-gray-800 rounded px-1 py-0.5">
              {player.position}
            </span>
            <span className="text-xs font-mono text-gray-400">#{player.number}</span>
            <span className="text-sm text-white flex-1">{player.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
