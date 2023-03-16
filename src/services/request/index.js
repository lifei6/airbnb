import axios from "axios";
import { BASE_URL,TIMEOUT } from "./config";

class Request {
    constructor(baseURL,timeout){
        // 创建请求体
        this.instance = axios.create({
            baseURL,
            timeout
        })
        // 添加拦截器
        this.instance.interceptors.response.use(res=>{
            return res.data
        },err=>{
            return err
        })
    }

    // 添加请求类型
    // 1.对应axios({})
    request(config){
        return this.instance.request(config)
    }
    // 2.对应axios({,method:'get'})
    get(config){
       return this.instance.request({...config,method:'get'})
    }
    // 2.对应axios({,method:'post'})
    post(config){
       return this.instance.request({...config,method:'post'})
    }
}

const request = new Request(BASE_URL,TIMEOUT)

export default request