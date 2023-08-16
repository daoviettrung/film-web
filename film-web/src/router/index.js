import { createRouter, createWebHistory } from 'vue-router'
import DetailFilm from '../components/DetailFilm.vue'
import Home from '../components/ContentHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      component: DetailFilm, // Thay thế bằng tên component của trang chi tiết
      props: true,
    }
  ]
})

export default router
