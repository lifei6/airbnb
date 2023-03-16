import IconSearchBar from "@/asserts/svg/icon-search-bar";
import useScrollLocation from "@/hooks/useScrollLocation";
import classNames from "classnames";
import React, { memo, useState ,useRef} from "react";
import { useSelector } from "react-redux";
import HeaderCenter from "./c-cpns/head-center";
import HeaderLeft from "./c-cpns/head-left";
import HeaderRight from "./c-cpns/head-right";
import { HeaderWrapper } from "./style";

const AppHeader = memo(() => {
  const { isFix } = useSelector((state) => ({
    isFix: state.main.isFix,
  }));
  const [isClickSearch, setIsClickSearch] = useState(false);
  const [curIndex, setCurIndex] = useState(0);
  const seachNames = ["搜索房源", "搜索体验"];

  const {scrollY} = useScrollLocation()
  const prevY = useRef(0)
  // 记录点击时的鼠标位置
  if(!isClickSearch)prevY.current=scrollY
  function tabClickHandle(index) {
    setCurIndex(index);
  }

  function searchClickHandle(){
    setIsClickSearch(true)
   console.log(isClickSearch)
  
  }
  // 点击后且鼠标滚动超过30则收起来
  if(isClickSearch&&Math.abs(scrollY-prevY.current)>30){
    setIsClickSearch(false)
   console.log(isClickSearch)

  }

  const tabsEl = ( <div className="tabs">
  {seachNames.map((name, index) => {
    return (
      <div
        className={classNames("search-tab", {
          active: index === curIndex,
        })}
        key={name}
        onClick={(e) => tabClickHandle(index)}
      >
        {name}
      </div>
    );
  })}
</div>)
  return (
    <HeaderWrapper isFix={isFix}>
      <div className="content">
        <HeaderLeft></HeaderLeft>
            {isClickSearch?tabsEl:(<HeaderCenter searchClickHandle={searchClickHandle}></HeaderCenter>)}    
        <HeaderRight></HeaderRight>
      </div>

      {isClickSearch && (
        <div className="search-area">
          <div className="detail-area">
            <div className="detail-item">
              <div className="t-item city">城市</div>
              <div className="b-item grobal">全球</div>
            </div>
            <div className="line"></div>
            <div className="detail-item">
              <div className="t-item city">入住退房日期</div>
              <div className="b-item">请在日历中选择</div>
            </div>
            <div className="line"></div>

            <div className="detail-item">
              <div className="t-item city">关键词</div>
              <div className="b-item">景点/地址/房源名</div>

              <div className="search-icon">
                <IconSearchBar width="16" height="16" />
              </div>
            </div>

            <div className="bottom-cover"></div>
          </div>
        </div>
      )}
    </HeaderWrapper>
  );
});

export default AppHeader;
