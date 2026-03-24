<template>
  <section class="hero hero-home hero-home-simple">
    <div class="hero-copy">
      <p class="eyebrow">Signal Hub</p>
      <h1>资讯入口</h1>
      <p class="hero-text">
        首页仅保留正式上线的信息入口，聚合 AI 行业快讯与后续热点看板能力。
      </p>
      <div class="hero-actions">
        <RouterLink class="card-link" to="/section/news">进入资讯页</RouterLink>
        <a class="card-link card-link-secondary" href="https://hellchenstar.github.io/ai-briefing-web/">打开 AI 快讯</a>
      </div>
    </div>
  </section>

  <section class="section-grid compact-grid">
    <SectionCard
      v-for="section in homepageSections"
      :key="section.slug"
      :section="section"
    />
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import SectionCard from '../components/SectionCard.vue'
import { sections } from '../data/platform'

const homepageSections = computed(() => sections.filter((section) => section.slug === 'news'))
</script>
