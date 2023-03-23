import React, { memo, useRef, useState } from "react";
import { RoomWrapper } from "./style";

import { Carousel } from "antd";
import Rating from "@mui/material/Rating";
import IconArrowLeft from "@/asserts/svg/icon-arrow-left";
import IconArrowRight from "@/asserts/svg/icon-arrow-right";
import Indictor from "@/base-ui/indictor";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const [curIndex, setCurIndex] = useState(0);
  const { room, roomWidth = "25%" } = props;
  const swiperRef = useRef();
  // 1.上下按钮点击事件处理
  function btnClickHandle(event,isRight) {
    event.stopPropagation()
    isRight ? swiperRef.current.next() : swiperRef.current.prev();
    let newIndex = curIndex;
    newIndex = isRight ? newIndex + 1 : newIndex - 1;
    // 处理左边索引超出
    if (newIndex < 0) newIndex = room.picture_urls.length - 1;
    // 处理右边索引超出
    if (newIndex > room.picture_urls.length - 1) newIndex = 0;
    // 设置新索引
    setCurIndex(newIndex);
  }
  // 2.指示器中元素点击事件处理
  function elClickHandle(index) {
    swiperRef.current.goTo(index, true);
    setCurIndex(index);
  }

  // 3.跳转详情页
  function itemClickHandle(room){
    if(props.clickHandle){
      props.clickHandle(room)
    }
  }
  return (
    <RoomWrapper
      verifyColor={room?.verify_info?.text_color || "#39576a"}
      roomWidth={roomWidth}
    >
      <div className="inner">
        {room?.picture_urls ? (
          <div className="swiper" onClick={e=>itemClickHandle(room)}>
            <div className="control">
              <div className="btn left" onClick={(e) => btnClickHandle(e,false)}>
                <IconArrowLeft width="30" height="30" />
              </div>
              <div className="btn right" onClick={(e) => btnClickHandle(e,true)}>
                <IconArrowRight width="30" height="30" />
              </div>
            </div>
            <Carousel dots={false} autoplay={false} ref={swiperRef}  >
              {room?.picture_urls?.map((item) => {
                return (
                  <div className="cover" key={item}>
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Carousel>
            <div className="indictor">
              <Indictor curIndex={curIndex} indictorWidth={68}>
                {room.picture_urls.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={(e) => elClickHandle(index)}
                      className="item-dot"
                    >
                      <span
                        className={classNames("dot", {
                          active: index === curIndex,
                        },{'index-sub':index-curIndex===1||index-curIndex===-1},
                        {'index-sub-sub':index-curIndex===2||index-curIndex===-2}
                        )}
                      ></span>
                    </div>
                  );
                })}
              </Indictor>
            </div>
          </div>
        ) : (
          <div className="cover">
            <img src={room.picture_url} alt="" />
          </div>
        )}

        <div className="desc">{room.verify_info?.messages.join(" · ")}</div>
        <div className="name">{room.name}</div>
        <div className="price">¥{room.price}/晚</div>
      </div>
      <div className="bottom">
        <Rating
          name="read-only"
          value={room.star_rating ?? 5}
          precision={0.1}
          readOnly
          sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
        />
        <span className="count">{room.reviews_count}</span>
        {room.bottom_info && (
          <span className="extra">·{room.bottom_info?.content}</span>
        )}
      </div>
    </RoomWrapper>
  );
});

export default RoomItem;
