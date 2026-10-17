# ALPHA_POLARIS

ALPHA_POLARISの紹介サイト。Astroで静的ページを生成します。

## ページ

- `/` — 団体紹介、APL_SV・けもみみぐるいの紹介
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

確認後、`terms.astro` と `privacy.astro` の `Document` にある `draft` 属性を外し、適用開始日を明記してください。
