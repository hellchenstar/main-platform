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
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const isPublished = ref(props.item.status === '已接入')
const isDevHost = ['localhost', '127.0.0.1'].includes(window.location.hostname)
const publishedUrl = computed(() => {
  if (!props.item.childAppPath || !/^https?:\/\//.test(props.item.childAppPath)) {
    return ''
  }
  return props.item.childAppPath
})

const isLive = computed(() => {
  if (props.item.status === '已接入') {
    return true
  }
  if (isDevHost && props.item.childAppDevUrl) {
    return true
  }
  return isPublished.value
})

const statusText = computed(() => (isLive.value ? '已上线' : '即将上线'))

onMounted(async () => {
  if (isLive.value || !publishedUrl.value) {
    return
  }

  try {
    await fetch(publishedUrl.value, {
      method: 'GET',
      mode: 'no-cors',
      cache: 'no-store'
    })
    isPublished.value = true
  } catch {
    isPublished.value = false
  }
})
</script>
