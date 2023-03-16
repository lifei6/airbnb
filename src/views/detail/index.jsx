import { useDispatch } from "react-redux";
import { changeFixAction } from "@/store/features/main";
import React, { memo,useEffect } from 'react'
import DetailInfo from './c-cpns/detail-info'
import DetailPicture from './c-cpns/detail-picture'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeFixAction(false));
  }, [dispatch]);
  return (
    <DetailWrapper>
      <DetailPicture/>
      <DetailInfo/>
    </DetailWrapper>
  )
})

export default Detail