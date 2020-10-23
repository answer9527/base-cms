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
}

export{
    mutations
}