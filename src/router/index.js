import { createRouter, createWebHistory } from 'vue-router'
import CloudView from '../views/CloudView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cloud',
      component: CloudView
    }
  ]
})

export default router
