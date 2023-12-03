import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayoutVue from '@/layouts/MainLayout.vue'


const routes = [
  {
    path: '/',
    component: MainLayoutVue,
    children: [
      {
        path: '/discover',
        name: 'discover',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Category" */ '../components/CategoryComponent.vue')
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
