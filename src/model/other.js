import {Http} from "../utils/http"
class OtherModel{
    static async getDashboardSortTotal(){
        return await Http.request({
            url:"/other/sort/all"
        })
    }
}
export{
    OtherModel
}