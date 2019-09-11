import Vue from 'vue'
import Router from 'vue-router'
import Add from './views/Add.vue'
import Info from './views/Info.vue'
import List from './views/List.vue'
import Login from './views/Login.vue'
import User from './views/User.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'list',      //这里由于是子路由，路径为相对路径
          name:'list',
          component:() => import(/* webpackChunkName: "list" */ './views/List.vue')        //这里使用懒加载的方式
        },
        {
          path:'user',
          name:'user',
          component:() => import(/* webpackChunkName: "user" */ './views/User.vue')
        }
      ]
    }
    // {
    //   path: '/list',
    //   name: 'list',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/List.vue')
    // }
  ]
})
