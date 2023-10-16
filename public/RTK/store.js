import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slices/loginSlice";
import signinSlice from "./Slices/signinSlice";
import locationSellectorSlice from "./Slices/locationSellectorSlice";
export const Store = configureStore({
    reducer: {
        loginState: LoginSlice,
        signinState: signinSlice,
        locationSellectorState: locationSellectorSlice
    }
})