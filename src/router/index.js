import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/cart/cart.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import("../views/category/category.vue")
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import("../views/profile/profile.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
