import React, { memo, useEffect } from "react";
import { HomeWrapper } from "./style";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeBanner from "./c-cpns/home-banner";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import HomeSectionV4 from "./c-cpns/home-section-v4";
import HomeSectionV5 from "./c-cpns/home-section-v5";
import HomeSectionV6 from "./c-cpns/home-section-v6";
import { useDispatch } from "react-redux";
import { changeFixAction } from "@/store/features/main";

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeFixAction(true));
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <HomeSectionV5 />
      <HomeSectionV3 />
      <HomeSectionV4 />
      <HomeSectionV2 />
      <HomeSectionV1 />
      <HomeSectionV6 />
    </HomeWrapper>
  );
});

export default Home;
