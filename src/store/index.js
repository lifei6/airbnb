import { configureStore } from "@reduxjs/toolkit";
import { HomeReducer,EntireReducer,DetailReducer ,MainReducer} from "./features";



const store = configureStore({
    reducer:{
        home:HomeReducer,
        entire:EntireReducer,
        detail:DetailReducer,
        main:MainReducer,
    }
})

export default store