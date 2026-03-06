-- WBC 2026 Full Tournament Seed Data
-- All 47 games: 40 pool play + 4 quarterfinals + 2 semifinals + 1 final
-- Times in UTC. Pool C (Tokyo) is JST-9, Pool A/B/D (Americas) are EST+5 before Mar 8, EDT+4 after

-- ============================================================
-- POOL C - Tokyo Dome, Tokyo, Japan
-- Teams: AUS, TPE, CZE, JPN, KOR
-- ============================================================

-- C01: Mar 4 10pm EST = Mar 5 3:00 UTC (Mar 5 12:00 JST)
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000c01', '2026-03-05T03:00:00Z', 'AUS', 'TPE', 'final', 3, 0, 'F', 'pool', 'C');

-- C02: Mar 5 5am EST = Mar 5 10:00 UTC (Mar 5 19:00 JST)
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000c02', '2026-03-05T10:00:00Z', 'KOR', 'CZE', 'final', 11, 4, 'F', 'pool', 'C');

-- C03: Mar 5 10pm EST = Mar 6 3:00 UTC (Mar 6 12:00 JST)
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000c03', '2026-03-06T03:00:00Z', 'AUS', 'CZE', 'final', 5, 1, 'F', 'pool', 'C');

-- C04: Mar 6 5am EST = Mar 6 10:00 UTC (Mar 6 19:00 JST)
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool,
  inning_scores)
VALUES ('10000000-0000-0000-0000-000000000c04', '2026-03-06T10:00:00Z', 'JPN', 'TPE', 'final', 13, 0, 'F', 'pool', 'C',
  '[{"inning":1,"home":1,"away":0},{"inning":2,"home":7,"away":0},{"inning":3,"home":0,"away":0},{"inning":4,"home":0,"away":0},{"inning":5,"home":2,"away":0},{"inning":6,"home":0,"away":0},{"inning":7,"home":3,"away":0}]');

-- C05: Mar 6 10pm EST = Mar 7 3:00 UTC (Mar 7 12:00 JST)
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000c05', '2026-03-07T03:00:00Z', 'CZE', 'TPE', 'scheduled', 0, 0, NULL, 'pool', 'C');

-- C06: Mar 7 5am EST = Mar 7 10:00 UTC (Mar 7 19:00 JST)
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000c06', '2026-03-07T10:00:00Z', 'JPN', 'KOR', 'scheduled', 0, 0, NULL, 'pool', 'C');

-- C07: Mar 7 10pm EST = Mar 8 3:00 UTC (Mar 8 12:00 JST)
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000c07', '2026-03-08T03:00:00Z', 'KOR', 'TPE', 'scheduled', 0, 0, NULL, 'pool', 'C');

-- C08: Mar 8 6am EDT = Mar 8 10:00 UTC (Mar 8 19:00 JST)
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000c08', '2026-03-08T10:00:00Z', 'JPN', 'AUS', 'scheduled', 0, 0, NULL, 'pool', 'C');

-- C09: Mar 9 6am EDT = Mar 9 10:00 UTC (Mar 9 19:00 JST)
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000c09', '2026-03-09T10:00:00Z', 'AUS', 'KOR', 'scheduled', 0, 0, NULL, 'pool', 'C');

-- C10: Mar 10 6am EDT = Mar 10 10:00 UTC (Mar 10 19:00 JST)
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000c10', '2026-03-10T10:00:00Z', 'JPN', 'CZE', 'scheduled', 0, 0, NULL, 'pool', 'C');


-- ============================================================
-- POOL A - Hiram Bithorn Stadium, San Juan, Puerto Rico
-- Teams: CAN, COL, CUB, PAN, PUR
-- ============================================================

-- A01: Mar 6 11am EST = Mar 6 16:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000a01', '2026-03-06T16:00:00Z', 'PAN', 'CUB', 'final', 1, 3, 'F', 'pool', 'A');

-- A02: Mar 6 6pm EST = Mar 6 23:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000a02', '2026-03-06T23:00:00Z', 'COL', 'PUR', 'scheduled', 0, 0, NULL, 'pool', 'A');

-- A03: Mar 7 11am EST = Mar 7 16:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000a03', '2026-03-07T16:00:00Z', 'CAN', 'COL', 'scheduled', 0, 0, NULL, 'pool', 'A');

