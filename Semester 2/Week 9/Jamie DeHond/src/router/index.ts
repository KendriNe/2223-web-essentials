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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/MyAboutView',
      name: 'MyAboutView',
      component: () => import('../views/MyAboutView.vue')
    },
    {
      path: '/Hobbies',
      name: 'Hobbies',
      component: () => import('../views/Hobbies.vue')
    },
    {
      path: '/CustomEventView',
      name: 'Custom Event',
      component: () => import('../views/CustomEventView.vue')
    }
  ]
})

export default router