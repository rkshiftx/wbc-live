import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">⚾</span>
          <span className="font-bold text-lg text-white">WBC 超速報</span>
        </Link>
        <nav className="flex gap-3 text-sm">
          <Link href="/tournament" className="text-gray-400 hover:text-white transition">
            トーナメント
          </Link>
        </nav>
      </div>
    </header>
  );
}
