import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const size = parseInt(request.nextUrl.searchParams.get('size') ?? '512');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e3a5f 0%, #0a1628 100%)',
          borderRadius: size > 200 ? '96px' : '32px',
        }}
      >
        <div style={{ fontSize: size * 0.35, display: 'flex' }}>⚾</div>
        <div
          style={{
            fontSize: size * 0.14,
            fontWeight: 900,
            color: 'white',
            marginTop: size * 0.02,
            letterSpacing: '2px',
            display: 'flex',
          }}
        >
          超速報
        </div>
        <div
          style={{
            width: size * 0.5,
            height: size * 0.008,
            background: '#ef4444',
            borderRadius: '4px',
            marginTop: size * 0.02,
            display: 'flex',
          }}
        />
      </div>
    ),
    { width: size, height: size }
  );
}
