import styled from "styled-components";

export const EntireRoomsWrapper = styled.div`
    margin:160px 20px 80px;
    position:relative;
    .title {
        font-size:22px;
        font-weight:700;
        color:#222;
        margin:0 0px 10px 10px;
    }
    .list {
        display:flex;
        flex-wrap:wrap;
    }

    .big-cover {
        position:absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background-color:rgba(255,255,255,0.5)
    }
`