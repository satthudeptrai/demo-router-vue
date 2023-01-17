import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/menu/Index.vue'),
    children: [
      {
        path: 'page1',
        name: 'page1',
        component: () => import('../views/menu/Page1View.vue')
      },
      {
        path: 'page2',
        name: 'page2',
        component: () => import('../views/menu/Page2View.vue')
      },
      {
        path: 'page3',
        name: 'page3',
        component: () => import('../views/menu/Page3View.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
