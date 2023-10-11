import { createSlice } from "@reduxjs/toolkit";

export const LogSlice = createSlice({
    name: 'logs',
    initialState: 'hidden',
    reducers: {
        hide: (state) => {
            state = 'hidden';
        },
        show: (state) => {
            state = '';
        }
    }
})

export const { hide, show } = LogSlice.actions
export default LogSlice.reducer