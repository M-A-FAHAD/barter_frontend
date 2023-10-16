import { createSlice } from "@reduxjs/toolkit";

export const locationSelectorSlice = createSlice({
    name: 'locationSellectorSlice',
    initialState: 'hidden',
    reducers: {
        locationSelectorVisibility(state, action) {
            return action.payload;
        },
    }
})
export const { locationSelectorVisibility } = locationSelectorSlice.actions;
export default locationSelectorSlice.reducer