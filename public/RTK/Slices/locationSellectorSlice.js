import { createSlice } from "@reduxjs/toolkit";

const locationSelectorSlice = createSlice({
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