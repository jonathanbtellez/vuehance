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
        component: () => import(/* webpackChunkName: "Category" */ '../views/DiscoverPage.vue')
      },
      {
        path: '/foryou',
        name: 'foryou',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ForYouPage')
      },
      {
        path: '/flexGrid',
        name: 'flexGrid',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "flex grid" */ '../views/FlexGrid'),
        children: [
          {
            path: '',
            name: 'flex',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "flex" */ '@/components/FlexComponent')
          },
          {
            path: 'grid',
            name: 'grid',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "flex" */ '@/components/GridComponent')
          }
        ]
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