-- A04: Mar 7 6pm EST = Mar 7 23:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000a04', '2026-03-07T23:00:00Z', 'PUR', 'PAN', 'scheduled', 0, 0, NULL, 'pool', 'A');

-- A05: Mar 8 12pm EDT = Mar 8 16:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000a05', '2026-03-08T16:00:00Z', 'CUB', 'COL', 'scheduled', 0, 0, NULL, 'pool', 'A');

-- A06: Mar 8 7pm EDT = Mar 8 23:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000a06', '2026-03-08T23:00:00Z', 'CAN', 'PAN', 'scheduled', 0, 0, NULL, 'pool', 'A');

-- A07: Mar 9 12pm EDT = Mar 9 16:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000a07', '2026-03-09T16:00:00Z', 'PAN', 'COL', 'scheduled', 0, 0, NULL, 'pool', 'A');

-- A08: Mar 9 7pm EDT = Mar 9 23:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000a08', '2026-03-09T23:00:00Z', 'PUR', 'CUB', 'scheduled', 0, 0, NULL, 'pool', 'A');

-- A09: Mar 10 7pm EDT = Mar 10 23:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000a09', '2026-03-10T23:00:00Z', 'PUR', 'CAN', 'scheduled', 0, 0, NULL, 'pool', 'A');

-- A10: Mar 11 3pm EDT = Mar 11 19:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000a10', '2026-03-11T19:00:00Z', 'CUB', 'CAN', 'scheduled', 0, 0, NULL, 'pool', 'A');


-- ============================================================
-- POOL B - Daikin Park, Houston, Texas
-- Teams: BRA, GBR, ITA, MEX, USA
-- ============================================================

-- B01: Mar 6 1pm EST = Mar 6 18:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000b01', '2026-03-06T18:00:00Z', 'GBR', 'MEX', 'final', 2, 8, 'F', 'pool', 'B');

-- B02: Mar 6 8pm EST = Mar 7 01:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000b02', '2026-03-07T01:00:00Z', 'BRA', 'USA', 'scheduled', 0, 0, NULL, 'pool', 'B');

-- B03: Mar 7 1pm EST = Mar 7 18:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000b03', '2026-03-07T18:00:00Z', 'ITA', 'BRA', 'scheduled', 0, 0, NULL, 'pool', 'B');

-- B04: Mar 7 8pm EST = Mar 8 01:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000b04', '2026-03-08T01:00:00Z', 'USA', 'GBR', 'scheduled', 0, 0, NULL, 'pool', 'B');

-- B05: Mar 8 1pm EDT = Mar 8 17:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000b05', '2026-03-08T17:00:00Z', 'ITA', 'GBR', 'scheduled', 0, 0, NULL, 'pool', 'B');

-- B06: Mar 8 8pm EDT = Mar 9 00:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000b06', '2026-03-09T00:00:00Z', 'MEX', 'BRA', 'scheduled', 0, 0, NULL, 'pool', 'B');

-- B07: Mar 9 1pm EDT = Mar 9 17:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000b07', '2026-03-09T17:00:00Z', 'GBR', 'BRA', 'scheduled', 0, 0, NULL, 'pool', 'B');

-- B08: Mar 9 8pm EDT = Mar 10 00:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000b08', '2026-03-10T00:00:00Z', 'USA', 'MEX', 'scheduled', 0, 0, NULL, 'pool', 'B');

-- B09: Mar 10 9pm EDT = Mar 11 01:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000b09', '2026-03-11T01:00:00Z', 'USA', 'ITA', 'scheduled', 0, 0, NULL, 'pool', 'B');

-- B10: Mar 11 7pm EDT = Mar 11 23:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000b10', '2026-03-11T23:00:00Z', 'MEX', 'ITA', 'scheduled', 0, 0, NULL, 'pool', 'B');


-- ============================================================
-- POOL D - loanDepot park, Miami, Florida
-- Teams: DOM, ISR, NED, NCA, VEN
-- ============================================================

-- D01: Mar 6 (earlier game) VEN vs NED
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000d01', '2026-03-06T00:00:00Z', 'NED', 'VEN', 'final', 2, 6, 'F', 'pool', 'D');

-- D02: Mar 6 7pm EST = Mar 7 00:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000d02', '2026-03-07T00:00:00Z', 'DOM', 'NCA', 'scheduled', 0, 0, NULL, 'pool', 'D');

