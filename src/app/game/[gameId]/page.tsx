import type { Metadata } from 'next';
import { getAdapter } from '@/lib/data';
import { getTeam } from '@/lib/teams';
import { APP_URL } from '@/lib/constants';
import ScoreBoard from '@/components/ScoreBoard';
import EventTimeline from '@/components/EventTimeline';
import OhtaniTracker from '@/components/OhtaniTracker';
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
  const [game, events, thread, ohtani] = await Promise.all([
    adapter.getGame(gameId),
    adapter.getEvents(gameId),
    adapter.getThread(gameId),
    adapter.getPlayerTracker(gameId, '大谷翔平'),
  ]);

  if (!game) {
    return (
      <div className="py-12 text-center text-gray-500">
        試合が見つかりません
      </div>
    );
  }

  const posts = thread ? await adapter.getPosts(thread.id) : [];

  return (
    <div className="py-6 space-y-6">
      <ScoreBoard game={game} />

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
