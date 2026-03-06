export interface Game {
  id: string;
  starts_at: string;
  home_team: string;
  away_team: string;
  status: 'scheduled' | 'live' | 'final' | 'postponed';
  score_home: number;
  score_away: number;
  inning: string | null;
  inning_scores?: InningScore[];
}

export interface InningScore {
  inning: number;
  home: number | null;
  away: number | null;
}

export interface GameEvent {
  id: string;
  game_id: string;
  event_type: 'score' | 'hr' | 'final' | 'info';
  payload_json: {
    inning?: string;
    team?: string;
    player?: string;
    runs?: number;
    score_home?: number;
    score_away?: number;
    description?: string;
    [key: string]: unknown;
  };
  source_ts: string | null;
  created_at: string;
  unique_key: string | null;
}

export interface Thread {
  id: string;
  game_id: string;
  created_at: string;
}

export interface Post {
  id: string;
  thread_id: string;
  anon_id: string;
  body: string;
  reply_to_post_id: string | null;
  created_at: string;
  deleted_at: string | null;
}

export interface Report {
  id: string;
  post_id: string;
  reason: string;
  created_at: string;
  status: 'pending' | 'reviewed' | 'actioned';
}

export interface PlayerAtBat {
  inning: string;
  result: 'single' | 'double' | 'triple' | 'hr' | 'walk' | 'strikeout' | 'groundout' | 'flyout' | 'sacrifice' | 'hbp' | 'error' | 'other';
  description: string;
  rbi: number;
}

export interface PlayerTracker {
  player_name: string;
  team: string;
  game_id: string;
  at_bats: PlayerAtBat[];
  stats: {
    ab: number;
    hits: number;
    hr: number;
    rbi: number;
    avg: string;
  };
}

export interface TournamentGame {
  id: string;
  round: 'pool' | 'quarter' | 'semi' | 'final';
  pool?: 'A' | 'B' | 'C' | 'D';
  home_team: string | null;
  away_team: string | null;
  score_home: number;
  score_away: number;
  status: 'scheduled' | 'live' | 'final' | 'tbd';
  starts_at: string;
}