-- D03: Mar 7 12pm EST = Mar 7 17:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000d03', '2026-03-07T17:00:00Z', 'NED', 'NCA', 'scheduled', 0, 0, NULL, 'pool', 'D');

-- D04: Mar 7 7pm EST = Mar 8 00:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000d04', '2026-03-08T00:00:00Z', 'VEN', 'ISR', 'scheduled', 0, 0, NULL, 'pool', 'D');

-- D05: Mar 8 12pm EDT = Mar 8 16:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000d05', '2026-03-08T16:00:00Z', 'DOM', 'NED', 'scheduled', 0, 0, NULL, 'pool', 'D');

-- D06: Mar 8 7pm EDT = Mar 8 23:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000d06', '2026-03-08T23:00:00Z', 'ISR', 'NCA', 'scheduled', 0, 0, NULL, 'pool', 'D');

-- D07: Mar 9 12pm EDT = Mar 9 16:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000d07', '2026-03-09T16:00:00Z', 'ISR', 'DOM', 'scheduled', 0, 0, NULL, 'pool', 'D');

-- D08: Mar 9 7pm EDT = Mar 9 23:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000d08', '2026-03-09T23:00:00Z', 'NCA', 'VEN', 'scheduled', 0, 0, NULL, 'pool', 'D');

-- D09: Mar 10 7pm EDT = Mar 10 23:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000d09', '2026-03-10T23:00:00Z', 'NED', 'ISR', 'scheduled', 0, 0, NULL, 'pool', 'D');

-- D10: Mar 11 8pm EDT = Mar 12 00:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-000000000d10', '2026-03-12T00:00:00Z', 'VEN', 'DOM', 'scheduled', 0, 0, NULL, 'pool', 'D');


-- ============================================================
-- QUARTERFINALS - loanDepot park, Miami
-- ============================================================

-- QF1: Mar 13 6:30pm EDT = Mar 13 22:30 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-0000000000q1', '2026-03-13T22:30:00Z', 'TBD', 'TBD', 'scheduled', 0, 0, NULL, 'quarter', NULL);

-- QF2: Mar 13 8pm EDT = Mar 14 00:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-0000000000q2', '2026-03-14T00:00:00Z', 'TBD', 'TBD', 'scheduled', 0, 0, NULL, 'quarter', NULL);

-- QF3: Mar 14 3pm EDT = Mar 14 19:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-0000000000q3', '2026-03-14T19:00:00Z', 'TBD', 'TBD', 'scheduled', 0, 0, NULL, 'quarter', NULL);

-- QF4: Mar 14 9pm EDT = Mar 15 01:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-0000000000q4', '2026-03-15T01:00:00Z', 'TBD', 'TBD', 'scheduled', 0, 0, NULL, 'quarter', NULL);


-- ============================================================
-- SEMIFINALS - loanDepot park, Miami
-- ============================================================

-- SF1: Mar 15 8pm EDT = Mar 16 00:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-0000000000s1', '2026-03-16T00:00:00Z', 'TBD', 'TBD', 'scheduled', 0, 0, NULL, 'semi', NULL);

-- SF2: Mar 16 8pm EDT = Mar 17 00:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-0000000000s2', '2026-03-17T00:00:00Z', 'TBD', 'TBD', 'scheduled', 0, 0, NULL, 'semi', NULL);


-- ============================================================
-- FINAL - loanDepot park, Miami
-- ============================================================

-- Final: Mar 17 8pm EDT = Mar 18 00:00 UTC
INSERT INTO games (id, starts_at, home_team, away_team, status, score_home, score_away, inning, round, pool)
VALUES ('10000000-0000-0000-0000-0000000000f1', '2026-03-18T00:00:00Z', 'TBD', 'TBD', 'scheduled', 0, 0, NULL, 'final', NULL);


-- ============================================================
-- EVENTS for completed games
-- ============================================================

