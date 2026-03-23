<template>
  <div class="app-shell">
    <header class="topbar">
      <RouterLink class="brand" to="/">
        <span class="brand-mark">MP</span>
        <span>
          <strong>Main Platform</strong>
          <small>内容入口平台</small>
        </span>
      </RouterLink>
      <nav class="topnav">
        <RouterLink to="/">首页</RouterLink>
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
