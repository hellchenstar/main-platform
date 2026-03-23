<template>
  <div class="app-shell">
    <header class="topbar">
      <RouterLink class="brand" to="/">
        <span class="brand-mark">CP</span>
        <span>
          <strong>Content Playground</strong>
          <small>游戏 / AI 视频 / 最新热点 / 小说</small>
        </span>
      </RouterLink>
      <nav class="topnav">
        <RouterLink to="/">平台首页</RouterLink>
        <RouterLink
          v-for="section in sections"
          :key="section.slug"
          :to="`/section/${section.slug}`"
        >
          {{ section.name }}
        </RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { sections } from './data/platform'
</script>
