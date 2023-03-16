import styled from "styled-components";


export const ScrollViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;
  .scroll {
    overflow: hidden;
    ${props=>props.imgAddClass?'margin:0 -8px':'margin:0 0'};
    .scroll-content {
      display: flex;
      transform:translateX(-${props=>props.left}px);
      transition: transform 250ms ease;
    }
  }

  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    /* text-align: center; */
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    cursor: pointer;

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`