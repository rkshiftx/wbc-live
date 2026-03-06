import { getTeam } from './teams';

export function buildXShareUrl(gameUrl: string, homeTeam: string, awayTeam: string, scoreHome: number, scoreAway: number): string {
  const home = getTeam(homeTeam);
  const away = getTeam(awayTeam);
  const text = `${away.flag} ${away.nameJa} ${scoreAway} - ${scoreHome} ${home.nameJa} ${home.flag}\n\nWBC 2026 超速報`;
  const params = new URLSearchParams({
    text,
    url: gameUrl,
    hashtags: 'WBC,WBC2026',
  });
  return `https://twitter.com/intent/tweet?${params.toString()}`;
}

export function buildLINEShareUrl(gameUrl: string): string {
  return `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(gameUrl)}`;
}
