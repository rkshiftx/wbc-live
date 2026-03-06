'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { Post } from '@/types/game';
import { REACTIONS, POST_COOLDOWN_SEC, POST_MAX_LENGTH } from '@/lib/constants';
import { relativeTime } from '@/lib/utils';

interface Props {
  threadId: string;
  initialPosts: Post[];
  gameStatus: string;
}

interface NicoReaction {
  id: string;
  emoji: string;
  label: string;
  top: number;
}

// --- Bot system ---
const BOT_IDS = ['bb01a2c3', 'cc47d8e5', 'dd92f1a7', 'ee38b6c9', 'ff74d0e1', 'aa15c3b7', '1122aabb', '33dd44ee', '55ff6677', '8899aabb'];

const BOT_COMMENTS_LIVE = [
  'うおおおおお！！',
  'きたああああ',
  'すげえ',
  'ナイスプレー！',
  'うまい！',
  'エグい',
  'やばすぎ',
  '侍ジャパンがんばれ！',
  'いいぞいいぞ！',
  '今の打球やばかった',
  'ピッチャーいいね',
  '守備うめぇ',
  '盛り上がってきた！',
  '次の打者に期待',
  'テレビで見てるけどここも楽しいw',
  '解説より速いなここ',
  '実況板きたわ',
  'この回重要だぞ',
  '打線つながれ',
  '流れきてる',
  'もう1点ほしい',
  '追加点こい！',
  'ファインプレー！',
  'ピッチャー交代かな',
  'この打順強い',
  'さすが国際大会',
  '球速えぐい',
  '変化球キレてる',
  '次の回も頼む',
  'WBC最高すぎる',
  'みんなで応援しよう',
  'ナイスバッティング',
  '会場の雰囲気やべえ',
  '日本優勝いけるぞ',
  '今日の調子いいな',
  '気合入ってる！',
  '球場行きたかった…',
  '鳥肌立った',
  '仕事サボって見てるw',
  'この試合熱い',
];

const BOT_COMMENTS_HR = [
  'ホームラン！！！',
  'キタ━━━━(ﾟ∀ﾟ)━━━━!!',
  '入ったああああ！！',
  'でかい！！！',
  'すごすぎるwww',
  'まじかよ！！',
  '化け物すぎ',
  'スタンドインー！！',
  'うおおおおおおおおお',
  'やべえええ',
  '鳥肌！！',
  '完璧な当たり！！',
];

const BOT_COMMENTS_SCORE = [
  'よっしゃ！！',
  '追加点きた！',
  '1点入った！',
  'ナイスタイムリー！',
  'いけるぞ！',
  '点入ったー！',
  'リードだ！',
];

function getRandomBotId(): string {
  return BOT_IDS[Math.floor(Math.random() * BOT_IDS.length)];
}

function getRandomComment(pool: string[]): string {
  return pool[Math.floor(Math.random() * pool.length)];
}

function getAnonId(): string {
  if (typeof window === 'undefined') return '';
  let id = localStorage.getItem('wbc_anon_id');
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem('wbc_anon_id', id);
  }
  return id;
}

