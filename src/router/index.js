import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/condicionales',
    name: 'condicionales',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/bind',
    name: 'bind',
    component: () => import('../views/BindView.vue')
  },  
  {
    path: '/props',
    name: 'props',
    component: () => import('../views/PropsView.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import('../views/ComputedView.vue')
  },
  {
    path: '/forms',
    name: 'forms',
    component: () => import('../views/FormsView.vue')
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: () => import('../views/EventosView.vue')
  },
  {
    path: '/router',
    name: 'router',
    component: () => import('../views/RouterView.vue')
  },
  {
    path: '/router/:id',
    name: 'routerID',
    component: () => import('../views/RouterView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
