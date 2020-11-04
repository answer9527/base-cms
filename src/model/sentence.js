import {Http} from "../utils/http"
class SentenceModel{
    // 获取网抑列表
    static async getSentenceList(data){
        return await Http.request({
            url:"/sentence/list",
            data,
            method:"POST"
        })
    }
    // 新增一个网抑项
    static async insertSentence(data){
        return await Http.request({
            url:"/sentence/insert",
            data,
            method:"POST"
        })
    }
    // 删除一个网抑
    static async delSentence(data){
        return await Http.request({
            url:"/sentence/del/"+data.id
        })
    }
}
export{
    SentenceModel
}