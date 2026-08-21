/** Current desktop installer locations. Update this file when a new tag ships. */

export const INSTALLERS = {
  version: '0.1.0-rc.10',
  tag: 'desktop-v0.1.0-rc.10',
  release: 'https://github.com/zous168/deepseek-harness-client/releases/tag/desktop-v0.1.0-rc.10',
  windows:
    'https://github.com/zous168/deepseek-harness-client/releases/download/desktop-v0.1.0-rc.10/DeepSeek.Harness-0.1.0-rc.10-win-x64.exe',
  macos:
    'https://github.com/zous168/deepseek-harness-client/releases/download/desktop-v0.1.0-rc.10/DeepSeek.Harness-0.1.0-rc.10-mac-arm64.dmg',
  linux:
    'https://github.com/zous168/deepseek-harness-client/releases/download/desktop-v0.1.0-rc.10/DeepSeek.Harness-0.1.0-rc.10-linux-x86_64.AppImage',
} as const

export type InstallerPlatform = 'windows' | 'macos' | 'linux'
