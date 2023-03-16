import IconMoreArrow from '@/asserts/svg/icon-more-arrow'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionFooterWrapper } from './style'

const SectionFooter = memo((props) => {
    const {name} = props
    let showName = `显示更多房源`
    if(name){
        showName = `显示更多${name}房源`
    }
    const navigte = useNavigate()
    function routerHandle(){
      navigte('/entire')
    }
  return (
    <SectionFooterWrapper color={name?"#00848A": "#000"}>
    <div className='info' onClick={e=>routerHandle()}>
        <span className='text'>{showName}</span>
        <IconMoreArrow/>
      </div>
    </SectionFooterWrapper>
  )
})

export default SectionFooter