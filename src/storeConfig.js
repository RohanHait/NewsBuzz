import { createSlice , configureStore } from "@reduxjs/toolkit";
import API from "./API";
const initialState = {
    responseData : { results : []} ,
    loading : false ,
    api : new API()
}

const newsSlice = createSlice({
    name : 'news' ,
    initialState ,
    reducers : {
        setResponseData(state , action){
            state.responseData = action.payload
        },
        setLoading(state , action){
            state.loading = action.payload
        },
        addResponseData(state , action){
            state.responseData.results = state.responseData.results.concat(action.payload.results)
        }
    }
})

export const store = configureStore({
    reducer : newsSlice.reducer
})

export const {setResponseData , setLoading , setParams, addResponseData } = newsSlice.actions