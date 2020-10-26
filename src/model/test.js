import {Http} from "../utils/http"
class TestModel{
    static async test(data){
        return await Http.request({
            url:"/test/get",
            data,
            method:"GET"
        })
    }
    static async testCalendar(){
        return await Http.request({
            url:"/test/calendar"
        })
    }
}
export{
    TestModel
}