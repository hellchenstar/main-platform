<template>
  <section v-if="app" class="detail-wrap" :style="{ '--accent': app.accent }">
    <div class="detail-hero">
      <div>
        <p class="eyebrow">Child App</p>
        <h1>正在进入 {{ app.title }}</h1>
        <p class="hero-text">不再使用 iframe，改为同窗口进入子应用。这样本地开发和正式部署都更稳。</p>
      </div>
      <div class="detail-note">
        <strong>接入信息</strong>
        <p>{{ app.sectionName }} / {{ app.accessMode }} / {{ app.status }}</p>
      </div>
    </div>

    <section class="info-panel">
      <h2>跳转方式</h2>
      <p class="panel-tone">
        当前页面会自动跳转到子应用地址。如果浏览器拦住了跳转，点下面按钮手动进入。
      </p>
      <ul class="chip-list">
        <li>取消 iframe 嵌入</li>
        <li>同窗口进入子应用</li>
        <li>返回按钮由子应用负责</li>
      </ul>
      <a class="card-link" :href="resolvedUrl">立即进入</a>
    </section>
  </section>

  <section v-else class="empty-state">
    <h1>子应用不存在</h1>
    <RouterLink to="/">回首页</RouterLink>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getAppByKey } from '../data/platform'

const route = useRoute()
const app = computed(() => getAppByKey(route.params.appKey))
const isDevHost = ['localhost', '127.0.0.1'].includes(window.location.hostname)

const resolvedUrl = computed(() => {
  if (!app.value) {
    return '#'
  }

  const baseUrl = isDevHost && app.value.childAppDevUrl
    ? app.value.childAppDevUrl
    : (app.value.childAppPath || app.value.target)
  const url = new URL(baseUrl, window.location.origin)
  const backUrl = new URL(import.meta.env.BASE_URL, window.location.origin)
  backUrl.hash = `#/section/${app.value.sectionSlug}`

  url.searchParams.set('from', 'main-platform')
  url.searchParams.set('appKey', String(route.params.appKey || ''))
  url.searchParams.set('back', backUrl.toString())
  return url.toString()
})

onMounted(() => {
  if (!app.value) {
    return
  }
  window.location.replace(resolvedUrl.value)
})
</script>
