import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home'
import App from '@/views/App'
import Editor from '@/components/Editor'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/app',
    name: 'App',
    component: App,
    children: [
      {
        path: '/app/:id',
        name: 'Chapter',
        component: Editor
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
