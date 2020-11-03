import {Http} from "../utils/http"
class HoleModel{
    static async getHoleList(data){
        return await Http.request({
            url:"/hole/list",
            data,
            method:"POST"
        })
    }
    // 获取树洞的评论
    static async get_Comment(data){
        return await Http.request({
            url:"/hole/comment/selectByHid",
            data,
            method:"POST"
        })
    }
    // 管理员强制删除树洞评论
    static async powerDelComment(data){
        return await Http.request({
            url:"/hole/comment/power/del/"+data.id
        })
    }
    static async powerDelHole(data){
        return await Http.request({
            url:"/hole/power/del/"+data.id
        })
    }
}
export {
    HoleModel
}