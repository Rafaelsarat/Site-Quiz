import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import cadastro from './views/cadastro.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/potato',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: cadastro
    },
  ]
})


