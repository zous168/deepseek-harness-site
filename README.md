# deepseek-harness-site

[deepseek-harness.net.cn](https://deepseek-harness.net.cn) 的静态官网：桌面下载优先，文档与资源社区后置。

产品源码在 [zous168/deepseek-harness-client](https://github.com/zous168/deepseek-harness-client)。本仓库不投影 `docs/`，也不改产品文档站。

## 本地预览

任意静态服务器即可，例如：

```sh
npx --yes serve .
```

## 发布

接到 Cloudflare Pages：构建命令留空，输出目录为仓库根。域名绑 `deepseek-harness.net.cn`，`www` 做 301。

`/download/windows` 在 `_redirects` 里指向当前 Windows 安装包。发新版时只改这一行。

## 当前安装包

[desktop-v0.1.0-rc.10](https://github.com/zous168/deepseek-harness-client/releases/tag/desktop-v0.1.0-rc.10)
