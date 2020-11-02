import {Http} from "../utils/http"
class VersionModel{
    // 获取版本列表
    static async getVersionList(){
        return await Http.request({
            url:"/version/list"
        })
    }
    // 获取最新的版本信息
    static async getLatestVersion(){
        return await Http.request({
            url:"/version/latest",
            method:"POST"
        })
    }
    // 新增一个版本
    static async insertVersion(data){
        return await Http.request({
            url:"/version/insert",
            data,
            method:"POST"
        })
    }
    // 更新一个版本
    static async updateVersion(data){
        return await Http.request({
            url:"/version/update",
            data,
            method:"POST"
        })
    }
    
}
export {
    VersionModel
}