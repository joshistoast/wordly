import { createRouter, createWebHistory } from 'vue-router'
import App from '@/views/App'
import Editor from '@/components/Editor'

const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
    children: [
      {
        path: '/chapter/:id',
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
