import { createSlice } from "@reduxjs/toolkit";


const SigninSlice = createSlice({
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
