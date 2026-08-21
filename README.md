# deepseek-harness-site

[deepseek-harness.net.cn](https://deepseek-harness.net.cn) 的静态官网：桌面下载优先，文档与资源社区后置。

产品源码在 [zous168/deepseek-harness-client](https://github.com/zous168/deepseek-harness-client)。本仓库不投影 `docs/`，也不改产品文档站。

GitHub Pages：<https://zous168.github.io/deepseek-harness-site/>

## 本地预览

```sh
npx --yes serve .
```

## 发布

推 `main` 后由 `.github/workflows/pages.yml` 发布。链接用相对路径，项目页和自定义域名都能打开。

发新桌面包时，改 `download/windows/index.html`、`download/macos/index.html`、`download/linux/index.html` 里的跳转地址。

## 当前安装包

[desktop-v0.1.0-rc.10](https://github.com/zous168/deepseek-harness-client/releases/tag/desktop-v0.1.0-rc.10)
