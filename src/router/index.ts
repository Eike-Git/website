import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import RentView from '@/views/RentView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true } // Protect this route
  },
  {
    // path: '/auth/local/register',
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    // path: '/auth/local',
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/rent',
    name: 'rent',
    component: RentView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = sessionStorage.getItem('jwtToken');
    if (!token) {
      next({ name: 'login' }); // Redirect to login page if not authenticated
    } else {
      next(); // Allow navigation if authenticated
    }
  } else {
    next(); // Allow navigation if no authentication is required
  }
});

export default router
