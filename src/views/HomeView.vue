<template>
  <section class="hero hero-home">
    <div>
      <p class="eyebrow">Main Platform</p>
      <h1>精选内容入口，统一进入各类子应用与专题页面。</h1>
      <p class="hero-text">
        覆盖游戏、AI 视频、热点资讯与阅读内容，按模块快速进入已上线内容和后续扩展入口。
      </p>
    </div>
  </section>

  <section class="section-grid">
    <SectionCard
      v-for="section in sections"
      :key="section.slug"
      :section="section"
    />
  </section>
</template>

<script setup>
import SectionCard from '../components/SectionCard.vue'
import { sections } from '../data/platform'
</script>
