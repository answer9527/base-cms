// 保存token信息
const set_token = ({commit},token)=>{
    commit('SET_TOKEN',token)
}
const set_uid = ({commit},uid)=>{
    commit('SET_UID',uid)
}
// 报错用户信息
const set_userinfo = ({commit},userInfo)=>{
    commit('SET_USERINFO',userInfo)
}
// 开关导航缩放
const change_collapse = ({commit},bool)=>{
    commit("CHANGE_COLLAPSE",bool)
}
// 设置当前页的路径
const set_path_arr = ({commit},pathArr)=>{
    commit("SET_PATH_ARR",pathArr)
}
// 设置播放器播放状态
const set_player_status = ({commit},status)=>{
    commit("SET_PLAYER_STATUS",status)
}
// 设置播放器的播放源
const set_playing_audio = ({commit},url)=>{
    commit("SET_PLAYING_AUDIO",url)
}
export{
    set_token,set_userinfo,change_collapse,set_path_arr,set_player_status,set_playing_audio
}