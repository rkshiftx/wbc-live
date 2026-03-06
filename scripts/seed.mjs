import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://houfyhmmomuntvjllbjw.supabase.co',
  // service_role key for admin operations
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvdWZ5aG1tb211bnR2amxsYmp3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjgxNDIyNCwiZXhwIjoyMDg4MzkwMjI0fQ.TkuqPQds8jeoiINRjLjbHK7iak9LYk2olHFFrbW144g'
);

// ============================================================
// POOL C - Tokyo Dome
// ============================================================
const poolC = [
  { id: '10000000-0000-0000-0000-000000000c01', starts_at: '2026-03-05T03:00:00Z', home_team: 'AUS', away_team: 'TPE', status: 'final', score_home: 3, score_away: 0, inning: 'F', round: 'pool', pool: 'C' },
  { id: '10000000-0000-0000-0000-000000000c02', starts_at: '2026-03-05T10:00:00Z', home_team: 'KOR', away_team: 'CZE', status: 'final', score_home: 11, score_away: 4, inning: 'F', round: 'pool', pool: 'C' },
  { id: '10000000-0000-0000-0000-000000000c03', starts_at: '2026-03-06T03:00:00Z', home_team: 'AUS', away_team: 'CZE', status: 'final', score_home: 5, score_away: 1, inning: 'F', round: 'pool', pool: 'C' },
  { id: '10000000-0000-0000-0000-000000000c04', starts_at: '2026-03-06T10:00:00Z', home_team: 'JPN', away_team: 'TPE', status: 'final', score_home: 13, score_away: 0, inning: 'F', round: 'pool', pool: 'C',
    inning_scores: [
      {inning:1,home:1,away:0},{inning:2,home:7,away:0},{inning:3,home:0,away:0},
      {inning:4,home:0,away:0},{inning:5,home:2,away:0},{inning:6,home:0,away:0},{inning:7,home:3,away:0}
    ]},
  { id: '10000000-0000-0000-0000-000000000c05', starts_at: '2026-03-07T03:00:00Z', home_team: 'CZE', away_team: 'TPE', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'C' },
  { id: '10000000-0000-0000-0000-000000000c06', starts_at: '2026-03-07T10:00:00Z', home_team: 'JPN', away_team: 'KOR', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'C' },
  { id: '10000000-0000-0000-0000-000000000c07', starts_at: '2026-03-08T03:00:00Z', home_team: 'KOR', away_team: 'TPE', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'C' },
  { id: '10000000-0000-0000-0000-000000000c08', starts_at: '2026-03-08T10:00:00Z', home_team: 'JPN', away_team: 'AUS', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'C' },
  { id: '10000000-0000-0000-0000-000000000c09', starts_at: '2026-03-09T10:00:00Z', home_team: 'AUS', away_team: 'KOR', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'C' },
  { id: '10000000-0000-0000-0000-000000000c10', starts_at: '2026-03-10T10:00:00Z', home_team: 'JPN', away_team: 'CZE', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'C' },
];

// ============================================================
// POOL A - San Juan
// ============================================================
const poolA = [
  { id: '10000000-0000-0000-0000-000000000a01', starts_at: '2026-03-06T16:00:00Z', home_team: 'PAN', away_team: 'CUB', status: 'final', score_home: 1, score_away: 3, inning: 'F', round: 'pool', pool: 'A' },
  { id: '10000000-0000-0000-0000-000000000a02', starts_at: '2026-03-06T23:00:00Z', home_team: 'COL', away_team: 'PUR', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'A' },
  { id: '10000000-0000-0000-0000-000000000a03', starts_at: '2026-03-07T16:00:00Z', home_team: 'CAN', away_team: 'COL', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'A' },
  { id: '10000000-0000-0000-0000-000000000a04', starts_at: '2026-03-07T23:00:00Z', home_team: 'PUR', away_team: 'PAN', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'A' },
  { id: '10000000-0000-0000-0000-000000000a05', starts_at: '2026-03-08T16:00:00Z', home_team: 'CUB', away_team: 'COL', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'A' },
  { id: '10000000-0000-0000-0000-000000000a06', starts_at: '2026-03-08T23:00:00Z', home_team: 'CAN', away_team: 'PAN', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'A' },
  { id: '10000000-0000-0000-0000-000000000a07', starts_at: '2026-03-09T16:00:00Z', home_team: 'PAN', away_team: 'COL', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'A' },
  { id: '10000000-0000-0000-0000-000000000a08', starts_at: '2026-03-09T23:00:00Z', home_team: 'PUR', away_team: 'CUB', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'A' },
  { id: '10000000-0000-0000-0000-000000000a09', starts_at: '2026-03-10T23:00:00Z', home_team: 'PUR', away_team: 'CAN', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'A' },
  { id: '10000000-0000-0000-0000-000000000a10', starts_at: '2026-03-11T19:00:00Z', home_team: 'CUB', away_team: 'CAN', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'A' },
];

