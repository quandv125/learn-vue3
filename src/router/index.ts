import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, LoginView } from '@/views'
import { useAuthStore } from '@/stores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: {
        requiresAuth: false,
        layout: 'AuthLayout',
      },
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('@/views/Auth/FormComponentSample.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/Auth/FormCompositionAPISample.vue'),
      meta: {
        requiresAuth: false,
      },
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore()

  if (to.name === 'Login' && auth.user) {
    const name = from.name || ''
    next({ name })
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.user) {
    next({ name: 'Login' })
  }

  next()
})

export default router
