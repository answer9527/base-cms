import axios from "axios"
import config from "../config/config"
axios.defaults.baseURL=config.base_url

class Http{
    // 接口请求
    static async request({url,data={},method="GET"}){
        let res;
        if(method=="POST"){
            res = await axios.post(url,data)
        }else{
            res = await axios.get(url,{params:data})
        }
        return res.data
    }
    // 上传请求
    static async upload(url,file){
        const data = new FormData();
        data.append('file', file);
        let res = await axios.post(url,data,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        return res.data
    }
}


export{
    Http
}