'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  intervalMs?: number;
  enabled?: boolean;
}

export default function AutoRefresh({ intervalMs = 15000, enabled = true }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (!enabled) return;
    const id = setInterval(() => {
      router.refresh();
    }, intervalMs);
    return () => clearInterval(id);
  }, [router, intervalMs, enabled]);

  return null;
}
