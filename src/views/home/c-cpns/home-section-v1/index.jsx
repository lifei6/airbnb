import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import React, { memo,useEffect } from 'react'
import {HomeSectionV1Wrapper}  from './style'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchGoodPriceAction } from "@/store/features/home";
import SectionFooter from '@/components/section-footer';


const HomeSectionV1 = memo(() => {
    const { goodPrice } = useSelector(
        (state) => ({
          goodPrice: state.home.goodPrice,
        }),
        shallowEqual
      );
      const dispatch = useDispatch();
      // 网络请求
      useEffect(() => {
        dispatch(fetchGoodPriceAction());
        return () => {
          console.log("HomeSectionV1卸载");
        };
      }, [dispatch]);
  return (
    <HomeSectionV1Wrapper>
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPrice.title} />
          <SectionRooms roomList={goodPrice.list} roomWidth={'25%'}/>
          <SectionFooter/>
        </div>
      </div>
    </HomeSectionV1Wrapper>
  )
})

export default HomeSectionV1