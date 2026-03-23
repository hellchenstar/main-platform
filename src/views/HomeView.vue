<template>
  <section class="hero hero-compact">
    <div>
      <p class="eyebrow">Micro App Portal</p>
      <h1>一个平台，收口四类内容，再把子应用一张张挂上来。</h1>
      <p class="hero-text">
        这里不再是模块入口墙，而是一个统一的内容工作台。上面用 Tab 切换模块，下面用 Card 列表展示每个模块下接入的子应用项目。
      </p>
    </div>
    <div class="hero-panel">
      <p>当前模块形态</p>
      <ul>
        <li>游戏：接入独立小游戏项目</li>
        <li>AI 视频：接案例站、作品库、导航页</li>
        <li>最新热点：接热榜看板和资讯子站</li>
        <li>小说：接书单页、阅读器、书架</li>
      </ul>
    </div>
  </section>

  <section class="tab-shell" :style="{ '--accent': activeSection.accent }">
    <div class="tab-header">
      <div>
        <p class="eyebrow">Module Tabs</p>
        <h2>{{ activeSection.name }}</h2>
        <p class="hero-text">{{ activeSection.description }}</p>
      </div>
      <div class="tab-pills">
        <button
          v-for="section in sections"
          :key="section.slug"
          class="tab-pill"
          :class="{ active: section.slug === activeSlug }"
          type="button"
          @click="setActiveSlug(section.slug)"
        >
          {{ section.name }}
        </button>
      </div>
    </div>

    <section class="info-panel">
      <h2>模块说明</h2>
      <p class="panel-tone">{{ activeSection.tone }}</p>
      <ul class="chip-list">
        <li v-for="highlight in activeSection.highlights" :key="highlight">{{ highlight }}</li>
      </ul>
    </section>

    <section class="content-grid">
      <ContentItem
        v-for="item in activeSection.items"
        :key="item.title"
        :item="item"
      />
    </section>
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ContentItem from '../components/ContentItem.vue'
import { sections } from '../data/platform'

const route = useRoute()
const router = useRouter()
const validSlugs = new Set(sections.map((section) => section.slug))

function normalizeSlug(value) {
  return validSlugs.has(value) ? value : sections[0].slug
}

const activeSlug = ref(normalizeSlug(route.query.tab))

function setActiveSlug(slug) {
  activeSlug.value = normalizeSlug(slug)
}

watch(
  () => route.query.tab,
  (tab) => {
    activeSlug.value = normalizeSlug(tab)
  },
  { immediate: true }
)

watch(activeSlug, (slug) => {
  const nextSlug = normalizeSlug(slug)
  if (route.query.tab === nextSlug) {
    return
  }

  router.replace({
    path: route.path,
    query: {
      ...route.query,
      tab: nextSlug
    }
  })
})

const activeSection = computed(
  () => sections.find((section) => section.slug === activeSlug.value) || sections[0]
)
</script>
