import request from "../request";

export const getHomeGoodPrice = ()=>request.get({url:'/home/goodprice'})
export const getHomeHighScore = ()=>request.get({url:'/home/highscore'})

export const getHomediscount = ()=>request.get({url:'/home/discount'})
export const getHotRecommend = ()=>request.get({url:'/home/hotrecommenddest'})
export const getLongFor = ()=>request.get({url:'/home/longfor'})
export const getHomePlus = ()=>request.get({url:'/home/plus'})
