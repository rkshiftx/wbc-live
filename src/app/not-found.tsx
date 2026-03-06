import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-16 text-center space-y-4">
      <div className="text-4xl">🔍</div>
      <h2 className="text-lg font-bold text-white">ページが見つかりません</h2>
      <p className="text-sm text-gray-400">お探しのページは存在しません</p>
      <Link
        href="/"
        className="inline-block px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition"
      >
        ホームに戻る
      </Link>
    </div>
  );
}