-- Japan 13 - Chinese Taipei 0 events
INSERT INTO events (game_id, event_type, payload_json, created_at) VALUES
('10000000-0000-0000-0000-000000000c04', 'hr', '{"inning":"2回表","team":"JPN","player":"大谷翔平","runs":4,"score_home":0,"score_away":5,"description":"大谷翔平 満塁ホームラン！ 5-0"}', '2026-03-06T10:30:00Z'),
('10000000-0000-0000-0000-000000000c04', 'score', '{"inning":"2回表","team":"JPN","runs":2,"score_home":0,"score_away":7,"description":"大谷翔平 タイムリーヒット 7-0"}', '2026-03-06T10:35:00Z'),
('10000000-0000-0000-0000-000000000c04', 'score', '{"inning":"5回表","team":"JPN","runs":2,"score_home":0,"score_away":10,"description":"吉田正尚 2点タイムリー 10-0"}', '2026-03-06T11:15:00Z'),
('10000000-0000-0000-0000-000000000c04', 'score', '{"inning":"7回表","team":"JPN","runs":3,"score_home":0,"score_away":13,"description":"村上宗隆 3点タイムリー 13-0"}', '2026-03-06T11:50:00Z'),
('10000000-0000-0000-0000-000000000c04', 'final', '{"score_home":0,"score_away":13,"description":"試合終了 日本 13-0 チャイニーズタイペイ（7回コールド）"}', '2026-03-06T12:00:00Z');

-- Cuba 3 - Panama 1 events
INSERT INTO events (game_id, event_type, payload_json, created_at) VALUES
('10000000-0000-0000-0000-000000000a01', 'score', '{"inning":"3回表","team":"CUB","runs":1,"score_home":0,"score_away":1,"description":"キューバ 先制点"}', '2026-03-06T17:00:00Z'),
('10000000-0000-0000-0000-000000000a01', 'score', '{"inning":"5回裏","team":"PAN","runs":1,"score_home":1,"score_away":1,"description":"パナマ 同点に追いつく"}', '2026-03-06T18:00:00Z'),
('10000000-0000-0000-0000-000000000a01', 'score', '{"inning":"7回表","team":"CUB","runs":2,"score_home":1,"score_away":3,"description":"キューバ 2点追加で勝ち越し"}', '2026-03-06T18:45:00Z'),
('10000000-0000-0000-0000-000000000a01', 'final', '{"score_home":1,"score_away":3,"description":"試合終了 パナマ 1-3 キューバ"}', '2026-03-06T19:30:00Z');

-- Mexico 8 - Great Britain 2 events
INSERT INTO events (game_id, event_type, payload_json, created_at) VALUES
('10000000-0000-0000-0000-000000000b01', 'score', '{"inning":"1回表","team":"MEX","runs":2,"score_home":0,"score_away":2,"description":"メキシコ 2点先制"}', '2026-03-06T18:30:00Z'),
('10000000-0000-0000-0000-000000000b01', 'hr', '{"inning":"3回表","team":"MEX","runs":3,"score_home":0,"score_away":5,"description":"メキシコ 3ランホームラン！ 5-0"}', '2026-03-06T19:00:00Z'),
('10000000-0000-0000-0000-000000000b01', 'score', '{"inning":"5回裏","team":"GBR","runs":2,"score_home":2,"score_away":5,"description":"イギリス 2点返す"}', '2026-03-06T19:45:00Z'),
('10000000-0000-0000-0000-000000000b01', 'score', '{"inning":"7回表","team":"MEX","runs":3,"score_home":2,"score_away":8,"description":"メキシコ 3点追加 8-2"}', '2026-03-06T20:30:00Z'),
('10000000-0000-0000-0000-000000000b01', 'final', '{"score_home":2,"score_away":8,"description":"試合終了 イギリス 2-8 メキシコ"}', '2026-03-06T21:00:00Z');

-- Venezuela 6 - Netherlands 2 events
INSERT INTO events (game_id, event_type, payload_json, created_at) VALUES
('10000000-0000-0000-0000-000000000d01', 'score', '{"inning":"2回表","team":"VEN","runs":3,"score_home":0,"score_away":3,"description":"ベネズエラ 3点先制"}', '2026-03-06T00:40:00Z'),
('10000000-0000-0000-0000-000000000d01', 'score', '{"inning":"4回裏","team":"NED","runs":2,"score_home":2,"score_away":3,"description":"オランダ 2点返す"}', '2026-03-06T01:30:00Z'),
('10000000-0000-0000-0000-000000000d01', 'score', '{"inning":"6回表","team":"VEN","runs":3,"score_home":2,"score_away":6,"description":"ベネズエラ 3点追加 6-2"}', '2026-03-06T02:15:00Z'),
('10000000-0000-0000-0000-000000000d01', 'final', '{"score_home":2,"score_away":6,"description":"試合終了 オランダ 2-6 ベネズエラ"}', '2026-03-06T03:00:00Z');

