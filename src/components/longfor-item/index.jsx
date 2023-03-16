import React, { memo } from 'react'
import {LongforItemWapper} from './style'
const LongforItem = memo((props) => {
const {itemData} = props
  return (
    <LongforItemWapper>
        <div className='inner'>
        <div className='item-info'>
          <img className='cover' src={itemData.picture_url} alt="" />
          <div className='bg-cover'></div>
          <div className='info'>
            <div className='city'>{itemData.name}</div>
            <div className='price'>均价 {itemData.price}</div>
          </div>
        </div>
      </div>
    </LongforItemWapper>
  )
})

export default LongforItem