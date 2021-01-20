import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../views/home/home')
const category = () => import('../views/category/category')
const shopcart = () => import('../views/cartshop/shopcart')
const profile = () => import('../views/profile/profile')
const detail = () => import('../views/detail/detail')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  { path: '', redirect: '/home' },
  { path: '/home', component: home },
  { path: '/category', component: category },
  { path: '/shopcart', component: shopcart },
  { path: '/profile', component: profile },
  { path: '/detail/:iid', component: detail }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