// ============================================================
// POOL B - Houston
// ============================================================
const poolB = [
  { id: '10000000-0000-0000-0000-000000000b01', starts_at: '2026-03-06T18:00:00Z', home_team: 'GBR', away_team: 'MEX', status: 'final', score_home: 2, score_away: 8, inning: 'F', round: 'pool', pool: 'B' },
  { id: '10000000-0000-0000-0000-000000000b02', starts_at: '2026-03-07T01:00:00Z', home_team: 'BRA', away_team: 'USA', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'B' },
  { id: '10000000-0000-0000-0000-000000000b03', starts_at: '2026-03-07T18:00:00Z', home_team: 'ITA', away_team: 'BRA', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'B' },
  { id: '10000000-0000-0000-0000-000000000b04', starts_at: '2026-03-08T01:00:00Z', home_team: 'USA', away_team: 'GBR', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'B' },
  { id: '10000000-0000-0000-0000-000000000b05', starts_at: '2026-03-08T17:00:00Z', home_team: 'ITA', away_team: 'GBR', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'B' },
  { id: '10000000-0000-0000-0000-000000000b06', starts_at: '2026-03-09T00:00:00Z', home_team: 'MEX', away_team: 'BRA', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'B' },
  { id: '10000000-0000-0000-0000-000000000b07', starts_at: '2026-03-09T17:00:00Z', home_team: 'GBR', away_team: 'BRA', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'B' },
  { id: '10000000-0000-0000-0000-000000000b08', starts_at: '2026-03-10T00:00:00Z', home_team: 'USA', away_team: 'MEX', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'B' },
  { id: '10000000-0000-0000-0000-000000000b09', starts_at: '2026-03-11T01:00:00Z', home_team: 'USA', away_team: 'ITA', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'B' },
  { id: '10000000-0000-0000-0000-000000000b10', starts_at: '2026-03-11T23:00:00Z', home_team: 'MEX', away_team: 'ITA', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'B' },
];

// ============================================================
// POOL D - Miami
// ============================================================
const poolD = [
  { id: '10000000-0000-0000-0000-000000000d01', starts_at: '2026-03-06T00:00:00Z', home_team: 'NED', away_team: 'VEN', status: 'final', score_home: 2, score_away: 6, inning: 'F', round: 'pool', pool: 'D' },
  { id: '10000000-0000-0000-0000-000000000d02', starts_at: '2026-03-07T00:00:00Z', home_team: 'DOM', away_team: 'NCA', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'D' },
  { id: '10000000-0000-0000-0000-000000000d03', starts_at: '2026-03-07T17:00:00Z', home_team: 'NED', away_team: 'NCA', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'D' },
  { id: '10000000-0000-0000-0000-000000000d04', starts_at: '2026-03-08T00:00:00Z', home_team: 'VEN', away_team: 'ISR', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'D' },
  { id: '10000000-0000-0000-0000-000000000d05', starts_at: '2026-03-08T16:00:00Z', home_team: 'DOM', away_team: 'NED', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'D' },
  { id: '10000000-0000-0000-0000-000000000d06', starts_at: '2026-03-08T23:00:00Z', home_team: 'ISR', away_team: 'NCA', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'D' },
  { id: '10000000-0000-0000-0000-000000000d07', starts_at: '2026-03-09T16:00:00Z', home_team: 'ISR', away_team: 'DOM', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'D' },
  { id: '10000000-0000-0000-0000-000000000d08', starts_at: '2026-03-09T23:00:00Z', home_team: 'NCA', away_team: 'VEN', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'D' },
  { id: '10000000-0000-0000-0000-000000000d09', starts_at: '2026-03-10T23:00:00Z', home_team: 'NED', away_team: 'ISR', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'D' },
  { id: '10000000-0000-0000-0000-000000000d10', starts_at: '2026-03-12T00:00:00Z', home_team: 'VEN', away_team: 'DOM', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'pool', pool: 'D' },
];

