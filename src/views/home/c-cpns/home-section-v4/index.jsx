import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import React, { memo,useCallback,useEffect ,useState} from 'react'
import {HomeSectionV4Wrapper}  from './style'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {  fetchHotRecommendAction } from "@/store/features/home";
import SectionTabs from '@/components/section-tabs';
import { isEmptyO } from '@/utils';
import SectionFooter from '@/components/section-footer';


const HomeSectionV4 = memo(() => {
  const [curNameIndex,setCurNameIndex] = useState(0)
    const { goodPrice } = useSelector(
        (state) => ({
          goodPrice: state.home.hotRecommend,
        }),
        shallowEqual
      );
      const itemNames =  goodPrice?.dest_address?.map(item=>item.name)
   
      const dispatch = useDispatch();
      // 网络请求
      useEffect(() => {
        dispatch(fetchHotRecommendAction());
        return () => {
          console.log("HomeSectionV4卸载");
        };
      }, [dispatch]);

      const changeShowRooms = useCallback((index)=>{
        setCurNameIndex(index)
      },[])
      
  return (
    <HomeSectionV4Wrapper>
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPrice.title} />
          { isEmptyO(goodPrice) &&<SectionTabs itemNames={itemNames} changeShowRooms={changeShowRooms}/>} 
          { isEmptyO(goodPrice)&&<SectionRooms roomList={goodPrice.dest_list?.[itemNames[curNameIndex]]} roomWidth={'33.33%'}  />}
          { isEmptyO(goodPrice) &&<SectionFooter name={itemNames[curNameIndex]}/>} 
        </div>
      </div>
    </HomeSectionV4Wrapper>
  )
})

export default HomeSectionV4