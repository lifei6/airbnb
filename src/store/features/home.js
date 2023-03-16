import { getHomeGoodPrice, getHomeHighScore,getHomediscount, getHotRecommend,getLongFor,getHomePlus } from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGoodPriceAction = createAsyncThunk('fetch/home/goodprice',async ()=>{
     const res = await getHomeGoodPrice()
     return res
})

export const fetchHighScoreAction = createAsyncThunk('fetch/home/highscore',async ()=>{
    const res = await getHomeHighScore()
    return res
})

export const fetchDiscountAction = createAsyncThunk('fetch/home/discount',(payload,{dispatch})=>{
    getHomediscount().then(res=>{
        dispatch(saveDiscountAction(res))
    })
})

export const fetchHotRecommendAction = createAsyncThunk('fetch/home/hotrecommend',(payload,{dispatch})=>{
    getHotRecommend().then(res=>{
        dispatch(saveHotRecommendAction(res))
    })
})

export const fetchLongForAction = createAsyncThunk('fetch/home/longfor',(payload,{dispatch})=>{
    getLongFor().then(res=>{
        dispatch(saveLongForAction(res))
    })
})

export const fetchHomePlusAction = createAsyncThunk('fetch/home/plus',(payload,{dispatch})=>{
    getHomePlus().then(res=>{
        dispatch(saveHomePlusAction(res))
    })
})


const HomeReducer = createSlice({
    name:'home',
    initialState:{
        goodPrice:{},
        highScore:{},
        discount:{},
        hotRecommend:{},
        longFor:{},
        plus:{},
    },
    reducers:{
        saveDiscountAction(state,{payload}){
            state.discount = payload
        },
        saveHotRecommendAction(state,{payload}){
            state.hotRecommend = payload
        },
        saveLongForAction(state,{payload}){
            state.longFor = payload
        },
        saveHomePlusAction(state,{payload}){
            state.plus = payload
        }
    },
    extraReducers(builder){
       builder.addCase(fetchGoodPriceAction.fulfilled,(state,{payload})=>{
        state.goodPrice = payload
       }).addCase(fetchHighScoreAction.fulfilled,(state,{payload})=>{
        state.highScore = payload
       })
    }
})

export const {saveDiscountAction,saveHotRecommendAction,saveLongForAction,saveHomePlusAction} = HomeReducer.actions

export default HomeReducer.reducer