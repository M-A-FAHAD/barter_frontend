import { createSlice } from "@reduxjs/toolkit";


export const SigninSlice = createSlice({
    name: 'signinSlice',
    initialState: 'hidden',
    reducers: {
        signinVisibility(state, action) {
            return action.payload;
        },
    }
})
export const { signinVisibility } = SigninSlice.actions;
export default SigninSlice.reducer
