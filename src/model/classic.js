import {Http} from "../utils/http"
class ClassicModel{
    static async getByListType(data){
        return await Http.request({
            url:"/classic/getByType",
            data,
            method:"POST"
        })
    }
}

export{
    ClassicModel
}