import type { DataSourceAdapter } from './adapter';
import type { Game, GameEvent, Thread, Post, PlayerTracker, TournamentGame } from '@/types/game';

const MOCK_GAMES: Game[] = [
  {
    id: 'game-001',
    starts_at: '2026-03-07T19:00:00+09:00',
    home_team: 'JPN',
    away_team: 'CZE',
    status: 'live',
    score_home: 7,
    score_away: 1,
    inning: 'B6',
    inning_scores: [
      { inning: 1, home: 2, away: 0 },
      { inning: 2, home: 0, away: 1 },
      { inning: 3, home: 3, away: 0 },
      { inning: 4, home: 0, away: 0 },
      { inning: 5, home: 0, away: 0 },
      { inning: 6, home: 2, away: null },
    ],
  },
  {
    id: 'game-002',
    starts_at: '2026-03-07T12:00:00+09:00',
    home_team: 'KOR',
    away_team: 'AUS',
    status: 'final',
    score_home: 5,
    score_away: 2,
    inning: 'F',
    inning_scores: [
      { inning: 1, home: 0, away: 0 },
      { inning: 2, home: 2, away: 0 },
      { inning: 3, home: 0, away: 1 },
      { inning: 4, home: 1, away: 0 },
      { inning: 5, home: 0, away: 1 },
      { inning: 6, home: 0, away: 0 },
      { inning: 7, home: 2, away: 0 },
      { inning: 8, home: 0, away: 0 },
      { inning: 9, home: 0, away: 0 },
    ],
  },
  {
    id: 'game-003',
    starts_at: '2026-03-08T19:00:00+09:00',
    home_team: 'JPN',
    away_team: 'AUS',
    status: 'scheduled',
    score_home: 0,
    score_away: 0,
    inning: null,
  },
  {
    id: 'game-004',
    starts_at: '2026-03-08T12:00:00+09:00',
    home_team: 'TPE',
    away_team: 'CZE',
    status: 'scheduled',
    score_home: 0,
    score_away: 0,
    inning: null,
  },
];

const MOCK_EVENTS: Record<string, GameEvent[]> = {
  'game-001': [
    {
      id: 'evt-001',
      game_id: 'game-001',
      event_type: 'score',
      payload_json: { inning: 'B1', team: 'JPN', runs: 2, score_home: 2, score_away: 0, description: '鈴木誠也 2点タイムリー二塁打' },
      source_ts: null,
      created_at: '2026-03-07T19:25:00+09:00',
      unique_key: 'game001_score_B1',
    },
    {
      id: 'evt-002',
      game_id: 'game-001',
      event_type: 'score',
      payload_json: { inning: 'T2', team: 'CZE', runs: 1, score_home: 2, score_away: 1, description: 'Mlejnek ソロホームラン' },
      source_ts: null,
      created_at: '2026-03-07T19:40:00+09:00',
      unique_key: 'game001_score_T2',
    },
    {
      id: 'evt-003',
      game_id: 'game-001',
      event_type: 'hr',
      payload_json: { inning: 'B3', team: 'JPN', player: '大谷翔平', runs: 2, score_home: 4, score_away: 1, description: '大谷翔平 2ランホームラン！レフトスタンド上段へ' },
      source_ts: null,
      created_at: '2026-03-07T19:55:00+09:00',
      unique_key: 'game001_hr_B3_ohtani',
    },
    {
      id: 'evt-004',
      game_id: 'game-001',
      event_type: 'score',
      payload_json: { inning: 'B3', team: 'JPN', runs: 1, score_home: 5, score_away: 1, description: '村上宗隆 犠牲フライ' },
      source_ts: null,
      created_at: '2026-03-07T19:58:00+09:00',
      unique_key: 'game001_score_B3_2',
    },
    {
      id: 'evt-005',
      game_id: 'game-001',
      event_type: 'hr',
      payload_json: { inning: 'B6', team: 'JPN', player: '吉田正尚', runs: 2, score_home: 7, score_away: 1, description: '吉田正尚 2ランホームラン！ライトへ' },
      source_ts: null,
      created_at: '2026-03-07T20:30:00+09:00',
      unique_key: 'game001_hr_B6_yoshida',
    },
  ],
};

const MOCK_THREADS: Record<string, Thread> = {
  'game-001': { id: 'thread-001', game_id: 'game-001', created_at: '2026-03-07T18:30:00+09:00' },
  'game-002': { id: 'thread-002', game_id: 'game-002', created_at: '2026-03-07T11:30:00+09:00' },
};

