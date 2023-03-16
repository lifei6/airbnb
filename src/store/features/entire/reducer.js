import { CHANGE_CURRENT_PAGE,CHANGE_ROOM_LIST,CHANGE_TOTAL_COUNT,CHANGE_COVER } from "./constants";

const initialEntire = {
    currentPage:0,
    roomList:[],
    totalCount:0,

    isShowCover:false,
}

function reducer(state=initialEntire,action){
    switch(action.type){
        case CHANGE_CURRENT_PAGE:
            return {...state,currentPage:action.currentPage}
        case CHANGE_ROOM_LIST:
            return {...state,roomList:action.roomList}
        case CHANGE_TOTAL_COUNT:
            return {...state,totalCount:action.totalCount}
        case CHANGE_COVER:
            return {...state,isShowCover:action.isCover}
        default:
            return state
    }
}

export default reducer
