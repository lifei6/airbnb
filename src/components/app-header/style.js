import styled from "styled-components";

export const HeaderWrapper = styled.div`
    border-bottom: 1px solid #eee;
    position: ${(props) => (props.isFix ? "fixed" : "relative")};
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 999;

    .content {
      display: flex;
      align-items: center;
      height: 80px;

      .tabs {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 160px;
        height: 48px;
        box-sizing: border-box;
        padding: 0 8px;
        /* border: 1px solid #ddd; */
        cursor: pointer;

        .search-tab {
          /* width:50%; */
          text-align: center;
          font-size: 16px;
          font-weight: 520;
          color: #525252;

          &.active {
            border-bottom: 2px solid #222222;
          }
        }
      }





    }

    .search-area {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      /* position: relative; */

      .detail-area {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 840px;
        height: 60px;
        box-sizing: border-box;
        padding: 0 8px;
        border: 1px solid #ddd;
        border-radius: 30px;

        cursor: pointer;

        .detail-item {
          /* border:1px solid red; */
          flex: 1;
          padding-left: 20px;
          box-sizing: border-box;

          .t-item {
            font-size: 12px;
            color: #222222;
            font-weight: 700;
          }

          .b-item {
            font-size: 16px;
            color: #717171;
            margin-top: 5px;
          }

          .grobal {
            color: #222222;
            font-weight: 800;
          }

          .search-icon {
            width: 50px;
            height: 50px;
            color: #fff;
            background-color: #ff385c;
            border-radius: 50%;
            position: absolute;
            right: 10px;
            top: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .line {
          width: 1px;
          height: 28px;
          background-color: #e4e4e4;
          /* display:flex; */
          /* border:1px solid #e4e4e4; */
          overflow: hidden;
        }
      }
    }


  .bottom-cover{
    position: fixed;
  z-index: 99;
  top: 160px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  }

`;
