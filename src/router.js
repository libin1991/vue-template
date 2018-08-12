import Vue from 'vue'
import Router from 'vue-router'//路由step3/6
import Home from './views/Home.vue'//路由step5/6

Vue.use(Router)//路由step4/6

//路由step6/6
export default new Router({
  routes: [
    {
      path: '/',
          // 用path的时候:<router-link to="/user/xiaoming">User</router-link>
      name: 'home',//name的作用:匿名路由,方便声明式导航
          // 用name的时候:<router-link :to="{ name: 'myxiao'}">User</router-link>
                //修改path时,不用去修改导航的to地址
      component: Home//路由指定方式1
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')//路由指定方式2
    },
    {
      path: '/base:xxx=aaa',
        //this.$route.params;这个对象包含了xxx的对象{xxx:'aaa'}
      name: 'base',
      component: () => import('./views/Base.vue')
    }
  ]
})
