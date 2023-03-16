import styled from "styled-components";


export const LeftWrapper = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-start;
    color:${props=>props.theme.color.primaryColor};
    .log {
        cursor: pointer;
        margin-left:25px;
    }
`