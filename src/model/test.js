import {Http} from "../utils/http"
class TestModel{
    static async test(data){
        return Http.request({
            url:"/test/get",
            data,
            method:"GET"
        })
    }
}
export{
    TestModel
}