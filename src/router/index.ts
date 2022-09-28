import { createRouter, createWebHistory } from 'vue-router'
import {
  HomeView,
  LoginView,
  AboutView,
  FormComponentSample,
  FormCompositionAPISample,
  NotFound,
  Forbidden,
} from '@/views'
import { useAuthStore } from '@/stores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/form',
      name: 'Form',
      component: FormComponentSample,
      meta: {
        requiresAuth: false,
        layout: 'BlankLayout',
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: {
        requiresAuth: false,
        layout: 'BlankLayout',
      },
    },
    {
      path: '/register',
      name: 'Register',
      component: FormCompositionAPISample,
      meta: {
        requiresAuth: false,
        layout: 'BlankLayout',
      },
    },
    {
      path: '/403',
      name: 'Forbidden',
      component: Forbidden,
      meta: {
        requiresAuth: false,
        layout: 'BlankLayout',
      },
    },
    {
      path: '/:catchAll(.*)*',
      name: 'NotFound',
      component: NotFound,
      meta: {
        requiresAuth: false,
        layout: 'BlankLayout',
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
