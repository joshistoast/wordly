import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home'
import App from '@/views/App'
import Editor from '@/components/Editor'

import Error from '@/views/Error'

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
  },
  {
    path: '/:pathMatch(.*)*',
    component: Error,
    name: 'Error'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
