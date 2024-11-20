import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/template',
  name: 'template',
  component: () => import('@/views/template/index.vue'),
},{
  path: '/',
  name: 'index',
  component: () => import('@/views/tianjing/index.vue')
}]
const router = new VueRouter({
  routes
})

export default router