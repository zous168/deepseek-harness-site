# deepseek-harness-site

[deepseek-harness.net.cn](https://deepseek-harness.net.cn) 的静态官网：桌面下载优先，文档与资源社区后置。

产品源码在 [zous168/deepseek-harness-client](https://github.com/zous168/deepseek-harness-client)。本仓库不投影 `docs/`，也不改产品文档站。

GitHub Pages：<https://zous168.github.io/deepseek-harness-site/>

## 本地预览

```sh
npx --yes serve .
```

## 两层：Pages 与 Worker

| 放哪 | 做什么 |
|---|---|
| GitHub Pages（静态 HTML） | 首页、关于、文档分流、下载说明 |
| Cloudflare Worker | 安装包 302、`/api/installers`、以后的资源库检索与榜单 |

Worker 源码在 `worker/`。安装包地址只改 `worker/src/installers.ts`。静态页里的跳转是 Worker 未挂上时的后备。

域名进 Cloudflare 之后，把 `wrangler.toml` 里的 `routes` 打开：`/api/*` 和 `/download/{windows,macos,linux}` 走 Worker，其余仍是 Pages。账号、点赞、未审投稿先不要做。

```sh
pnpm install
pnpm run worker:dev
```

本机默认 <http://127.0.0.1:8787/api/health> 与 <http://127.0.0.1:8787/download/windows>。账号登录后 `pnpm run worker:deploy`。

## 发布

推 `main` 后由 `.github/workflows/pages.yml` 发布静态页。Worker 需另一次 `wrangler deploy`。

## 当前安装包

[desktop-v0.1.0-rc.10](https://github.com/zous168/deepseek-harness-client/releases/tag/desktop-v0.1.0-rc.10)
