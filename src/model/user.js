import {Http} from "../utils/http"
class UserModel{
    static async login(data){
        return await Http.request({
            url:"/user/pwdToken",
            data,
            method:"POST"
        })
    }
}
export{
    UserModel
}