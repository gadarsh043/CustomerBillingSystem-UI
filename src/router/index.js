import Vue from 'vue'
import VueRouter from 'vue-router'
import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/customer',
    name: 'loginCustomer',
    component: loginCustomer
  },
  {
    path: '/staff',
    name: 'loginStaff',
    component: loginStaff
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/custDetails',
    name: 'customerDetails',
    component: customerDetails
  },
  {
    path: '/products/:userid',
    name: 'products',
    component: products
  },
  {
    path: '/payment/:userid',
    name: 'payment',
    component: payment
  },
  {
    path: '/orderDetails/:userid',
    name: 'orderDetails',
    component: orderDetails
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
