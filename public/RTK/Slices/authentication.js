import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: { isAuthenticated: false, user: null },
    reducers: {
        setAuthentication(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        removeAuthentication(state, action) {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
})
export const { setAuthentication, removeAuthentication } = authenticationSlice.actions;
export default authenticationSlice.reducer