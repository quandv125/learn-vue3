import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores'
import {
  HomeView,
  LoginView,
  AboutView,
  ContactView,
  ServiceView,
  FormComponentSample,
  FormCompositionAPISample,
  NotFound,
  Forbidden,
} from '@/views'

export const routersList = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'homePage',
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/about',
    name: 'aboutPage',
    component: AboutView,
  },
  {
    path: '/contact',
    name: 'contactPage',
    component: ContactView,
  },
  {
    path: '/service',
    name: 'servicePage',
    component: ServiceView,
  },
  {
    path: '/form',
    name: 'formPage',
    component: FormComponentSample,
    meta: {
      layout: 'BlankLayout',
    },
  },
  {
    path: '/login',
    name: 'loginPage',
    component: LoginView,
    meta: {
      layout: 'BlankLayout',
    },
  },
  {
    path: '/register',
    name: 'register',
    component: FormCompositionAPISample,
    meta: {
      layout: 'BlankLayout',
    },
  },
  {
    path: '/403',
    name: 'forbidden',
    component: Forbidden,
    meta: {
      layout: 'BlankLayout',
    },
  },
  {
    path: '/:catchAll(.*)*',
    name: 'notFound',
    component: NotFound,
    meta: {
      layout: 'BlankLayout',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: routersList,
})

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore()
  if (to.name === 'loginPage' && auth.user) {
    const name = from.name || ''
    next({ name })
  }
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.user) {
    next({ name: 'loginPage' })
  }
  next()
})

export default router
