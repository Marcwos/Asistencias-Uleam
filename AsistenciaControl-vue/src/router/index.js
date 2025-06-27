import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MateriaView from '../views/MateriaView.vue'

const routes = [
  {
    path: '/', redirect: '/login'
  },
  {
    path: '/login', name: 'Login', component: LoginView
  },
  {
    path: '/materia', name: 'Materia', component: MateriaView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
