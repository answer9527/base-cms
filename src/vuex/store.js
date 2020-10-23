import Vue from "vue"
import Vuex from "vuex"
import * as actions from "./actions"
import * as getters from "./getters"
import {mutations} from "./mutations"
Vue.use(Vuex)

const state = {
    token:"",
    userInfo:{},

}

export default new Vuex.Store({
    actions,getters,mutations,state
})