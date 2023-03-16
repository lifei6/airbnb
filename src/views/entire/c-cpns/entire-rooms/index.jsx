import RoomItem from '@/components/room-item'
import { saveRoomAction } from '@/store/features/detail'
import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { EntireRoomsWrapper } from './style'

const EntireRooms = memo(() => {
  const {roomList,totalCount,isShowCover} = useSelector((state)=>({
    roomList:state.entire.roomList,
    totalCount:state.entire.totalCount,
    isShowCover:state.entire.isShowCover
  }),shallowEqual)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const clickHandle=useCallback((room)=>{
      dispatch(saveRoomAction(room))
     navigate('/detail')
  },[navigate,dispatch])

  return (
    <EntireRoomsWrapper>
      <h2 className='title'>{totalCount}多出住所</h2>
      <div className='list'>
        {
          roomList?.map(item=>{
            return <RoomItem key= {item._id} room={item} roomWidth='20%' clickHandle={clickHandle}></RoomItem>
          })
        }
      </div>

      {isShowCover&&<div className='big-cover'></div>}
    </EntireRoomsWrapper>
  )
})

export default EntireRooms