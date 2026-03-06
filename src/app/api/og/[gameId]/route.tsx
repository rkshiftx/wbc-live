import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { getAdapter } from '@/lib/data';
import { getTeam } from '@/lib/teams';
import { inningDisplay } from '@/lib/utils';

export const runtime = 'edge';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ gameId: string }> }
) {
  const { gameId } = await params;
  const adapter = getAdapter();
  const [game, events] = await Promise.all([
    adapter.getGame(gameId),
    adapter.getEvents(gameId),
  ]);

  if (!game) {
    return new Response('Not found', { status: 404 });
  }

  const home = getTeam(game.home_team);
  const away = getTeam(game.away_team);
  const latestEvent = events[events.length - 1];
  const isLive = game.status === 'live';
  const isFinal = game.status === 'final';

  const statusText = isLive
    ? inningDisplay(game.inning)
    : isFinal
    ? '試合終了'
    : '試合前';

  // Build inning score line
  const innings = game.inning_scores ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #0a1628 0%, #1a2744 50%, #0d2137 100%)',
          color: 'white',
          padding: '40px 60px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '20px', color: '#94a3b8' }}>
            <span>⚾</span>
            <span>WBC 2026</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '18px',
              fontWeight: 'bold',
              background: isLive ? 'rgba(239,68,68,0.2)' : 'rgba(100,116,139,0.2)',
              color: isLive ? '#f87171' : '#94a3b8',
            }}
          >
            {isLive && (
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'flex' }} />
            )}
            {statusText}
          </div>
        </div>

        {/* Score */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            flex: 1,
          }}
        >
          {/* Away */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '64px' }}>{away.flag}</span>
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{away.nameJa}</span>
            <span style={{ fontSize: '14px', color: '#94a3b8' }}>{away.code}</span>
          </div>

          {/* Scores */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ fontSize: '96px', fontWeight: 'bold', lineHeight: 1 }}>{game.score_away}</span>
            <span style={{ fontSize: '48px', color: '#64748b' }}>-</span>
            <span style={{ fontSize: '96px', fontWeight: 'bold', lineHeight: 1 }}>{game.score_home}</span>
          </div>

          {/* Home */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '64px' }}>{home.flag}</span>
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{home.nameJa}</span>
            <span style={{ fontSize: '14px', color: '#94a3b8' }}>{home.code}</span>
          </div>
        </div>

        {/* Inning scores */}
        {innings.length > 0 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '16px', fontSize: '14px' }}>
            {innings.map((s, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '28px' }}>
                <span style={{ color: '#64748b', marginBottom: '2px' }}>{s.inning}</span>
                <span style={{ color: '#cbd5e1' }}>{s.away ?? '-'}</span>
                <span style={{ color: '#cbd5e1' }}>{s.home ?? '-'}</span>
              </div>
            ))}
          </div>
        )}

        {/* Latest Event */}
        {latestEvent && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: 'rgba(234,179,8,0.1)',
              borderRadius: '12px',
              marginBottom: '16px',
              border: '1px solid rgba(234,179,8,0.2)',
            }}
          >
            <span style={{ fontSize: '16px' }}>
              {latestEvent.event_type === 'hr' ? '💥' : '⚾'}
            </span>
            <span style={{ fontSize: '16px', color: '#fbbf24' }}>
              {latestEvent.payload_json.description as string}
            </span>
          </div>
        )}

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#475569' }}>
          <span>WBC 超速報</span>
          <span>#WBC2026</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
