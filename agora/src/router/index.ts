import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'


// Import page components
import Welcome from '@/pages/welcome.vue'
import DataEntry from '@/pages/DataEntry.vue'
import DataManagement from '@/pages/Data.vue'
import Statistics from '@/pages/statistics.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Welcome', component: Welcome },
  { path: '/data-entry', name: 'DataEntry', component: DataEntry },
  { path: '/data-management', name: 'DataManagement', component: DataManagement },
  { path: '/statistics', name: 'Statistics', component: Statistics },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
