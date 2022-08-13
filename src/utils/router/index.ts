import { createRouter, createWebHistory } from "vue-router";
import { HomeView, LoginView } from '@/views';
import { useAuthStore } from '@/utils/stores';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
   {
      path: "/login",
      name: "Login",
      component: LoginView,
      meta: {
        requiresAuth: false ,
        layout: 'AuthLayout'
      },
    },
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: {
        requiresAuth: true ,
      },
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/AboutView.vue"),
      meta: { 
        requiresAuth: false 
      },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
    const auth = useAuthStore();

    if (to.name === 'Login' && auth.user) {
      next({ name: from.name })
    }

    if(to.matched.some(record => record.meta.requiresAuth) && !auth.user) {
      next({ name: 'Login' })
    }

    next()

});

export default router;
