import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Category from "../views/Category.vue"
import Shoping from "../views/Shopping.vue"
import Logoin from "../views/Logoin.vue"
import Home from "../views/Home.vue"
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
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
  }, {
    path: "/Logoin",
    name: "Logoin",
    component: Logoin,
  }, {
    path: "/Home",
    name: "Home",
    component: Home,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
