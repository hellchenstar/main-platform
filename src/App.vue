<template>
  <div class="app-shell">
    <header class="topbar">
      <RouterLink class="brand" to="/">
        <img class="brand-logo" src="/brand-logo.svg" alt="Signal Hub" />
        <span>
          <strong>Signal Hub</strong>
          <small>快讯、热榜与重点内容入口</small>
        </span>
      </RouterLink>
      <nav class="topnav">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/section/news">热门资讯</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
