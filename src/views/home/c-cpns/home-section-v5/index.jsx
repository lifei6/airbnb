import SectionHeader from "@/components/section-header";
import React, { memo, useEffect } from "react";
import { HomeSectionV5Wrapper } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchLongForAction } from "@/store/features/home";
import LongforItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeSectionV5 = memo(() => {
  console.log('---v5---')
  const { goodPrice } = useSelector(
    (state) => ({
      goodPrice: state.home.longFor,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  // 网络请求
  useEffect(() => {
    dispatch(fetchLongForAction());
    return () => {
      console.log("HomeSectionV5卸载");
    };
  }, [dispatch]);

  return (
    <HomeSectionV5Wrapper>
      <div className="content">
        <div className="good-price">
          <SectionHeader
            title={goodPrice.title}
            subtitle={goodPrice.subtitle}
          />
            <ScrollView imgAddClass={true}>
              {goodPrice?.list?.map((item) => {
                return (
                  <LongforItem className="item" itemData={item} key={item.city}></LongforItem>
                );
              })}
            </ScrollView>
        </div>
      </div>
    </HomeSectionV5Wrapper>
  );
});

export default HomeSectionV5;
