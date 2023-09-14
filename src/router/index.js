import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/pages/index.vue'
import {UserLogin, UserRegister} from '@/views/auth'

const routes = [
    { path: '/', name: 'index.page', component: Index, meta: {title: 'Home'}, },
    { path: '/auth/login', name: 'user.login',  component: UserLogin , meta: {title: 'Login'},},
    { path: '/auth/register', name: 'user.register',  component: UserRegister, meta: {title: 'Register'}, },
  ]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});



router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

export default router;