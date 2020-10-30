// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);


// 按需引入elementUI组件的抽离
import Ele from "./components/common/Ele/index"
Vue.use(Ele)

// 处理ie兼容问题
import "babel-polyfill"

Vue.config.productionTip = false

// 全局的css
import "./assets/css/common.css"

// 全局的js
import common from "./assets/js/common"
Vue.use(common)

// 引入 vuex
import store from "./vuex/store"


// 刷新后缓存token
if (sessionStorage.getItem('token')) {
  store.commit('SET_TOKEN', sessionStorage.getItem('token'))
}



// 刷新后缓存UserInfo
if(sessionStorage.getItem("userInfo")){
  store.commit("SET_USERINFO",JSON.parse(sessionStorage.getItem("userInfo")))
}


if(store.state.player){
  // 监听音频播放器播放结束
  store.state.player.addEventListener('ended',()=>{
    store.commit('SET_PLAYER_STATUS',false)
  })
  // 监听播放器播放异常
  store.state.player.addEventListener('error',()=>{
    Vue.prototype.$message.error("音乐播放异常!")
  })
}

// 全局的导航守卫
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('token');
  }
  let token = sessionStorage.getItem('token');
  if (!token && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

// 请求拦截器
axios.interceptors.request.use(
  config => {
    let token=store.state.token
    if (token) {
      config.headers.common["Authorization"] = "Bearer "+token;
    }else{
      config.headers.common["Authorization"] ="";
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(res=>{
  return res
},error=>{
  let code = error.response.data.code
  let msg = error.response.data.message
  let re =/^4000/
  // 4000开头的报错为token问题
  if(re.test(code)){
    Vue.prototype.$message.error(msg)
    router.push({path:"/login",replace:true})
  }else if(code!=0){
    Vue.prototype.$message.error(msg)
  }

  return Promise.reject(error);
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
