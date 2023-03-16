import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';
import { EntirePaginationWrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchRoomListAction } from '@/store/features/entire';
const EntirePagination = memo(() => {
  const {totalCount,currentPage,roomList} = useSelector((state)=>({
    totalCount:state.entire.totalCount,
    currentPage:state.entire.currentPage,
    roomList:state.entire.roomList
  }))
  const totalPage = Math.ceil(totalCount/20)
  const startNum = currentPage*20+1
  const endNum = (currentPage+1)*20

  const dispatch = useDispatch()
  function pageChangeHandle(event,pageCount){
    // console.log(pageCount)
    // 1.通知仓库改变页码
    // 2.发送请求拿到新数据展示
    dispatch(fetchRoomListAction(pageCount-1))
  }
  return (
    <EntirePaginationWrapper>
      {
        !!roomList?.length&&(
          <div className='info'>
          <Pagination 
          count={totalPage}  
          onChange={pageChangeHandle} 
          />
          <div className='desc'>
            第{startNum}-{endNum}个房源，共超过{totalCount}个
          </div>
        </div>
        )
      }
    </EntirePaginationWrapper>
  )
})

export default EntirePagination