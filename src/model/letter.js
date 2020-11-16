import {Http} from "../utils/http"

class LetterModel{
    static async getLetterList(data){
        return await Http.request({
            url:"/letter/list",
            data,
            method:"POST"
        })
    }
    static async getLetterMonthPlan(data){
        return await Http.request({
            url:"/letter/month/planCount?y="+data.y+"&m="+data.m
        })
    }
    static async getLetterListByTime(data){
        return await Http.request({
            url:"/letter/byTime?y="+data.y+"&m="+data.m+"&d="+data.d,
            data:{
                "page":data.page,
                "size":data.size
            },
            method:"POST"
        })
    }
    static async sendLetter(data){
        return await Http.request({
            url:"/letter/send?id="+data.id
        })
    }
}
export{
    LetterModel
}