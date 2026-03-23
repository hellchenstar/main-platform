# 本地联调说明

## 目标

让主应用 `main-platform` 和游戏子应用 `games/sokoban-web` 在本地开发时保持与生产环境一致的访问路径。

## 当前方案

- 主应用入口页：`http://localhost:5173`
- 推箱子容器页：`http://localhost:5173/apps/sokoban`
- 子应用实际访问路径：`http://localhost:5173/games/sokoban/`
- 推箱子独立开发服务：`http://127.0.0.1:4173/games/sokoban/`

其中：

- 主应用容器页在本地开发时优先直连推箱子 dev server
- 主应用仍保留 `/games/sokoban/` 代理，方便测试统一路径
- 生产环境继续按同域名 `/games/sokoban/` 发布
- 如果修改了 `main-platform` 的 `vite.config.js`，需要重启主应用开发服务

## 启动步骤

### 1. 启动推箱子子应用

```bash
cd E:\ai-claw-pro\games\sokoban-web
node .\dev-server.js
```

### 2. 启动主应用

```bash
cd E:\ai-claw-pro\main-platform
npm run dev
```

### 3. 访问页面

- 主应用首页：`http://localhost:5173`
- 推箱子容器页：`http://localhost:5173/apps/sokoban`
- 推箱子代理路径：`http://localhost:5173/games/sokoban/`

## 代码位置

- 子应用接入配置：`E:\ai-claw-pro\main-platform\src\data\platform.js`
- 子应用容器页：`E:\ai-claw-pro\main-platform\src\views\AppContainerView.vue`
- 开发代理配置：`E:\ai-claw-pro\main-platform\vite.config.js`

## 后续扩展建议

后面新增其他小游戏时，按同样模式处理：

1. 给每个小游戏一个独立开发服务
2. 在主应用中配置统一子路径
3. 在 Vite 中增加对应代理规则
4. 在生产环境把静态资源发布到同路径

这样平台会一直保持统一结构，不容易越做越乱。
