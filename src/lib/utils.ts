export function formatTime(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', hour12: false });
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('ja-JP', { month: 'short', day: 'numeric', weekday: 'short' });
}

export function relativeTime(dateStr: string): string {
  const now = Date.now();
  const diff = now - new Date(dateStr).getTime();
  if (diff < 0) return formatTime(dateStr);
  const sec = Math.floor(diff / 1000);
  if (sec < 60) return `${sec}秒前`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}分前`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}時間前`;
  return formatDate(dateStr);
}

export function inningDisplay(inning: string | null): string {
  if (!inning) return '';
  if (inning === 'F') return '試合終了';
  const half = inning.startsWith('T') ? '表' : '裏';
  const num = inning.slice(1);
  return `${num}回${half}`;
}

export function statusLabel(status: string, inning: string | null): string {
  switch (status) {
    case 'live':
      return inning ? inningDisplay(inning) : 'LIVE';
    case 'final':
      return '試合終了';
    case 'scheduled':
      return '試合前';
    case 'postponed':
      return '延期';
    default:
      return status;
  }
}

export function resultLabel(result: string): string {
  const map: Record<string, string> = {
    single: '単打',
    double: '二塁打',
    triple: '三塁打',
    hr: '本塁打',
    walk: '四球',
    strikeout: '三振',
    groundout: 'ゴロ',
    flyout: 'フライ',
    sacrifice: '犠打',
    hbp: '死球',
    error: 'エラー',
    other: 'その他',
  };
  return map[result] ?? result;
}
