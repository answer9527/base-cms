const set_token = ({commit},token)=>{
    commit('SET_TOKEN',token)
}
const set_uid = ({commit},uid)=>{
    commit('SET_UID',uid)
}
const set_userinfo = ({commit},userInfo)=>{
    commit('SET_USERINFO',userInfo)
}
const change_collapse = ({commit},bool)=>{
    commit("CHANGE_COLLAPSE",bool)
}
const set_path_arr = ({commit},pathArr)=>{
    commit("SET_PATH_ARR",pathArr)
}
export{
    set_token,set_userinfo,change_collapse,set_path_arr
}