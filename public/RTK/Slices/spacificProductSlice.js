import { createSlice } from "@reduxjs/toolkit";

const SpacificProductSlice = createSlice({
    name: 'spacificProducSlice',
    initialState: 'hidden',
    reducers: {
        spacificProductsVisibility(state, action) {
            return action.payload;
        }
    }
})
export const { spacificProductsVisibility } = SpacificProductSlice.actions;
export default SpacificProductSlice.reducer