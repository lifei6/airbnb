import SectionHeader from "@/components/section-header";
import React, { memo, useEffect } from "react";
import { HomeSectionV6Wrapper } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchHomePlusAction } from "@/store/features/home";
import RoomItem from "@/components/room-item";
import ScrollView from '@/base-ui/scroll-view'
import SectionFooter from "@/components/section-footer";
import { isEmptyO } from "@/utils";

const HomeSectionV6 = memo(() => {
  const { goodPrice } = useSelector(
    (state) => ({
      goodPrice: state.home.plus,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  // 网络请求
  useEffect(() => {
    dispatch(fetchHomePlusAction());
    return () => {
      console.log("HomeSectionV6卸载");
    };
  }, [dispatch]);

  return (
    <HomeSectionV6Wrapper>
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPrice.title} subtitle={goodPrice.subtitle}/>
          <ScrollView>
            {
              goodPrice?.list?.map(item=>{
                return <RoomItem key={item.id} room={item} roomWidth='20%'></RoomItem>
              })
            }
          </ScrollView>
          { isEmptyO(goodPrice) &&<SectionFooter name={'Plus'}/>} 
        </div>
      </div>
    </HomeSectionV6Wrapper>
  );
});

export default HomeSectionV6;
