import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import React, { memo,useEffect } from 'react'
import {HomeSectionV2Wrapper}  from './style'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchHighScoreAction } from "@/store/features/home";
import SectionFooter from '@/components/section-footer';


const HomeSectionV2 = memo(() => {
    const { goodPrice } = useSelector(
        (state) => ({
          goodPrice: state.home.highScore,
        }),
        shallowEqual
      );
      const dispatch = useDispatch();
      // 网络请求
      useEffect(() => {
        dispatch(fetchHighScoreAction());
        return () => {
          console.log("HomeSectionV2卸载");
        };
      }, [dispatch]);
  return (
    <HomeSectionV2Wrapper>
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPrice.title} subtitle={goodPrice.subtitle} />
          <SectionRooms roomList={goodPrice.list} roomWidth={'25%'} />
          <SectionFooter/>
        </div>
      </div>
    </HomeSectionV2Wrapper>
  )
})

export default HomeSectionV2