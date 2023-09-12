import { createRouter, createWebHistory } from 'vue-router'
import InitAppView from '@/views/init/App.vue'
import HomeView from '@/views/init/HomeView.vue'

/**
 * Description placeholder
 * @date 2023. 9. 5. - 오전 12:16:45
 *
 * @type {*}
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/weditor'
    },
    {
      path: '/editorjs',
      name: 'editorjs',
      component: () => import('@/views/Editorjs.vue')
    },
    {
      path: '/weditor',
      name: 'weditor',
      component: () => import('@/views/WEditor.vue')
    },
    {
      path: '/note/:id',
      name: 'Note',
      component: () => import('@/weditor/views/note/note.vue')
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
