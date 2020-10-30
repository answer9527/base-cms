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
    },
    // 设置播放器的播放状态
    SET_PLAYER_STATUS(state,status){
        state.playerStatus = status
    },
    // 设置播放器的声音播放源
    SET_PLAYING_AUDIO(state,url){
        state.playingAudio = url
    }
}

export{
    mutations
}