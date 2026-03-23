<template>
  <section class="hero hero-home">
    <div>
      <p class="eyebrow">Main Platform</p>
      <h1>统一入口，按模块进入内容与子应用。</h1>
      <p class="hero-text">
        这里只保留清晰的模块入口。点进模块，再进入对应内容页或子应用。
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
