# ALPHA_POLARIS

ALPHA_POLARISの紹介サイト。Astroで静的ページを生成します。

## ページ

- `/` — 団体紹介、ぬる（WIP）・APL_SV・けもみみぐるいの紹介
- `/terms/` — 利用規約（確認用ドラフト）
- `/privacy/` — プライバシーポリシー（確認用ドラフト）
- `/contact/` — 主宰のサイト、GitHub Issuesへの連絡導線

紹介内容の参照元: https://github.com/alpha-polaris/.github/blob/main/profile/README.md

## 開発

Node.js 22.22.0以上を使用します。

```sh
npm install
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
npm run build
```

生成先は `dist/` です。サイトへの公開・デプロイは別途行ってください。

## 規約類の正式公開前

規約類は公開プロフィールをもとに作成した草案です。実際の運用に合わせて以下を確認・反映してください。

- サービスごとの規約適用範囲と既存ルールとの関係
- APL_SVの利用条件、料金、リソース、停止・終了時の扱い
- 取得情報、配信基盤・委託先、ログ保存期間、削除手順
- 問い合わせ先と情報開示等の受付方法
- 適用開始日と変更通知方法

確認後、`src/pages/terms.md` と `src/pages/privacy.md` のfrontmatterを `draft: false` に変更し、適用開始日を明記してください。

## デザイン

Material 3の色役割をCSS変数で共有し、OSのダークモードに追従します。サービスアイコンはGoogle Material Symbols Roundedをローカル配信します（`public/icons/LICENSE`）。ぬるの紹介は運営者から提供されたプロジェクト説明に基づきます。

## 文書の編集

利用規約・プライバシーポリシー・お問い合わせは、`src/pages/terms.md`、`src/pages/privacy.md`、`src/pages/contact.md` で管理します。本文は通常のMarkdownで、見出しは `##`、リストは `-`、リンクは `[表示名](URL)` を使用してください。タイトル・概要・ドラフト表示は各ファイル冒頭のfrontmatterで編集できます。共通の見た目は `src/layouts/Document.astro` が担当します。URLは従来どおりです。
