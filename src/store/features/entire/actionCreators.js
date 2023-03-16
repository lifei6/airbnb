import { getRoomList } from "@/services/modules/entire";
import { CHANGE_CURRENT_PAGE,CHANGE_ROOM_LIST,CHANGE_TOTAL_COUNT ,CHANGE_COVER} from "./constants";


export const changeCurrentPageAction = (currentPage)=>({
    type:CHANGE_CURRENT_PAGE,
    currentPage
})

export const changeRooomListAction = (roomList)=>({
    type:CHANGE_ROOM_LIST,
    roomList
})

export const changeTotalCountAction = (totalCount)=>({
    type:CHANGE_TOTAL_COUNT,
    totalCount
})

export const changeCoverAction = (isCover)=>({
    type:CHANGE_COVER,
    isCover
})


export const fetchRoomListAction = (page)=>{
    return async (dispatch,getState)=>{
        window.scrollTo(0,0)
        // 修改当前页
        dispatch(changeCurrentPageAction(page))
        const offset = 20*getState().entire.currentPage
        dispatch(changeCoverAction(true))
        const res = await getRoomList(offset)
        dispatch(changeCoverAction(false))
        dispatch(changeRooomListAction(res.list))
        dispatch(changeTotalCountAction(res.totalCount))
    }
}