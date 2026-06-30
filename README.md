# Mineradio macOS

![Mineradio 暗场启动页](./docs/assets/readme/cinema-beat-smoke.png)

这是基于 [XxHuberrr/Mineradio](https://github.com/XxHuberrr/Mineradio) 源代码整理的 macOS 端版本。原项目是一款沉浸式桌面音乐播放器，包含天气电台、网易云音乐/QQ 音乐登录与搜索、歌词舞台、粒子视觉、桌面歌词和 3D 歌单架等体验。

本仓库的目标是让 Mineradio 可以在 macOS 上开发、运行和打包，同时尽量保留原 Windows 端体验。

## macOS 适配内容

- 增加 `build:mac` / `build:mac:dir` 打包命令，支持生成 `.dmg` 和 `.zip`
- 从现有 PNG 图标自动生成 macOS 所需的 `.icns`
- 主窗口在 macOS 使用系统原生红黄绿窗口按钮和应用菜单
- 保留无边框沉浸式播放器外观，隐藏 Windows 风格自绘窗口按钮
- 桌面歌词使用 macOS 全工作区浮动窗口
- 动态壁纸在 macOS 上降级为全工作区置底窗口
- GitHub 发布与更新配置指向 `yishuizhe/Mineradio-mac`

## 平台差异

Windows 版本可以把动态壁纸窗口挂到系统桌面 WorkerW 后面。macOS 没有公开的等价桌面嵌入接口，所以本版本采用无焦点、穿透点击、全工作区显示的置底窗口模拟动态壁纸。桌面歌词、登录、搜索、播放和视觉系统仍沿用原项目逻辑。

## 开发运行

```bash
npm install
npm start
```

## macOS 打包

```bash
npm run build:mac
```

打包产物会输出到 `dist/`。如果只想生成可直接运行的 `.app` 目录：

```bash
npm run build:mac:dir
```

未签名应用首次打开时，macOS 可能提示无法验证开发者。可以在 Finder 中右键应用并选择“打开”，或在“系统设置”里允许打开。

## Windows 打包

原 Windows 打包命令仍保留：

```bash
npm run build:win
```

## 第三方音乐平台说明

Mineradio 不是网易云音乐、QQ 音乐或腾讯音乐娱乐集团的官方客户端，也不隶属于任何音乐平台。项目中的第三方平台接入仅用于个人学习、本地客户端体验和用户自有账号的播放辅助。请遵守对应平台的用户协议、版权规则和会员权益规则。

## 来源与授权

原项目由 XxHuberrr 主要设计与打造。本仓库为 macOS 适配版本，保留原项目 GPL-3.0 授权。详见 [LICENSE](./LICENSE)。

MR Logo、Mineradio 名称、界面视觉设计与原创视觉表达归原作者所有；第三方依赖和第三方服务分别遵循其各自授权与服务条款。
