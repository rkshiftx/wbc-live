export const APP_NAME = 'WBC 超速報';
export const APP_DESCRIPTION = 'WBC 2026 リアルタイムスコア・実況・共有';
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';

export const REACTIONS = [
  { emoji: '🔥', label: '神' },
  { emoji: '⚾', label: 'ナイス' },
  { emoji: '😭', label: 'うおおお' },
  { emoji: '👏', label: '草' },
  { emoji: '💪', label: '最高' },
] as const;

export const POST_COOLDOWN_SEC = 10;
export const POST_MAX_LENGTH = 500;
export const TOTAL_INNINGS = 9;
