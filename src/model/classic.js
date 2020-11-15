import {Http} from "../utils/http"
class ClassicModel{
    // 获取列表
    static async getByListType(data){
        return await Http.request({
            url:"/classic/getByType",
            data,
            method:"POST"
        })
    }
    // 新增
    static async insertClassic(data){
        return await Http.request({
            url:"/classic/add",
            data,
            method:"POST"
        })
    }
    // 删除
    static async deleteClassic(data){
        return await Http.request({
            url:"/classic/delete",
            data,
            method:"GET"
        })
    }
    // 根据classic获取详情
    static async getDetailById(id){
        return await Http.request({
        url:"/classic/detail/"+id
        })
    }
    // 更新classic的信息
    static async updateClassic(data){
        return await Http.request({
            url:"/classic/update",
            data,
            method:"POST"
        })
    }
    // 获取推荐的列表
    static async getRecommendList(){
        return await Http.request({
            url:"/classic/recommend/list"
        })
    }
    // 根据classic的id 获取评论列表
    static async getCommentByCid(data){
        return await Http.request({
            url:"/comment/selectByCid",
            data,
            method:"POST"
        })
    }   
    // 发表评论
    static async insertComment(data){
        return await Http.request({
            url:"/comment/insert",
            data,
            method:"POST"
        })
    }
    // 删除评论
    static async delComment(data){
        return await Http.request({
            url:"/comment/del/"+data.id
        })
    }
    // 管理员强制删除评论
    static async powerDelComment(data){
        return await Http.request({
            url:"/comment/power/del/"+data.id
        })
    }
    // 获取各classic类型的统计情况
    static async getClassicTypeSortTotal(){
        return await Http.request({
            url:"/classicType/sort/total"
        })
    }
    // 下架某个推荐中的classic
    static async cancelRecommend(data){
        return await Http.request({
            url:"/classic/removeRecommend?id="+data.id
        })
    }
    
}

export{
    ClassicModel
}