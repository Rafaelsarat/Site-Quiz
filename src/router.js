import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Cadastro from './views/cadastro.vue'
import Cliente from './views/Cliente.vue'
import Inicio from './views/inicio.vue'
import Lista from './views/Lista.vue'
import Rank from './views/Rank.vue'
import DemoVariaveis from './views/DemoVariaveis.vue'
import Produtos from './views/produtos.vue'
import Outros from './views/Outros.vue'
import Desempenho from './views/Desempenho.vue'

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
      path: '/Desempenho',
      name: 'desempenho',
      component: Desempenho
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
    {
      path: '/Lista',
      name: 'lista',
      component: Lista
    },
    {
      path: '/Rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/Variaveis',
      name: 'Variaveis',
      component: DemoVariaveis
    },
    {
      path: '/Produtos',
      name: 'Produtos',
      component: produtos
    },
    {
      path: '/Outros',
      name: 'outros',
      component: Outros
    },
  ]
})



