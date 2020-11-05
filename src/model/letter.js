import {Http} from "../utils/http"

class LetterModel{
    static async getLetterList(data){
        return await Http.request({
            url:"/letter/list",
            data,
            method:"POST"
        })
    }
}
export{
    LetterModel
}