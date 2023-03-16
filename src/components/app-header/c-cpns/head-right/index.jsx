
import IconAvatar from '@/asserts/svg/icon_avatar'
import IconGlobal from '@/asserts/svg/icon_global'
import IconMenu from '@/asserts/svg/icon_menu'
import React, { memo, useEffect, useState } from 'react'
import {RightWrapper} from './style'
const HeaderRight = memo(() => {
    const [showPanel,setShowPanel] = useState(false)


    useEffect(()=>{
        const windowClickHandle= ()=>{
            setShowPanel(false)
        }
        window.addEventListener('click',windowClickHandle,true)

        return ()=>{
            window.removeEventListener('click',windowClickHandle)
        }
    },[])
    function profileClickHandle(){
        setShowPanel(true)
    }
  return (
    <RightWrapper>
        <div className='btns'>
            <span>登入</span>
            <span>注册</span>
            <span>
                <IconGlobal/>
            </span>
        </div>

        <div className='profile' onClick={profileClickHandle}>
            <IconMenu/>
            <IconAvatar/>
            { showPanel && (
          <div className='panel'>
            <div className='top'>
              <div className='item register'>注册</div>
              <div className='item login'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>出租房源</div>
              <div className='item'>开展体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>
        ) }
        </div>
    </RightWrapper>
  )
})

export default HeaderRight