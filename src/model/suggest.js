import {Http} from "../utils/http"
class SuggestModel{

    // 获取反馈意见列表
    static async getSuggestList(data){
        return await Http.request({
            url:"/suggest/all",
            data,
            method:"POST"
        })
    }
    // 回复反馈意见
    static async replySuggest(data){
        return await Http.request({
            url:"/suggest/reply",
            data,
            method:"POST"
        })
    }
    static async delSuggest(data){
        return await Http.request({
            url:"/suggest/del/"+data.id
        })
    }

}

export{
    SuggestModel 
}