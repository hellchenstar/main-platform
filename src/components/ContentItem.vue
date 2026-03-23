<template>
  <article class="content-item" :class="{ 'is-soon': !isLive }">
    <div class="item-topline">
      <p class="item-meta">{{ item.meta }}</p>
      <span class="status-badge" :class="{ 'status-soon': !isLive }">{{ statusText }}</span>
    </div>
    <h3>{{ item.title }}</h3>
    <p>{{ item.blurb }}</p>
    <div class="item-footer">
      <RouterLink v-if="isLive" class="card-link" :to="item.target">{{ item.cta }}</RouterLink>
      <span v-else class="card-link card-link-muted">即将上线</span>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const isLive = computed(() => props.item.status === '已接入')
const statusText = computed(() => (isLive.value ? props.item.status : '即将上线'))
</script>
