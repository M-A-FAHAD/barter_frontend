import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slices/loginSlice";
import signinSlice from "./Slices/signinSlice";

export const Store = configureStore({
    reducer: {
        loginState: LoginSlice,
        signinState: signinSlice
    }
})