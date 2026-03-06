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

  useEffect(() => {
    anonId.current = getAnonId();
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [posts]);

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
      <div className="flex gap-2 justify-center">
        {REACTIONS.map(r => (
          <button
            key={r.label}
            onClick={() => handleReaction(r.emoji, r.label)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-800 hover:bg-gray-700 text-sm transition active:scale-95"
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
          </h3>
        </div>

        <div
          ref={scrollRef}
          className="max-h-96 overflow-y-auto p-3 space-y-2"
        >
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 text-sm py-8">
              まだ書き込みがありません
            </p>
          ) : (
            posts.map(post => (
              <div key={post.id} className="group">
                <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-800/50 transition">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-mono text-blue-400">
                        ID:{post.anon_id.slice(0, 8)}
                      </span>
                      <span className="text-xs text-gray-600">
                        {relativeTime(post.created_at)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-200 whitespace-pre-wrap break-words">
                      {post.body}
                    </p>
                  </div>
                  <button
                    onClick={() => handleReply(post.id)}
                    className="text-xs text-gray-600 hover:text-gray-400 opacity-0 group-hover:opacity-100 transition"
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
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-500 transition active:scale-95"
          >
            {cooldown > 0 ? `${cooldown}s` : '送信'}
          </button>
        </form>
      </div>
    </div>
  );
}
