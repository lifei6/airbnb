import { createSlice } from "@reduxjs/toolkit";



const mainReducer = createSlice({
    name:'main',
    initialState:{
        isFix:true,
    },
    reducers:{
        changeFixAction(state,{payload}){
            state.isFix = payload
        }
    }
})



export const {changeFixAction} = mainReducer.actions

export default mainReducer.reducer