-- Australia 3 - Chinese Taipei 0 events
INSERT INTO events (game_id, event_type, payload_json, created_at) VALUES
('10000000-0000-0000-0000-000000000c01', 'hr', '{"inning":"3回裏","team":"AUS","runs":1,"score_home":1,"score_away":0,"description":"バザーナ ソロホームラン！ 1-0"}', '2026-03-05T04:00:00Z'),
('10000000-0000-0000-0000-000000000c01', 'score', '{"inning":"6回裏","team":"AUS","runs":2,"score_home":3,"score_away":0,"description":"オーストラリア 2点追加 3-0"}', '2026-03-05T05:30:00Z'),
('10000000-0000-0000-0000-000000000c01', 'final', '{"score_home":3,"score_away":0,"description":"試合終了 オーストラリア 3-0 チャイニーズタイペイ"}', '2026-03-05T06:00:00Z');

-- Korea 11 - Czechia 4 events
INSERT INTO events (game_id, event_type, payload_json, created_at) VALUES
('10000000-0000-0000-0000-000000000c02', 'hr', '{"inning":"1回裏","team":"KOR","runs":3,"score_home":3,"score_away":0,"description":"韓国 3ランホームラン！ 3-0"}', '2026-03-05T10:30:00Z'),
('10000000-0000-0000-0000-000000000c02', 'score', '{"inning":"4回表","team":"CZE","runs":2,"score_home":3,"score_away":2,"description":"チェコ 2点返す"}', '2026-03-05T11:30:00Z'),
('10000000-0000-0000-0000-000000000c02', 'score', '{"inning":"5回裏","team":"KOR","runs":4,"score_home":7,"score_away":2,"description":"韓国 4点追加で突き放す 7-2"}', '2026-03-05T12:00:00Z'),
('10000000-0000-0000-0000-000000000c02', 'score', '{"inning":"7回裏","team":"KOR","runs":4,"score_home":11,"score_away":4,"description":"韓国 さらに4点 11-4"}', '2026-03-05T12:45:00Z'),
('10000000-0000-0000-0000-000000000c02', 'final', '{"score_home":11,"score_away":4,"description":"試合終了 韓国 11-4 チェコ"}', '2026-03-05T13:00:00Z');

-- Australia 5 - Czechia 1 events
INSERT INTO events (game_id, event_type, payload_json, created_at) VALUES
('10000000-0000-0000-0000-000000000c03', 'score', '{"inning":"2回裏","team":"AUS","runs":2,"score_home":2,"score_away":0,"description":"オーストラリア 2点先制"}', '2026-03-06T03:40:00Z'),
('10000000-0000-0000-0000-000000000c03', 'score', '{"inning":"5回表","team":"CZE","runs":1,"score_home":2,"score_away":1,"description":"チェコ 1点返す"}', '2026-03-06T04:45:00Z'),
('10000000-0000-0000-0000-000000000c03', 'score', '{"inning":"7回裏","team":"AUS","runs":3,"score_home":5,"score_away":1,"description":"オーストラリア 3点追加 5-1"}', '2026-03-06T05:30:00Z'),
('10000000-0000-0000-0000-000000000c03', 'final', '{"score_home":5,"score_away":1,"description":"試合終了 オーストラリア 5-1 チェコ"}', '2026-03-06T06:00:00Z');


-- ============================================================
-- THREADS for all games (実況スレッド)
-- ============================================================

