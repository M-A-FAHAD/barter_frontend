import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slices/loginSlice";
import signinSlice from "./Slices/signinSlice";
import locationSellectorSlice from "./Slices/locationSellectorSlice";
import spacificProductSlice from "./Slices/spacificProductSlice";
export const Store = configureStore({
    reducer: {
        loginState: LoginSlice,
        signinState: signinSlice,
        locationSellectorState: locationSellectorSlice,
        spacificProductState: spacificProductSlice
    }
})