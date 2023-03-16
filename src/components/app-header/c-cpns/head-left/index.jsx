import IconLogo from '@/asserts/svg/icon_logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function logClickHandle(){
    navigate('/home')
  }
  return (
    <LeftWrapper>
        <div className='log' onClick={logClickHandle}>
            <IconLogo/>
        </div>
    </LeftWrapper>
  )
})

export default HeaderLeft