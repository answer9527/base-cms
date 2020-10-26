import {Http} from "../utils/http"
class UserModel{
    static async login(data){
        return await Http.request({
            url:"/user/pwdToken",
            data,
            method:"POST"
        })
    }
    static async test(data){
        return await Http.request({
            url:"/user/test",
            data,
            method:"POST"
        })
    }
}
export{
    UserModel
}