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
}

export{
    ClassicModel
}