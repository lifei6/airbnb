import useFix from '@/hooks/useFix'
import { fetchRoomListAction } from '@/store/features/entire'
import React, { memo, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import {EntireWrapper} from './style'


const Entire = memo((props) => {
    useFix(true)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchRoomListAction())
    },[dispatch])

  return (
    <EntireWrapper>
        <EntireFilter/>
        <EntireRooms/>
        <EntirePagination/>
    </EntireWrapper>
  )
})

const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Entire)