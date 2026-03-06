'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="py-16 text-center space-y-4">
      <div className="text-4xl">⚠️</div>
      <h2 className="text-lg font-bold text-white">エラーが発生しました</h2>
      <p className="text-sm text-gray-400">データの取得に失敗しました</p>
      <button
        onClick={reset}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition"
      >
        再読み込み
      </button>
    </div>
  );
}
