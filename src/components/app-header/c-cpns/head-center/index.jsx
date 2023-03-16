import IconSearchBar from "@/asserts/svg/icon-search-bar";
import React, { memo } from "react";
import { CenterWrapper } from "./style";

const HeaderCenter = memo((props) => {
  // console.log(props.searchClickHandle)
  return (
    <CenterWrapper>
      <div className="search-bar" onClick={e=>props.searchClickHandle()}>
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
