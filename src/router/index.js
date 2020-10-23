import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from "./home-router"
console.log(homeRouter)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import("../components/page/home/home.vue"),
      children:[
        // {
        //   path:"/home/dashboard",
        //   name:"Dashboard",
        //   component:()=>import("../components/page/home/dashboard/index"),
        // },
        ...homeRouter
      ],
      
    },
    {
      path:"/login",
      name:"Login",
      component:()=>import("../components/page/login/login.vue")
    },
  ]
})
