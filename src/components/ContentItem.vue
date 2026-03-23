<template>
  <article class="content-item">
    <div class="item-topline">
      <p class="item-meta">{{ item.meta }}</p>
      <span class="status-badge">{{ item.status }}</span>
    </div>
    <h3>{{ item.title }}</h3>
    <p>{{ item.blurb }}</p>
    <div class="item-footer">
      <RouterLink class="card-link" :to="item.target">{{ item.cta }}</RouterLink>
    </div>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
