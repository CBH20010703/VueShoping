import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Category from "../views/Category.vue"
import Shoping from "../views/Shopping.vue"
import Logoin from "../views/Logoin.vue"
import Home from "../views/Home.vue"
import SetSite from "../views/SetSite.vue"
import EditSite from "../views/EditSite.vue"
import UserLottery from "../views/UserLottery.vue"
import Order from "../views/Order.vue"
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
  }, {
    path: "/SetSite",
    name: "SetSite",
    component: SetSite,
  }, {
    path: "/EditSite",
    name: "EditSite",
    component: EditSite
  },
  {
    path: "/UserLottery",
    name: "UserLottery",
    component: UserLottery,
  },
  {
    path: "/Order",
    name: "Order",
    component: Order,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
