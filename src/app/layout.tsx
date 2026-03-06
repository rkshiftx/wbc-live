import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'WBC 超速報 | 2026',
  description: 'WBC 2026 リアルタイムスコア・実況・共有',
  openGraph: {
    title: 'WBC 超速報 | 2026',
    description: 'WBC 2026 リアルタイムスコア・実況・共有',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#030712',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/api/icon?size=180" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){navigator.serviceWorker.register('/sw.js')}`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white min-h-screen`}
      >
        <Header />
        <main className="max-w-lg mx-auto px-4 pb-24">{children}</main>
        <footer className="border-t border-gray-800/50 mt-8">
          <div className="max-w-lg mx-auto px-4 py-6 text-center">
            <p className="text-xs text-gray-600">
              WBC 超速報 2026 — リアルタイムスコア・実況・共有
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