INSERT INTO threads (id, game_id) VALUES
-- Pool C
('20000000-0000-0000-0000-000000000c01', '10000000-0000-0000-0000-000000000c01'),
('20000000-0000-0000-0000-000000000c02', '10000000-0000-0000-0000-000000000c02'),
('20000000-0000-0000-0000-000000000c03', '10000000-0000-0000-0000-000000000c03'),
('20000000-0000-0000-0000-000000000c04', '10000000-0000-0000-0000-000000000c04'),
('20000000-0000-0000-0000-000000000c05', '10000000-0000-0000-0000-000000000c05'),
('20000000-0000-0000-0000-000000000c06', '10000000-0000-0000-0000-000000000c06'),
('20000000-0000-0000-0000-000000000c07', '10000000-0000-0000-0000-000000000c07'),
('20000000-0000-0000-0000-000000000c08', '10000000-0000-0000-0000-000000000c08'),
('20000000-0000-0000-0000-000000000c09', '10000000-0000-0000-0000-000000000c09'),
('20000000-0000-0000-0000-000000000c10', '10000000-0000-0000-0000-000000000c10'),
-- Pool A
('20000000-0000-0000-0000-000000000a01', '10000000-0000-0000-0000-000000000a01'),
('20000000-0000-0000-0000-000000000a02', '10000000-0000-0000-0000-000000000a02'),
('20000000-0000-0000-0000-000000000a03', '10000000-0000-0000-0000-000000000a03'),
('20000000-0000-0000-0000-000000000a04', '10000000-0000-0000-0000-000000000a04'),
('20000000-0000-0000-0000-000000000a05', '10000000-0000-0000-0000-000000000a05'),
('20000000-0000-0000-0000-000000000a06', '10000000-0000-0000-0000-000000000a06'),
('20000000-0000-0000-0000-000000000a07', '10000000-0000-0000-0000-000000000a07'),
('20000000-0000-0000-0000-000000000a08', '10000000-0000-0000-0000-000000000a08'),
('20000000-0000-0000-0000-000000000a09', '10000000-0000-0000-0000-000000000a09'),
('20000000-0000-0000-0000-000000000a10', '10000000-0000-0000-0000-000000000a10'),
-- Pool B
('20000000-0000-0000-0000-000000000b01', '10000000-0000-0000-0000-000000000b01'),
('20000000-0000-0000-0000-000000000b02', '10000000-0000-0000-0000-000000000b02'),
('20000000-0000-0000-0000-000000000b03', '10000000-0000-0000-0000-000000000b03'),
('20000000-0000-0000-0000-000000000b04', '10000000-0000-0000-0000-000000000b04'),
('20000000-0000-0000-0000-000000000b05', '10000000-0000-0000-0000-000000000b05'),
('20000000-0000-0000-0000-000000000b06', '10000000-0000-0000-0000-000000000b06'),
('20000000-0000-0000-0000-000000000b07', '10000000-0000-0000-0000-000000000b07'),
('20000000-0000-0000-0000-000000000b08', '10000000-0000-0000-0000-000000000b08'),
('20000000-0000-0000-0000-000000000b09', '10000000-0000-0000-0000-000000000b09'),
('20000000-0000-0000-0000-000000000b10', '10000000-0000-0000-0000-000000000b10'),
-- Pool D
('20000000-0000-0000-0000-000000000d01', '10000000-0000-0000-0000-000000000d01'),
('20000000-0000-0000-0000-000000000d02', '10000000-0000-0000-0000-000000000d02'),
('20000000-0000-0000-0000-000000000d03', '10000000-0000-0000-0000-000000000d03'),
('20000000-0000-0000-0000-000000000d04', '10000000-0000-0000-0000-000000000d04'),
('20000000-0000-0000-0000-000000000d05', '10000000-0000-0000-0000-000000000d05'),
('20000000-0000-0000-0000-000000000d06', '10000000-0000-0000-0000-000000000d06'),
('20000000-0000-0000-0000-000000000d07', '10000000-0000-0000-0000-000000000d07'),
('20000000-0000-0000-0000-000000000d08', '10000000-0000-0000-0000-000000000d08'),
('20000000-0000-0000-0000-000000000d09', '10000000-0000-0000-0000-000000000d09'),
('20000000-0000-0000-0000-000000000d10', '10000000-0000-0000-0000-000000000d10'),
-- Knockouts
('20000000-0000-0000-0000-0000000000q1', '10000000-0000-0000-0000-0000000000q1'),
('20000000-0000-0000-0000-0000000000q2', '10000000-0000-0000-0000-0000000000q2'),
('20000000-0000-0000-0000-0000000000q3', '10000000-0000-0000-0000-0000000000q3'),
('20000000-0000-0000-0000-0000000000q4', '10000000-0000-0000-0000-0000000000q4'),
('20000000-0000-0000-0000-0000000000s1', '10000000-0000-0000-0000-0000000000s1'),
('20000000-0000-0000-0000-0000000000s2', '10000000-0000-0000-0000-0000000000s2'),
('20000000-0000-0000-0000-0000000000f1', '10000000-0000-0000-0000-0000000000f1');
