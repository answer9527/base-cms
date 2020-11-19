import Vue from "vue"
import Vuex from "vuex"
import * as actions from "./actions"
import * as getters from "./getters"
import {mutations} from "./mutations"
Vue.use(Vuex)

const state = {
    token:"",
    userInfo:{},
    // 菜单导航是否收缩
    collapse:false,
    // 导航路径
    pathArr:[],
    // 全局的播放器
    player:new Audio(),
    // 播放器的状态
    playerStatus:false,
    // 播放的歌曲链接
    playingAudio:"",
    // 是否加载中
    isLoading:false

}

export default new Vuex.Store({
    actions,getters,mutations,state
})