// ============================================================
// KNOCKOUT ROUNDS
// ============================================================
const knockouts = [
  { id: '10000000-0000-0000-0000-0000000000e1', starts_at: '2026-03-13T22:30:00Z', home_team: 'TBD', away_team: 'TBD', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'quarter', pool: null },
  { id: '10000000-0000-0000-0000-0000000000e2', starts_at: '2026-03-14T00:00:00Z', home_team: 'TBD', away_team: 'TBD', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'quarter', pool: null },
  { id: '10000000-0000-0000-0000-0000000000e3', starts_at: '2026-03-14T19:00:00Z', home_team: 'TBD', away_team: 'TBD', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'quarter', pool: null },
  { id: '10000000-0000-0000-0000-0000000000e4', starts_at: '2026-03-15T01:00:00Z', home_team: 'TBD', away_team: 'TBD', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'quarter', pool: null },
  { id: '10000000-0000-0000-0000-0000000000e5', starts_at: '2026-03-16T00:00:00Z', home_team: 'TBD', away_team: 'TBD', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'semi', pool: null },
  { id: '10000000-0000-0000-0000-0000000000e6', starts_at: '2026-03-17T00:00:00Z', home_team: 'TBD', away_team: 'TBD', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'semi', pool: null },
  { id: '10000000-0000-0000-0000-0000000000e7', starts_at: '2026-03-18T00:00:00Z', home_team: 'TBD', away_team: 'TBD', status: 'scheduled', score_home: 0, score_away: 0, inning: null, round: 'final', pool: null },
];

const allGames = [...poolC, ...poolA, ...poolB, ...poolD, ...knockouts];

