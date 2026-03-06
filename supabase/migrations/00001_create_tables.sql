-- Games table
CREATE TABLE IF NOT EXISTS games (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  starts_at TIMESTAMPTZ NOT NULL,
  home_team TEXT NOT NULL,
  away_team TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'scheduled'
    CHECK (status IN ('scheduled', 'live', 'final', 'postponed')),
  score_home INTEGER NOT NULL DEFAULT 0,
  score_away INTEGER NOT NULL DEFAULT 0,
  inning TEXT,
  inning_scores JSONB DEFAULT '[]',
  round TEXT DEFAULT 'pool',
  pool TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id UUID NOT NULL REFERENCES games(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL CHECK (event_type IN ('score', 'hr', 'final', 'info')),
  payload_json JSONB NOT NULL DEFAULT '{}',
  source_ts TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  unique_key TEXT UNIQUE
);
CREATE INDEX IF NOT EXISTS idx_events_game_id ON events(game_id);

-- Threads table (one per game)
CREATE TABLE IF NOT EXISTS threads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id UUID NOT NULL REFERENCES games(id) ON DELETE CASCADE UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Posts table (実況)
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id UUID NOT NULL REFERENCES threads(id) ON DELETE CASCADE,
  anon_id TEXT NOT NULL,
  body TEXT NOT NULL CHECK (char_length(body) BETWEEN 1 AND 500),
  reply_to_post_id UUID REFERENCES posts(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  deleted_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_posts_thread_id ON posts(thread_id);

-- Reports table
CREATE TABLE IF NOT EXISTS reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  reason TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'pending'
);

-- Push subscriptions (Phase 3)
CREATE TABLE IF NOT EXISTS push_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_or_device_id TEXT NOT NULL,
  endpoint TEXT NOT NULL UNIQUE,
  p256dh TEXT NOT NULL,
  auth TEXT NOT NULL,
  filters_json JSONB NOT NULL DEFAULT '{"score": true, "hr": true, "final": true}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Notification logs (Phase 3)
CREATE TABLE IF NOT EXISTS notification_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id),
  subscription_id UUID NOT NULL REFERENCES push_subscriptions(id),
  status TEXT NOT NULL DEFAULT 'pending',
  sent_at TIMESTAMPTZ,
  received_at TIMESTAMPTZ,
  UNIQUE(event_id, subscription_id)
);

-- Game situations (live state)
CREATE TABLE IF NOT EXISTS game_situations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id UUID NOT NULL REFERENCES games(id) ON DELETE CASCADE UNIQUE,
  batter JSONB,
  next_batter JSONB,
  pitcher JSONB,
  count JSONB NOT NULL DEFAULT '{"balls":0,"strikes":0,"outs":0}',
  runners JSONB NOT NULL DEFAULT '{"first":null,"second":null,"third":null}',
  defense JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- RLS policies
ALTER TABLE games ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON games FOR SELECT USING (true);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON events FOR SELECT USING (true);

ALTER TABLE threads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON threads FOR SELECT USING (true);

ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON posts FOR SELECT USING (true);
CREATE POLICY "Anyone can post" ON posts FOR INSERT WITH CHECK (true);

ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can report" ON reports FOR INSERT WITH CHECK (true);

ALTER TABLE game_situations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON game_situations FOR SELECT USING (true);

-- Realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE games, events, posts, game_situations;
