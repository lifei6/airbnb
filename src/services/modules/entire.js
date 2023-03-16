import request from "../request";

export const getRoomList = (offset=0,size=20)=>request.get({
    url:'/entire/list',
    params:{
        offset,
        size
    }
})