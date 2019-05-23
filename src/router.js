import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('./views/Recommend.vue'),
      // children: () => import('./components/ListBlock.vue'),
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import('./views/Rank.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    },
    // {
    //   path: '/user',
    //   name: 'user',
    //   component: User,
    //   beforeEnter: (to, from, next) => {
    //     if (!store.state.user) {
    //       next('/login')
    //       return
    //     }
    //     next()
    //   }
    // },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('./views/Movie.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/list/:type',
      name: 'list',
      component: () => import('./views/List.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('./views/Error.vue')
    }
  ]
})