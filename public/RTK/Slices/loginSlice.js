import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: 'loginslice',
    initialState: 'hidden',
    reducers: {
        loginVisibility(state, action) {
            return action.payload;
        },
    }
})
export const { loginVisibility } = LoginSlice.actions;
export default LoginSlice.reducer