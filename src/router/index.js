import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Home from '@/page/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect:'/home',
      children:[
        {
          path:'/home',
          name:'home',
          meta:{
            title:'系统首页'
          },
          component:Home,
        },
      ]
    }
  ]
})