export default function LiveThread({ threadId, initialPosts, gameStatus }: Props) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [body, setBody] = useState('');
  const [cooldown, setCooldown] = useState(0);
  const [reactions, setReactions] = useState<NicoReaction[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const anonId = useRef('');
  const botTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    anonId.current = getAnonId();
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [posts]);

  // Bot - random comments during live games
  useEffect(() => {
    if (gameStatus !== 'live') return;

    const scheduleBot = () => {
      // Random interval: 3-12 seconds
      const delay = 3000 + Math.random() * 9000;
      botTimerRef.current = setTimeout(() => {
        const botPost: Post = {
          id: `bot-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          thread_id: threadId,
          anon_id: getRandomBotId(),
          body: getRandomComment(BOT_COMMENTS_LIVE),
          reply_to_post_id: null,
          created_at: new Date().toISOString(),
          deleted_at: null,
        };
        setPosts(prev => [...prev, botPost]);

        // Occasionally fire a reaction too (30% chance)
        if (Math.random() < 0.3) {
          const r = REACTIONS[Math.floor(Math.random() * REACTIONS.length)];
          fireReaction(r.emoji, r.label);
        }

        scheduleBot();
      }, delay);
    };

    // Initial burst: add 2-3 bot comments quickly
    const burstTimeout = setTimeout(() => {
      for (let i = 0; i < 2; i++) {
        setTimeout(() => {
          const botPost: Post = {
            id: `bot-burst-${Date.now()}-${i}`,
            thread_id: threadId,
            anon_id: getRandomBotId(),
            body: getRandomComment(BOT_COMMENTS_LIVE),
            reply_to_post_id: null,
            created_at: new Date().toISOString(),
            deleted_at: null,
          };
          setPosts(prev => [...prev, botPost]);
        }, i * 800);
      }
    }, 2000);

    scheduleBot();

    return () => {
      if (botTimerRef.current) clearTimeout(botTimerRef.current);
      clearTimeout(burstTimeout);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStatus, threadId]);

  // Periodic HR/score bot bursts (simulate exciting moments)
  useEffect(() => {
    if (gameStatus !== 'live') return;

    // Every 25-40 seconds, simulate an "exciting moment"
    const excitingMoment = setInterval(() => {
      if (Math.random() < 0.4) return; // 60% chance of exciting moment

      const isHR = Math.random() < 0.3;
      const commentPool = isHR ? BOT_COMMENTS_HR : BOT_COMMENTS_SCORE;
      const count = isHR ? 3 + Math.floor(Math.random() * 3) : 2;

      // Burst of comments
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          const botPost: Post = {
            id: `bot-event-${Date.now()}-${i}`,
            thread_id: threadId,
            anon_id: getRandomBotId(),
            body: getRandomComment(commentPool),
            reply_to_post_id: null,
            created_at: new Date().toISOString(),
            deleted_at: null,
          };
          setPosts(prev => [...prev, botPost]);
        }, i * (300 + Math.random() * 500));
      }

      // Fire multiple reactions for exciting moments
      if (isHR) {
        for (let i = 0; i < 4; i++) {
          setTimeout(() => {
            const r = REACTIONS[Math.floor(Math.random() * REACTIONS.length)];
            fireReaction(r.emoji, r.label);
          }, i * 400);
        }
      }
    }, 25000 + Math.random() * 15000);

    return () => clearInterval(excitingMoment);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStatus, threadId]);

  // Cooldown timer
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const fireReaction = useCallback((emoji: string, label: string) => {
    const reaction: NicoReaction = {
      id: `nico-${Date.now()}-${Math.random()}`,
      emoji,
      label,
      top: 10 + Math.random() * 60,
    };
    setReactions(prev => [...prev, reaction]);
    setTimeout(() => {
      setReactions(prev => prev.filter(r => r.id !== reaction.id));
    }, 4500);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim() || cooldown > 0) return;

    const newPost: Post = {
      id: `local-${Date.now()}`,
      thread_id: threadId,
      anon_id: anonId.current.slice(0, 8),
      body: body.trim(),
      reply_to_post_id: null,
      created_at: new Date().toISOString(),
      deleted_at: null,
    };

    setPosts(prev => [...prev, newPost]);
    setBody('');
    setCooldown(POST_COOLDOWN_SEC);
  }, [body, cooldown, threadId]);

  const handleReply = useCallback((postId: string) => {
    setBody(prev => `>>${postId.slice(0, 8)} ${prev}`);
  }, []);

  const handleReaction = useCallback((emoji: string, label: string) => {
    fireReaction(emoji, label);
  }, [fireReaction]);

  return (
    <div className="space-y-3">
      {/* ニコニコ風リアクション表示 */}
      {reactions.map(r => (
        <div
          key={r.id}
          className="nico-reaction"
          style={{ top: `${r.top}%` }}
        >
          {r.emoji} {r.label}
        </div>
      ))}

      {/* リアクションボタン */}
      <div className="flex gap-2 justify-center flex-wrap">
        {REACTIONS.map(r => (
          <button
            key={r.label}
            onClick={() => handleReaction(r.emoji, r.label)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-800 hover:bg-gray-700 text-sm transition active:scale-95 cursor-pointer"
          >
            <span>{r.emoji}</span>
            <span className="text-xs text-gray-300">{r.label}</span>
          </button>
        ))}
      </div>

      {/* スレッド */}
      <div className="bg-gray-900 rounded-xl border border-gray-800">
        <div className="px-4 py-3 border-b border-gray-800">
          <h3 className="text-sm font-medium text-white flex items-center gap-2">
            💬 実況スレ
            <span className="text-xs text-gray-500">{posts.length}件</span>
            {gameStatus === 'live' && (
              <span className="ml-auto flex items-center gap-1 text-[10px] text-green-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                </span>
                リアルタイム
              </span>
            )}
          </h3>
        </div>

        <div
          ref={scrollRef}
          className="max-h-96 overflow-y-auto p-3 space-y-1"
        >
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 text-sm py-8">
              まだ書き込みがありません
            </p>
          ) : (
            posts.map(post => (
              <div key={post.id} className="group">
                <div className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-gray-800/50 transition">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-mono text-blue-400">
                        {post.anon_id.slice(0, 8)}
                      </span>
                      <span className="text-[10px] text-gray-600">
                        {relativeTime(post.created_at)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-200 whitespace-pre-wrap break-words">
                      {post.body}
                    </p>
                  </div>
                  <button
                    onClick={() => handleReply(post.id)}
                    className="text-xs text-gray-600 hover:text-gray-400 opacity-0 group-hover:opacity-100 transition cursor-pointer"
                  >
                    返信
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 投稿フォーム */}
        <form
          onSubmit={handleSubmit}
          className="border-t border-gray-800 p-3 flex gap-2"
        >
          <input
            type="text"
            value={body}
            onChange={e => setBody(e.target.value)}
            maxLength={POST_MAX_LENGTH}
            placeholder={gameStatus === 'live' ? '実況しよう...' : 'コメントを書く...'}
            className="flex-1 bg-gray-800 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={!body.trim() || cooldown > 0}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-500 transition active:scale-95 cursor-pointer"
          >
            {cooldown > 0 ? `${cooldown}s` : '送信'}
          </button>
        </form>
      </div>
    </div>
  );
}
