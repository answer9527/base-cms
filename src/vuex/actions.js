const set_token = ({commit},token)=>{
    commit('SET_TOKEN',token)
}
const set_uid = ({commit},uid)=>{
    commit('SET_UID',uid)
}
const set_userinfo = ({commit},userInfo)=>{
    commit('SET_USERINFO',userInfo)
}

export{
    set_token,set_userinfo
}