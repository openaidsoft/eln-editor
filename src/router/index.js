import { createRouter, createWebHistory } from 'vue-router'
import InitAppView from '@/views/init/App.vue'
import HomeView from '@/views/init/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/init',
      name: 'initApp',
      redirect: '/init/home',
      component: InitAppView,
      children: [
        {
          path: 'home',
          name: 'initHome',
          component: HomeView
        },
        {
          path: '/init/about',
          name: 'initAbout',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/init/AboutView.vue')
        }
      ]
    },
  ]
})

export default router
