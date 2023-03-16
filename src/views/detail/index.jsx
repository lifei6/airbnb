
import useFix from '@/hooks/useFix'
import React, { memo } from 'react'
import DetailInfo from './c-cpns/detail-info'
import DetailPicture from './c-cpns/detail-picture'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  useFix(false)
  return (
    <DetailWrapper>
      <DetailPicture/>
      <DetailInfo/>
    </DetailWrapper>
  )
})

export default Detail