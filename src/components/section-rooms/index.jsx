import React, { memo } from 'react'
import RoomItem from '../room-item'
import { SectionRoomsWapper } from './style'

const SectionRooms = memo((props) => {
    // console.log('--SectionRooms--渲染')
    const {roomList,roomWidth} = props
  return (
        <SectionRoomsWapper>
        {
            roomList?.slice(0,8).map(room=>{
                return <RoomItem key={room.id} room={room} roomWidth={roomWidth}/>
            })
        }
        </SectionRoomsWapper>
  )
})

export default SectionRooms