// Events for completed games
const events = [
  // Japan 13 - Chinese Taipei 0
  { game_id: '10000000-0000-0000-0000-000000000c04', event_type: 'hr', payload_json: {inning:'2回表',team:'JPN',player:'大谷翔平',runs:4,score_home:0,score_away:5,description:'大谷翔平 満塁ホームラン！ 5-0'}, created_at: '2026-03-06T10:30:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000c04', event_type: 'score', payload_json: {inning:'2回表',team:'JPN',runs:2,score_home:0,score_away:7,description:'大谷翔平 タイムリーヒット 7-0'}, created_at: '2026-03-06T10:35:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000c04', event_type: 'score', payload_json: {inning:'5回表',team:'JPN',runs:2,score_home:0,score_away:10,description:'吉田正尚 2点タイムリー 10-0'}, created_at: '2026-03-06T11:15:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000c04', event_type: 'score', payload_json: {inning:'7回表',team:'JPN',runs:3,score_home:0,score_away:13,description:'村上宗隆 3点タイムリー 13-0'}, created_at: '2026-03-06T11:50:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000c04', event_type: 'final', payload_json: {score_home:0,score_away:13,description:'試合終了 日本 13-0 チャイニーズタイペイ（7回コールド）'}, created_at: '2026-03-06T12:00:00Z' },
  // Australia 3 - Chinese Taipei 0
  { game_id: '10000000-0000-0000-0000-000000000c01', event_type: 'hr', payload_json: {inning:'3回裏',team:'AUS',player:'Travis Bazzana',runs:1,score_home:1,score_away:0,description:'バザーナ ソロホームラン！ 1-0'}, created_at: '2026-03-05T04:00:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000c01', event_type: 'score', payload_json: {inning:'6回裏',team:'AUS',runs:2,score_home:3,score_away:0,description:'オーストラリア 2点追加 3-0'}, created_at: '2026-03-05T05:30:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000c01', event_type: 'final', payload_json: {score_home:3,score_away:0,description:'試合終了 オーストラリア 3-0 チャイニーズタイペイ'}, created_at: '2026-03-05T06:00:00Z' },
  // Korea 11 - Czechia 4
  { game_id: '10000000-0000-0000-0000-000000000c02', event_type: 'hr', payload_json: {inning:'1回裏',team:'KOR',runs:3,score_home:3,score_away:0,description:'韓国 3ランホームラン！ 3-0'}, created_at: '2026-03-05T10:30:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000c02', event_type: 'score', payload_json: {inning:'4回表',team:'CZE',runs:2,score_home:3,score_away:2,description:'チェコ 2点返す'}, created_at: '2026-03-05T11:30:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000c02', event_type: 'score', payload_json: {inning:'5回裏',team:'KOR',runs:4,score_home:7,score_away:2,description:'韓国 4点追加で突き放す 7-2'}, created_at: '2026-03-05T12:00:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000c02', event_type: 'final', payload_json: {score_home:11,score_away:4,description:'試合終了 韓国 11-4 チェコ'}, created_at: '2026-03-05T13:00:00Z' },
  // Australia 5 - Czechia 1
  { game_id: '10000000-0000-0000-0000-000000000c03', event_type: 'score', payload_json: {inning:'2回裏',team:'AUS',runs:2,score_home:2,score_away:0,description:'オーストラリア 2点先制'}, created_at: '2026-03-06T03:40:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000c03', event_type: 'score', payload_json: {inning:'5回表',team:'CZE',runs:1,score_home:2,score_away:1,description:'チェコ 1点返す'}, created_at: '2026-03-06T04:45:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000c03', event_type: 'final', payload_json: {score_home:5,score_away:1,description:'試合終了 オーストラリア 5-1 チェコ'}, created_at: '2026-03-06T06:00:00Z' },
  // Cuba 3 - Panama 1
  { game_id: '10000000-0000-0000-0000-000000000a01', event_type: 'score', payload_json: {inning:'3回表',team:'CUB',runs:1,score_home:0,score_away:1,description:'キューバ 先制点'}, created_at: '2026-03-06T17:00:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000a01', event_type: 'score', payload_json: {inning:'5回裏',team:'PAN',runs:1,score_home:1,score_away:1,description:'パナマ 同点に追いつく'}, created_at: '2026-03-06T18:00:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000a01', event_type: 'score', payload_json: {inning:'7回表',team:'CUB',runs:2,score_home:1,score_away:3,description:'キューバ 2点追加で勝ち越し'}, created_at: '2026-03-06T18:45:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000a01', event_type: 'final', payload_json: {score_home:1,score_away:3,description:'試合終了 パナマ 1-3 キューバ'}, created_at: '2026-03-06T19:30:00Z' },
  // Mexico 8 - Great Britain 2
  { game_id: '10000000-0000-0000-0000-000000000b01', event_type: 'score', payload_json: {inning:'1回表',team:'MEX',runs:2,score_home:0,score_away:2,description:'メキシコ 2点先制'}, created_at: '2026-03-06T18:30:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000b01', event_type: 'hr', payload_json: {inning:'3回表',team:'MEX',runs:3,score_home:0,score_away:5,description:'メキシコ 3ランホームラン！ 5-0'}, created_at: '2026-03-06T19:00:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000b01', event_type: 'score', payload_json: {inning:'5回裏',team:'GBR',runs:2,score_home:2,score_away:5,description:'イギリス 2点返す'}, created_at: '2026-03-06T19:45:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000b01', event_type: 'final', payload_json: {score_home:2,score_away:8,description:'試合終了 イギリス 2-8 メキシコ'}, created_at: '2026-03-06T21:00:00Z' },
  // Venezuela 6 - Netherlands 2
  { game_id: '10000000-0000-0000-0000-000000000d01', event_type: 'score', payload_json: {inning:'2回表',team:'VEN',runs:3,score_home:0,score_away:3,description:'ベネズエラ 3点先制'}, created_at: '2026-03-06T00:40:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000d01', event_type: 'score', payload_json: {inning:'4回裏',team:'NED',runs:2,score_home:2,score_away:3,description:'オランダ 2点返す'}, created_at: '2026-03-06T01:30:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000d01', event_type: 'score', payload_json: {inning:'6回表',team:'VEN',runs:3,score_home:2,score_away:6,description:'ベネズエラ 3点追加 6-2'}, created_at: '2026-03-06T02:15:00Z' },
  { game_id: '10000000-0000-0000-0000-000000000d01', event_type: 'final', payload_json: {score_home:2,score_away:6,description:'試合終了 オランダ 2-6 ベネズエラ'}, created_at: '2026-03-06T03:00:00Z' },
];

// Threads for all games
const threads = allGames.map(g => ({
  id: g.id.replace('10000000', '20000000'),
  game_id: g.id,
}));

async function seed() {
  console.log('Seeding games...');
  const { error: gamesErr } = await supabase.from('games').insert(allGames);
  if (gamesErr) { console.error('Games error:', gamesErr); return; }
  console.log(`Inserted ${allGames.length} games`);

  console.log('Seeding events...');
  const { error: eventsErr } = await supabase.from('events').insert(events);
  if (eventsErr) { console.error('Events error:', eventsErr); return; }
  console.log(`Inserted ${events.length} events`);

  console.log('Seeding threads...');
  const { error: threadsErr } = await supabase.from('threads').insert(threads);
  if (threadsErr) { console.error('Threads error:', threadsErr); return; }
  console.log(`Inserted ${threads.length} threads`);

  console.log('Done!');
}

seed();
