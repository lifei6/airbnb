import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`
    display:flex;
    justify-content:center;
    .info {
        display:flex;
        flex-direction:column;
        align-items:center;


        .MuiPaginationItem-icon{
           font-size:25px; 
        }
        .MuiPaginationItem-page.Mui-selected {
            background-color:#000;
            color:#fff;

        }
        .MuiPaginationItem-page {
            margin:0 8px;
        }
        .MuiPaginationItem-page:hover {
                text-decoration:underline;
            }

        .desc {
            margin-top:16px;
            color:#222;
        }
    }
`