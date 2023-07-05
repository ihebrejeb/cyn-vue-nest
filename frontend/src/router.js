import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Project from './views/Project.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/project/:id', component: Project },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router