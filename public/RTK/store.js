import { configureStore } from '@reduxjs/toolkit'
import { LogSlice } from './Slices/logSlice'

export const Store = configureStore({
    reducer: {
        LogsStatus: LogSlice
    }
})