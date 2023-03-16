import styled from "styled-components";


export const RightWrapper = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    align-items:center;


    .btns {
        display:flex;
        align-items:center;

        color:${props=>props.theme.text.primaryColor};
        width:150px;
        justify-content:space-around;
        font-weight:600;
        span {
            display:flex;
            width:50px;
            height:40px;
            line-height:40px;
            border-radius:20px;
            justify-content:space-around;
            cursor: pointer;
            align-items:center;
            &:hover {
                background-color:#f7f7f7;
            }
        }
    }

.profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${props => props.theme.text.primaryColor};
    cursor: pointer;

    /* 引入box阴影 */
    ${props=>props.theme.mixin.boxShadow}
    }

    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0,0,0,.2);
      color: #666;

      .top, .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
`