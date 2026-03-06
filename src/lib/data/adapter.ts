import type { Game, GameEvent, Thread, Post, PlayerTracker, TournamentGame } from '@/types/game';

export interface DataSourceAdapter {
  getGames(date?: string): Promise<Game[]>;
  getGame(gameId: string): Promise<Game | null>;
  getEvents(gameId: string): Promise<GameEvent[]>;
  getThread(gameId: string): Promise<Thread | null>;
  getPosts(threadId: string): Promise<Post[]>;
  getTournament(): Promise<TournamentGame[]>;
  getPlayerTracker(gameId: string, playerName: string): Promise<PlayerTracker | null>;
}
