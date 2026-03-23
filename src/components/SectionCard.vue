<template>
  <article class="section-card" :style="{ '--accent': section.accent }">
    <p class="eyebrow">{{ section.eyebrow }}</p>
    <h2>{{ section.name }}</h2>
    <p class="card-text">{{ section.description }}</p>
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
