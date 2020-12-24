import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Index.vue'
import Category from "../views/Category.vue"
import Shoping from "../views/Shopping.vue"
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Category',
    name: 'Category',
    component: Category
  },
  {
    path: '/Shoping',
    name: 'Shoping',
    component: Shoping
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
