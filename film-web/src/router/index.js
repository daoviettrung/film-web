import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailFilm from '../components/DetailFilm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      component: DetailFilm, // Thay thế bằng tên component của trang chi tiết
      props: true,
    }
  ]
})

export default router
