# Content Playground

一个用于承载游戏、AI 视频、新闻热点、小说四大内容板块的网页平台原型。

## 技术栈

- Vue 3
- Vite
- Vue Router

## 已实现

- 首页平台总览
- 四大内容模块页面
- 通用卡片、分区头部与布局结构
- 模块化数据配置，后续可快速对接接口
- 基础需求文档

## Node 版本

当前项目按 `Node 24` 处理。

推荐使用：`Node 24.x`

如果你是单独给这个项目配环境，直接用 `Node 24 LTS` 风格管理就行，和老项目分开，不用互相迁就。

## 发布方式

当前项目已调整为使用 `GitHub Pages + GitHub Actions` 发布。

建议仓库名使用：`main-platform`

默认发布地址将是：`https://hellchenstar.github.io/main-platform/`

由于 GitHub Pages 不提供 SPA 路由回退，这里改为 `hash` 路由，线上地址会是类似：

- `https://hellchenstar.github.io/main-platform/#/`
- `https://hellchenstar.github.io/main-platform/#/section/games`
- `https://hellchenstar.github.io/main-platform/#/apps/sokoban`

## 本地启动

```bash
npm install
npm run dev
```

## 本地联调

当前主应用与推箱子子应用按统一路径联调：

- 主应用容器页：`/apps/sokoban`
- 子应用统一访问路径：`/games/sokoban/`

开发时需要同时启动两个项目：

```bash
# 终端 1
cd E:\ai-claw-pro\games\sokoban-web
npm install
npm run dev

# 终端 2
cd E:\ai-claw-pro\main-platform
npm run dev
```

然后访问：

- 主应用：`http://localhost:5173`
- 推箱子容器页：`http://localhost:5173/apps/sokoban`

说明：

- 开发环境下，容器页优先直连推箱子本地服务 `http://127.0.0.1:4173/games/sokoban/`
- 主应用里保留了 `/games/sokoban/` 代理配置，方便你单独测试统一路径
- 后续生产环境只需要把推箱子静态资源挂到同域名的 `/games/sokoban/` 即可
- 如果你刚改过 `vite.config.js`，记得重启 `main-platform` 的 dev server

## 目录结构

```text
content-playground/
  docs/
  src/
    components/
    data/
    views/
```

## 架构方向

当前项目按“主平台 + 可接入子应用”的思路演进。

- 主平台负责入口、聚合、导航和平台能力
- 小游戏等独立项目优先走同域名子路径接入
- 一台服务器可部署多个项目
- 后续再按需要升级为微前端

详细方案见：`E:\ai-claw-pro\main-platform\docs\architecture.md`

## 后续建议

1. 给游戏模块补子应用接入配置和详情页
2. 对接真实内容接口
3. 增加登录、收藏、历史记录
4. 给新闻和 AI 视频模块增加聚合抓取与后台配置能力
