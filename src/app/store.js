import { configureStore } from "@reduxjs/toolkit";
import amountReducer from '../features/amountSlice';
export const store = configureStore({
    reducer:{
        amount : amountReducer
    }
});