const MOCK_POSTS: Record<string, Post[]> = {
  'thread-001': [
    { id: 'post-001', thread_id: 'thread-001', anon_id: 'a3f2c1e8', body: '大谷キタ━━━━(ﾟ∀ﾟ)━━━━!!', reply_to_post_id: null, created_at: '2026-03-07T19:55:30+09:00', deleted_at: null },
    { id: 'post-002', thread_id: 'thread-001', anon_id: 'b7d4e9f1', body: '>>post-001\nまじで化け物すぎるwww', reply_to_post_id: 'post-001', created_at: '2026-03-07T19:55:45+09:00', deleted_at: null },
    { id: 'post-003', thread_id: 'thread-001', anon_id: 'c2a8b5d3', body: '今日の大谷の打撃フォーム完璧だな', reply_to_post_id: null, created_at: '2026-03-07T19:56:00+09:00', deleted_at: null },
    { id: 'post-004', thread_id: 'thread-001', anon_id: 'a3f2c1e8', body: '吉田もきたああああ！！', reply_to_post_id: null, created_at: '2026-03-07T20:30:15+09:00', deleted_at: null },
    { id: 'post-005', thread_id: 'thread-001', anon_id: 'd9e1f4a6', body: 'チェコのピッチャーかわいそうになってきた', reply_to_post_id: null, created_at: '2026-03-07T20:30:30+09:00', deleted_at: null },
  ],
};

const MOCK_OHTANI: PlayerTracker = {
  player_name: '大谷翔平',
  team: 'JPN',
  game_id: 'game-001',
  at_bats: [
    { inning: 'B1', result: 'walk', description: '四球', rbi: 0 },
    { inning: 'B3', result: 'hr', description: 'レフトスタンド上段へ2ランホームラン', rbi: 2 },
    { inning: 'B5', result: 'single', description: 'センター前ヒット', rbi: 0 },
  ],
  stats: { ab: 2, hits: 2, hr: 1, rbi: 2, avg: '1.000' },
};

const MOCK_TOURNAMENT: TournamentGame[] = [
  // Pool B
  { id: 'game-001', round: 'pool', pool: 'B', home_team: 'JPN', away_team: 'CZE', score_home: 7, score_away: 1, status: 'live', starts_at: '2026-03-07T19:00:00+09:00' },
  { id: 'game-002', round: 'pool', pool: 'B', home_team: 'KOR', away_team: 'AUS', score_home: 5, score_away: 2, status: 'final', starts_at: '2026-03-07T12:00:00+09:00' },
  { id: 'game-003', round: 'pool', pool: 'B', home_team: 'JPN', away_team: 'AUS', score_home: 0, score_away: 0, status: 'scheduled', starts_at: '2026-03-08T19:00:00+09:00' },
  { id: 'game-004', round: 'pool', pool: 'B', home_team: 'TPE', away_team: 'CZE', score_home: 0, score_away: 0, status: 'scheduled', starts_at: '2026-03-08T12:00:00+09:00' },
  // Knockout rounds (TBD)
  { id: 'qf-1', round: 'quarter', home_team: null, away_team: null, score_home: 0, score_away: 0, status: 'tbd', starts_at: '2026-03-13T19:00:00+09:00' },
  { id: 'qf-2', round: 'quarter', home_team: null, away_team: null, score_home: 0, score_away: 0, status: 'tbd', starts_at: '2026-03-13T12:00:00+09:00' },
  { id: 'sf-1', round: 'semi', home_team: null, away_team: null, score_home: 0, score_away: 0, status: 'tbd', starts_at: '2026-03-15T19:00:00+09:00' },
  { id: 'sf-2', round: 'semi', home_team: null, away_team: null, score_home: 0, score_away: 0, status: 'tbd', starts_at: '2026-03-16T19:00:00+09:00' },
  { id: 'final-1', round: 'final', home_team: null, away_team: null, score_home: 0, score_away: 0, status: 'tbd', starts_at: '2026-03-17T19:00:00+09:00' },
];

export class MockAdapter implements DataSourceAdapter {
  async getGames(): Promise<Game[]> {
    return MOCK_GAMES;
  }

  async getGame(gameId: string): Promise<Game | null> {
    return MOCK_GAMES.find(g => g.id === gameId) ?? null;
  }

  async getEvents(gameId: string): Promise<GameEvent[]> {
    return MOCK_EVENTS[gameId] ?? [];
  }

  async getThread(gameId: string): Promise<Thread | null> {
    return MOCK_THREADS[gameId] ?? null;
  }

  async getPosts(threadId: string): Promise<Post[]> {
    return MOCK_POSTS[threadId] ?? [];
  }

  async getTournament(): Promise<TournamentGame[]> {
    return MOCK_TOURNAMENT;
  }

  async getPlayerTracker(_gameId: string, playerName: string): Promise<PlayerTracker | null> {
    if (playerName === '大谷翔平') return MOCK_OHTANI;
    return null;
  }
}
