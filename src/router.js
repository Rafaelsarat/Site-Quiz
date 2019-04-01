import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
<<<<<<< HEAD
import Cliente from './views/Cliente.vue'
import Inicio from './views/Inicio.vue'  
=======
import incio from './views/inicio.vue'
>>>>>>> 688413617dfd5286c4264033f7258032573a1fc8

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
<<<<<<< HEAD
      path: '/Cliente',
      name: 'cliente',
      component: Cliente
    },
    {
      path: '/Inicio',
      name: 'inicio',
      component: Inicio
=======
      path: '/inicio',
      name: 'inicio',
      component: inicio
>>>>>>> 688413617dfd5286c4264033f7258032573a1fc8
    },
  ]
})
