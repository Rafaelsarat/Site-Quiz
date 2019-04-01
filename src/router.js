import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import incio from './views/inicio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: inicio
    },
  ]
})
