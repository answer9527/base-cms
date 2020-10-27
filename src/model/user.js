import {Http} from "../utils/http"
class UserModel{
    static async test(data){
        return await Http.request({
            url:"/user/test",
            data,
            method:"POST"
        })
    }
    static async login(data){
        return await Http.request({
            url:"/user/pwdToken",
            data,
            method:"POST"
        })
    }
    static async getList(data){
        // return await this.$ajax("/v1/user/list",data,"POST")
        return await Http.request({
            url:"/user/list",
            data,
            method:"POST"
        })
    }

}
export{
    UserModel
}