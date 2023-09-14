import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/pages/index.vue'
import {UserLogin, UserRegister} from '@/views/auth'

const routes = [
    { path: '/', name: 'index.page', component: Index },
    { path: '/auth/login', name: 'user.login',  component: UserLogin },
    { path: '/auth/register', name: 'user.register',  component: UserRegister },
  ]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;