export interface TeamInfo {
  code: string;
  nameJa: string;
  nameEn: string;
  flag: string;
  primaryColor: string;
  pool: 'A' | 'B' | 'C' | 'D';
}

export const TEAMS: Record<string, TeamInfo> = {
  // Pool A - San Juan, Puerto Rico
  CAN: { code: 'CAN', nameJa: 'カナダ', nameEn: 'Canada', flag: '🇨🇦', primaryColor: '#FF0000', pool: 'A' },
  COL: { code: 'COL', nameJa: 'コロンビア', nameEn: 'Colombia', flag: '🇨🇴', primaryColor: '#FCD116', pool: 'A' },
  CUB: { code: 'CUB', nameJa: 'キューバ', nameEn: 'Cuba', flag: '🇨🇺', primaryColor: '#002A8F', pool: 'A' },
  PAN: { code: 'PAN', nameJa: 'パナマ', nameEn: 'Panama', flag: '🇵🇦', primaryColor: '#DA121A', pool: 'A' },
  PUR: { code: 'PUR', nameJa: 'プエルトリコ', nameEn: 'Puerto Rico', flag: '🇵🇷', primaryColor: '#3C3B6E', pool: 'A' },

  // Pool B - Houston, Texas
  BRA: { code: 'BRA', nameJa: 'ブラジル', nameEn: 'Brazil', flag: '🇧🇷', primaryColor: '#009C3B', pool: 'B' },
  GBR: { code: 'GBR', nameJa: 'イギリス', nameEn: 'Great Britain', flag: '🇬🇧', primaryColor: '#012169', pool: 'B' },
  ITA: { code: 'ITA', nameJa: 'イタリア', nameEn: 'Italy', flag: '🇮🇹', primaryColor: '#009246', pool: 'B' },
  MEX: { code: 'MEX', nameJa: 'メキシコ', nameEn: 'Mexico', flag: '🇲🇽', primaryColor: '#006847', pool: 'B' },
  USA: { code: 'USA', nameJa: 'アメリカ', nameEn: 'United States', flag: '🇺🇸', primaryColor: '#002868', pool: 'B' },

  // Pool C - Tokyo, Japan
  AUS: { code: 'AUS', nameJa: 'オーストラリア', nameEn: 'Australia', flag: '🇦🇺', primaryColor: '#00843D', pool: 'C' },
  TPE: { code: 'TPE', nameJa: 'チャイニーズタイペイ', nameEn: 'Chinese Taipei', flag: '🇹🇼', primaryColor: '#000095', pool: 'C' },
  CZE: { code: 'CZE', nameJa: 'チェコ', nameEn: 'Czechia', flag: '🇨🇿', primaryColor: '#11457E', pool: 'C' },
  JPN: { code: 'JPN', nameJa: '日本', nameEn: 'Japan', flag: '🇯🇵', primaryColor: '#BC002D', pool: 'C' },
  KOR: { code: 'KOR', nameJa: '韓国', nameEn: 'Korea', flag: '🇰🇷', primaryColor: '#003478', pool: 'C' },

  // Pool D - Miami, Florida
  DOM: { code: 'DOM', nameJa: 'ドミニカ共和国', nameEn: 'Dominican Republic', flag: '🇩🇴', primaryColor: '#002D62', pool: 'D' },
  ISR: { code: 'ISR', nameJa: 'イスラエル', nameEn: 'Israel', flag: '🇮🇱', primaryColor: '#0038B8', pool: 'D' },
  NED: { code: 'NED', nameJa: 'オランダ', nameEn: 'Netherlands', flag: '🇳🇱', primaryColor: '#FF6600', pool: 'D' },
  NCA: { code: 'NCA', nameJa: 'ニカラグア', nameEn: 'Nicaragua', flag: '🇳🇮', primaryColor: '#0067C6', pool: 'D' },
  VEN: { code: 'VEN', nameJa: 'ベネズエラ', nameEn: 'Venezuela', flag: '🇻🇪', primaryColor: '#FFB81C', pool: 'D' },
};

export function getTeam(code: string): TeamInfo {
  return TEAMS[code] ?? {
    code,
    nameJa: code,
    nameEn: code,
    flag: '🏳️',
    primaryColor: '#666666',
    pool: 'A',
  };
}
