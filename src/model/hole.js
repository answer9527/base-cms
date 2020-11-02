import {Http} from "../utils/http"
class HoleModel{
    static async getHoleList(data){
        return await Http.request({
            url:"/hole/list",
            data,
            method:"POST"
        })
    }
}
export {
    HoleModel
}