import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAdapter } from '@/lib/data';
import { getTeam } from '@/lib/teams';
import { APP_URL } from '@/lib/constants';
import ScoreBoard from '@/components/ScoreBoard';
import DiamondView from '@/components/DiamondView';
import EventTimeline from '@/components/EventTimeline';
import OhtaniTracker from '@/components/OhtaniTracker';
import AutoRefresh from '@/components/AutoRefresh';
import ShareButtons from './ShareButtons';
import LiveThread from './LiveThread';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ gameId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { gameId } = await params;
  const adapter = getAdapter();
  const game = await adapter.getGame(gameId);
  if (!game) return { title: 'Not Found' };

  const home = getTeam(game.home_team);
  const away = getTeam(game.away_team);
  const title = `${away.flag} ${away.nameJa} ${game.score_away} - ${game.score_home} ${home.nameJa} ${home.flag} | WBC 超速報`;
  const ogImageUrl = `${APP_URL}/api/og/${gameId}?v=${game.score_away}-${game.score_home}`;

  return {
    title,
    description: `WBC 2026 ${away.nameJa} vs ${home.nameJa} ライブスコア`,
    openGraph: {
      title,
      description: `WBC 2026 ライブスコア`,
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      images: [ogImageUrl],
    },
  };
}

export default async function GamePage({ params }: Props) {
  const { gameId } = await params;
  const adapter = getAdapter();
  const [game, events, thread, ohtani, situation] = await Promise.all([
    adapter.getGame(gameId),
    adapter.getEvents(gameId),
    adapter.getThread(gameId),
    adapter.getPlayerTracker(gameId, '大谷翔平'),
    adapter.getGameSituation(gameId),
  ]);

  if (!game) {
    notFound();
  }

  const posts = thread ? await adapter.getPosts(thread.id) : [];
  const isLive = game.status === 'live';
  const home = getTeam(game.home_team);
  const away = getTeam(game.away_team);

  return (
    <div className="py-6 space-y-6">
      <AutoRefresh enabled={isLive} intervalMs={10000} />

      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition px-1"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        試合一覧
      </Link>

      <ScoreBoard game={game} />

      {/* Diamond View - only for live games */}
      {isLive && situation && (
        <DiamondView
          situation={situation}
          awayTeam={away.nameJa}
          homeTeam={home.nameJa}
        />
      )}

      <ShareButtons game={game} />

      {ohtani && <OhtaniTracker tracker={ohtani} />}

      <EventTimeline events={events} />

      {thread && (
        <LiveThread
          threadId={thread.id}
          initialPosts={posts}
          gameStatus={game.status}
        />
      )}
    </div>
  );
}
