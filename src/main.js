// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// import {Menu,Pagination,Table,TableColumn,Button} from "element-ui"
// Vue.use(Button)
// Vue.use(Menu)
Vue.config.productionTip = false

// 全局的css
import "./assets/css/common.css"

import store from "./vuex/store"

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


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
