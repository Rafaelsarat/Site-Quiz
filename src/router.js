import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Cadastro from './views/Cadastro.vue'
import Cliente from './views/Cliente.vue'
import Inicio from './views/Inicio.vue'  

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
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/cliente',
      name: 'cliente',
      component: Cliente
    },
    {
      path: '/Inicio',
      name: 'inicio',
      component: Inicio
    },
  ]
})


