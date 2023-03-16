import React, { memo,useState } from 'react'
import {DetailPictureWrapper} from './style'
import { shallowEqual, useSelector } from 'react-redux'
import PictureBrouser from '@/base-ui/picture-brouser'
const DetailPicture = memo(() => {
  const [showBrouser,setShowBrouser] =useState(false)
    const {room} = useSelector((state)=>({
        room:state.detail.room
      }),shallowEqual)
  return (
    <DetailPictureWrapper>
        <div className="pictures" onClick={e=>setShowBrouser(true)}>
            <div className='left'>
                <div className='item'>
                    <img src={room?.picture_urls?.[0]} alt="" />
                    <div className='cover'></div>
                </div>
            </div>

            <div className='right'>
                {
                    room?.picture_urls?.slice(1,5).map((item,index)=>{
                        return <div key={index} className='item'>
                            <img src={item} alt=""/>
                            <div className='cover'></div>
                         </div>
                    })
                }
            </div>
      </div>

      <div className='show-btn' onClick={e=>setShowBrouser(true)}>显示照片</div>
      {showBrouser&&<PictureBrouser setShowBrouser={setShowBrouser} pictureUrls={room.picture_urls}/>}
    </DetailPictureWrapper>
  )
})

export default DetailPicture