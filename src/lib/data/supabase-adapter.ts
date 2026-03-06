import { createClient } from '@supabase/supabase-js';
import type { DataSourceAdapter } from './adapter';
import type { Game, GameEvent, Thread, Post, PlayerTracker, TournamentGame, GameSituation } from '@/types/game';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export class SupabaseAdapter implements DataSourceAdapter {
  async getGames(): Promise<Game[]> {
    const { data, error } = await supabase
      .from('games')
      .select('*')
      .order('starts_at', { ascending: true });
    if (error) throw error;
    return data ?? [];
  }

  async getGame(gameId: string): Promise<Game | null> {
    const { data, error } = await supabase
      .from('games')
      .select('*')
      .eq('id', gameId)
      .single();
    if (error) return null;
    return data;
  }

  async getEvents(gameId: string): Promise<GameEvent[]> {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('game_id', gameId)
      .order('created_at', { ascending: true });
    if (error) throw error;
    return data ?? [];
  }

  async getThread(gameId: string): Promise<Thread | null> {
    const { data, error } = await supabase
      .from('threads')
      .select('*')
      .eq('game_id', gameId)
      .single();
    if (error) return null;
    return data;
  }

  async getPosts(threadId: string): Promise<Post[]> {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('thread_id', threadId)
      .is('deleted_at', null)
      .order('created_at', { ascending: true });
    if (error) throw error;
    return data ?? [];
  }

  async getTournament(): Promise<TournamentGame[]> {
    const { data, error } = await supabase
      .from('games')
      .select('*')
      .order('starts_at', { ascending: true });
    if (error) throw error;
    return (data ?? []).map(g => ({
      ...g,
      round: g.round ?? 'pool',
      pool: g.pool ?? null,
    }));
  }

  async getPlayerTracker(gameId: string, playerName: string): Promise<PlayerTracker | null> {
    const events = await this.getEvents(gameId);
    const playerEvents = events.filter(
      e => e.payload_json.player === playerName
    );
    if (playerEvents.length === 0) return null;

    const atBats = playerEvents.map(e => ({
      inning: (e.payload_json.inning as string) ?? '',
      result: e.event_type === 'hr' ? 'hr' as const : 'single' as const,
      description: (e.payload_json.description as string) ?? '',
      rbi: (e.payload_json.runs as number) ?? 0,
    }));

    const hits = atBats.filter(ab => ['single', 'double', 'triple', 'hr'].includes(ab.result)).length;
    const hrs = atBats.filter(ab => ab.result === 'hr').length;
    const rbi = atBats.reduce((sum, ab) => sum + ab.rbi, 0);
    const ab = atBats.length;

    return {
      player_name: playerName,
      team: 'JPN',
      game_id: gameId,
      at_bats: atBats,
      stats: {
        ab,
        hits,
        hr: hrs,
        rbi,
        avg: ab > 0 ? (hits / ab).toFixed(3) : '.000',
      },
    };
  }

  async getGameSituation(gameId: string): Promise<GameSituation | null> {
    const { data, error } = await supabase
      .from('game_situations')
      .select('*')
      .eq('game_id', gameId)
      .single();
    if (error) return null;
    return data;
  }
}
