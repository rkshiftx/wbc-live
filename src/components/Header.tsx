import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-lg border-b border-gray-800/50">
      <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 active:scale-95 transition">
          <span className="text-2xl">⚾</span>
          <div>
            <span className="font-bold text-lg text-white leading-none">WBC 超速報</span>
            <span className="text-[10px] text-gray-500 ml-1.5">2026</span>
          </div>
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link
            href="/tournament"
            className="text-gray-400 hover:text-white transition px-2 py-1 rounded-lg hover:bg-gray-800/50"
          >
            トーナメント
          </Link>
        </nav>
      </div>
    </header>
  );
}
