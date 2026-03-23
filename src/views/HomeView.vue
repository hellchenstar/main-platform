<template>
  <section class="hero hero-home">
    <div class="hero-copy">
      <p class="eyebrow">Signal Hub</p>
      <h1>把值得看的内容，压缩成两个真正可用的入口。</h1>
      <p class="hero-text">
        现在首页只保留正式发布方向：AI 行业快讯、实时热榜，以及一个可扩展的快捷入口位。
      </p>
      <div class="hero-actions">
        <RouterLink class="card-link" to="/section/news">进入热门资讯</RouterLink>
        <a class="card-link card-link-secondary" href="https://hellchenstar.github.io/ai-briefing-web/">打开 AI 快讯</a>
      </div>
    </div>
    <div class="hero-panel quick-panel">
      <p class="eyebrow">Quick Entry</p>
      <h2>Bananer 快捷入口</h2>
      <p class="panel-text">预留给常用外部站、内部看板或后续高频工具。现在先作为快捷入口位使用。</p>
      <a class="card-link" href="https://bananer.example.com">打开入口</a>
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
