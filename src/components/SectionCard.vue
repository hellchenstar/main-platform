<template>
  <article class="section-card" :style="{ '--accent': section.accent }">
    <p class="eyebrow">{{ section.eyebrow }}</p>
    <h3>{{ section.name }}</h3>
    <p class="card-text">{{ section.description }}</p>
    <p class="card-tone">{{ section.tone }}</p>
    <ul class="chip-list">
      <li v-for="highlight in section.highlights" :key="highlight">{{ highlight }}</li>
    </ul>
    <RouterLink class="card-link" :to="`/section/${section.slug}`">进入模块</RouterLink>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  section: {
    type: Object,
    required: true
  }
})
</script>
