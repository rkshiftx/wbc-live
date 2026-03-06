# WBC 超速報

WBC 2026 リアルタイムスコア・実況・共有 PWA

## 機能

- **リアルタイムスコア**: イニング別スコアボード付き
- **共有カード**: OGP画像自動生成、X/LINEワンタップ共有
- **匿名実況スレ**: リアルタイム書き込み + ニコニコ風リアクション
- **大谷トラッカー**: 打席結果を専用表示
- **トーナメント表**: プール〜決勝まで一覧

## ローカル起動

```bash
npm install
cp .env.example .env.local
npm run dev
```

http://localhost:3000 でアクセス

## 環境変数

| 変数 | 説明 | デフォルト |
|------|------|-----------|
| `DATA_SOURCE` | `mock` or `supabase` | `mock` |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase URL | - |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key | - |
| `NEXT_PUBLIC_APP_URL` | アプリURL | `http://localhost:3000` |

## Supabase セットアップ

1. Supabase プロジェクト作成
2. `supabase/migrations/00001_create_tables.sql` をSQL Editorで実行
3. `.env.local` にURL/Keyを設定
4. `DATA_SOURCE=supabase` に変更

## デプロイ

Vercelに接続してpushするだけ。環境変数はVercel Dashboardで設定。

## 技術スタック

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Supabase (DB + Realtime)
- `next/og` (Satori) でOGP画像生成
