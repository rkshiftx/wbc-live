export interface TeamInfo {
  code: string;
  nameJa: string;
  nameEn: string;
  flag: string;
  primaryColor: string;
  pool: 'A' | 'B' | 'C' | 'D';
}

export const TEAMS: Record<string, TeamInfo> = {
  JPN: { code: 'JPN', nameJa: '日本', nameEn: 'Japan', flag: '🇯🇵', primaryColor: '#BC002D', pool: 'B' },
  USA: { code: 'USA', nameJa: 'アメリカ', nameEn: 'United States', flag: '🇺🇸', primaryColor: '#002868', pool: 'D' },
  KOR: { code: 'KOR', nameJa: '韓国', nameEn: 'Korea', flag: '🇰🇷', primaryColor: '#003478', pool: 'B' },
  TPE: { code: 'TPE', nameJa: 'チャイニーズタイペイ', nameEn: 'Chinese Taipei', flag: '🇹🇼', primaryColor: '#000095', pool: 'B' },
  AUS: { code: 'AUS', nameJa: 'オーストラリア', nameEn: 'Australia', flag: '🇦🇺', primaryColor: '#00843D', pool: 'B' },
  CZE: { code: 'CZE', nameJa: 'チェコ', nameEn: 'Czechia', flag: '🇨🇿', primaryColor: '#11457E', pool: 'B' },
  DOM: { code: 'DOM', nameJa: 'ドミニカ共和国', nameEn: 'Dominican Republic', flag: '🇩🇴', primaryColor: '#002D62', pool: 'A' },
  VEN: { code: 'VEN', nameJa: 'ベネズエラ', nameEn: 'Venezuela', flag: '🇻🇪', primaryColor: '#FFB81C', pool: 'A' },
  PUR: { code: 'PUR', nameJa: 'プエルトリコ', nameEn: 'Puerto Rico', flag: '🇵🇷', primaryColor: '#3C3B6E', pool: 'A' },
  NCA: { code: 'NCA', nameJa: 'ニカラグア', nameEn: 'Nicaragua', flag: '🇳🇮', primaryColor: '#0067C6', pool: 'A' },
  ISR: { code: 'ISR', nameJa: 'イスラエル', nameEn: 'Israel', flag: '🇮🇱', primaryColor: '#0038B8', pool: 'A' },
  PAN: { code: 'PAN', nameJa: 'パナマ', nameEn: 'Panama', flag: '🇵🇦', primaryColor: '#DA121A', pool: 'A' },
  MEX: { code: 'MEX', nameJa: 'メキシコ', nameEn: 'Mexico', flag: '🇲🇽', primaryColor: '#006847', pool: 'D' },
  CAN: { code: 'CAN', nameJa: 'カナダ', nameEn: 'Canada', flag: '🇨🇦', primaryColor: '#FF0000', pool: 'D' },
  GBR: { code: 'GBR', nameJa: 'イギリス', nameEn: 'Great Britain', flag: '🇬🇧', primaryColor: '#012169', pool: 'D' },
  CUB: { code: 'CUB', nameJa: 'キューバ', nameEn: 'Cuba', flag: '🇨🇺', primaryColor: '#002A8F', pool: 'C' },
  NED: { code: 'NED', nameJa: 'オランダ', nameEn: 'Netherlands', flag: '🇳🇱', primaryColor: '#FF6600', pool: 'C' },
  ITA: { code: 'ITA', nameJa: 'イタリア', nameEn: 'Italy', flag: '🇮🇹', primaryColor: '#009246', pool: 'C' },
  COL: { code: 'COL', nameJa: 'コロンビア', nameEn: 'Colombia', flag: '🇨🇴', primaryColor: '#FCD116', pool: 'C' },
  CHN: { code: 'CHN', nameJa: '中国', nameEn: 'China', flag: '🇨🇳', primaryColor: '#DE2910', pool: 'D' },
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
