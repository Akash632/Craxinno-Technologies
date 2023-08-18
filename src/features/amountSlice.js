import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    balance:[],
    total:0
}

export const amountSlice = createSlice({
    name:'amount',
    initialState,
    reducers:{
        add : (state,action)=>{
            state.balance.push(action.payload);
            let result = state.balance.reduce((acc,value)=>+acc+ +value);
            state.total=result;
        },
        total:(state)=>{
            let result = state.balance.reduce((acc,value)=>acc+value);
            state.total=result;
        }
    }
});

export const {add,total} = amountSlice.actions;

export default amountSlice.reducer;