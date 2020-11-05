import {Http} from "../utils/http"

class LetterModel{
    static async getLetterList(){
        return await Http.request({
            url:"/letter/"
        })
    }
}
export{
    LetterModel
}