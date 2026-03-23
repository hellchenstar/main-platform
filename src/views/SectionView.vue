<template>
  <section v-if="section" class="detail-wrap" :style="{ '--accent': section.accent }">
    <div class="detail-hero compact-detail">
      <div>
        <p class="eyebrow">{{ section.eyebrow }}</p>
        <h1>{{ section.name }}</h1>
        <p class="hero-text">{{ section.description }}</p>
      </div>
      <RouterLink class="card-link" to="/">返回首页</RouterLink>
    </div>

    <section class="content-grid">
      <ContentItem v-for="item in section.items" :key="item.title" :item="item" />
    </section>
  </section>

  <section v-else class="empty-state">
    <h1>模块不存在</h1>
    <RouterLink to="/">回首页</RouterLink>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ContentItem from '../components/ContentItem.vue'
import { getSectionBySlug } from '../data/platform'

const route = useRoute()
const section = computed(() => getSectionBySlug(route.params.slug))
</script>
