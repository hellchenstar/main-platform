# 微应用平台架构方案

## 目标

将当前项目定位为一个主平台，负责统一入口、内容聚合、导航、账号能力预留和埋点能力。游戏、AI 视频、新闻热点、小说等内容模块可以继续在主平台内建设，也可以逐步拆成独立子应用。

这套方案的重点不是一上来就上重型微前端，而是先把部署结构、路由设计和扩展边界定清楚。

## 推荐架构

### 主平台职责

主平台负责：

- 首页与模块入口
- 统一导航和视觉壳层
- 搜索、推荐、收藏、历史记录等平台能力
- 用户体系预留
- 内容聚合和埋点统计
- 子应用接入配置

### 子应用职责

子应用负责：

- 独立业务页面
- 独立发布节奏
- 独立静态资源构建
- 独立内容逻辑和接口

比如：

- `games/sokoban` -> 推箱子小游戏
- `games/racing` -> 另一个小游戏
- `novel-reader` -> 独立阅读器
- `news-dashboard` -> 独立热点看板

## 第一阶段落地方式

第一阶段不建议直接引入复杂微前端框架，先采用：

- 主平台单独部署
- 子应用独立构建
- 优先使用同域名子路径接入

推荐路径示例：

- `/` -> 主平台
- `/games/sokoban/` -> 推箱子
- `/games/racing/` -> 其他小游戏
- `/news/dashboard/` -> 热点子应用
- `/novels/reader/` -> 阅读器子应用

这样做的好处：

- 一台服务器可承载多个项目
- 统一域名，登录态和埋点更好打通
- 后期要升级为微前端，也不需要大拆
- 老项目接入成本低

## 接入方式建议

### 方式 1：直接跳转子应用

主平台点击入口后，跳转到对应子路径。

适合：

- 已完成的独立项目
- 推箱子这类老项目
- 希望最快接入

优点：

- 简单
- 稳
- 不容易被样式和运行时互相污染

### 方式 2：iframe 容器接入

主平台提供统一容器页，内部使用 iframe 展示子应用。

适合：

- 需要保留主平台顶栏
- 子应用改造成本高
- 需要快速验证平台整合效果

注意：

- 全屏、路由、消息通信要额外处理
- SEO 不适合靠 iframe

### 方式 3：后期升级微前端

当项目数量变多、多人协作明显时，再考虑：

- `qiankun`
- `micro-app`
- `Module Federation`

建议顺序：

- 先做部署解耦
- 再做路由解耦
- 最后再决定是否要运行时微前端

不要一开始就给自己上工程税。

## 目录规划建议

主平台可按下面思路演进：

```text
content-playground/
  apps/
    portal/                 # 主平台
    game-sokoban/           # 推箱子子应用（后续可迁入或独立）
    news-dashboard/         # 热点子应用
  docs/
    architecture.md
    requirements.md
  deploy/
    nginx/
```

如果你不想做 monorepo，也可以保持：

- 主平台一个仓库
- 每个小游戏一个仓库
- 生产环境统一部署到同一台服务器的不同目录

## 路由和配置设计

主平台建议维护一份子应用配置表，例如：

```js
[
  {
    key: 'sokoban',
    name: '推箱子',
    type: 'game',
    accessMode: 'path',
    path: '/games/sokoban/',
    status: 'online'
  }
]
```

后面平台页面只认配置，不把每个项目写死在组件里。

## 通信建议

第一阶段：

- 仅做跳转和来源标记
- 通过 URL 参数传递来源页、活动标识、渠道标识

例如：

- `/games/sokoban/?from=portal&section=games`

第二阶段再做：

- `postMessage` 通信
- 用户登录态打通
- 收藏、最近玩过、进度同步

## 部署建议

一个服务器就够，典型方式：

- Nginx 托管多个静态目录
- 或 Nginx + 多个 Node 服务反向代理
- 或 Docker 拆多个容器，再挂统一网关

推荐最轻量方案：

- 主平台和小游戏都先打成静态资源
- Nginx 用子路径分发

## Nginx 示例

```nginx
server {
  listen 80;
  server_name your-domain.com;

  location / {
    root /var/www/portal;
    try_files $uri $uri/ /index.html;
  }

  location /games/sokoban/ {
    alias /var/www/sokoban/;
    try_files $uri $uri/ /games/sokoban/index.html;
  }

  location /news/dashboard/ {
    alias /var/www/news-dashboard/;
    try_files $uri $uri/ /news/dashboard/index.html;
  }
}
```

## 对你当前项目的具体建议

现在就按下面顺序推进：

1. 当前仓库继续作为主平台
2. 游戏模块增加子应用接入配置
3. 推箱子先作为独立小游戏接入，不重写
4. 主平台补一个游戏详情页或容器页
5. 后面再决定是否引入微前端框架

## 结论

当前最合适的路线是：

- 主平台 + 子路径接入多个独立项目
- 一台服务器部署多个项目
- 不依赖外链，不强制多服务器
- 老小游戏优先接入，后续逐步平台化

简单说，就是先把平台做成一个靠谱的总控台，再把你现有项目一个个挂上去。
