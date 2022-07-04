import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/folder',
      name: 'folder',
      // route level code-splitting
      // this generates a separate chunk (.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FolderView.vue')
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: () => import('../views/PokedexView.vue')
    }
  ]
})

export default router
