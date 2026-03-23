import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SectionView from '../views/SectionView.vue'
import AppContainerView from '../views/AppContainerView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/section/:slug',
    name: 'section',
    component: SectionView,
    props: true
  },
  {
    path: '/apps/:appKey',
    name: 'app-container',
    component: AppContainerView,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
