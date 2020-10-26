const mutations = {
    // 缓存token
    SET_TOKEN(state,token){
        state.token = token
        sessionStorage.setItem("token",token)
    },
    // 缓存用户信息
    SET_USERINFO(state,userInfo){
        state.userInfo = userInfo
        sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
    },
    // 改变收缩导航菜单
    CHANGE_COLLAPSE(state,bool){
        state.collapse = bool
    },
    // 设置导航路径
    SET_PATH_ARR(state,arr){
        state.pathArr = arr
    }
}

export{
    mutations
}