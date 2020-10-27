import {Http} from "../utils/http"
class ClassicModel{
    static async getByListType(data){
        return await Http.request({
            url:"/classic/getByType",
            data,
            method:"POST"
        })
    }
    static async insertClassic(data){
        return await Http.request({
            url:"/classic/add",
            data,
            method:"POST"
        })
    }
}

export{
    ClassicModel
}