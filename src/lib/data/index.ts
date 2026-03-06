import type { DataSourceAdapter } from './adapter';

let adapter: DataSourceAdapter | null = null;

export function getAdapter(): DataSourceAdapter {
  if (!adapter) {
    const source = process.env.DATA_SOURCE ?? 'mock';
    if (source === 'supabase') {
      const { SupabaseAdapter } = require('./supabase-adapter');
      adapter = new SupabaseAdapter();
    } else {
      const { MockAdapter } = require('./mock-adapter');
      adapter = new MockAdapter();
    }
  }
  return adapter!;
}
