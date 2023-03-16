import React, { memo,useState } from 'react'
import {EntireFilterWrapper} from './style'
import filterName from '@/asserts/data/filter_data.json'
import classNames from 'classnames'
const EntireFilter = memo(() => {
  const [selectItems,setSelectItems] = useState([])

  function selectHandle(item){
    const newItems = [...selectItems]

    if(newItems.includes(item)){
      // console.log(newItems.indexOf(item))
      const index = newItems.findIndex(name=>name===item)
      newItems.splice(index,1)
    }else{
      newItems.push(item)
    }
    console.log(newItems)
    setSelectItems(newItems)
  }
  return (
    <EntireFilterWrapper>
      {
        filterName?.map(item=>{
          return <div 
          key={item} 
          className={classNames('filter-btn', {
            active: selectItems.includes(item)
          })}
          onClick={e=>selectHandle(item)}
          >{item}</div>
        })
      }
    </EntireFilterWrapper>
  )
})

export default EntireFilter