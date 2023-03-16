import ScrollView from "@/base-ui/scroll-view";
import React, { memo, useState } from "react";
import { SectionTabsWrapper } from "./style";

const SectionTabs = memo((props) => {
    // console.log('---SectionTabs--渲染了')
    const { itemNames = [] ,changeShowRooms} = props;
    const [curNameIndex,setCurNameIndex] = useState(itemNames[0])
  function clickNameHandle(index,name){
    changeShowRooms(index)
    setCurNameIndex(name)
  }
  return (
    <SectionTabsWrapper>
        <ScrollView>
        {itemNames.map((item,index) => {
        return (
          <div 
          key={item} 
          className={`item ${curNameIndex===item?'active':''}`}
          onClick={e=>clickNameHandle(index,item)}
          >
            {item}
          </div>
        );
      })}
        </ScrollView>
    </SectionTabsWrapper>
  );
});

export default SectionTabs;
