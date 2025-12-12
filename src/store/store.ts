import { configureStore } from "@reduxjs/toolkit";
import uislice from '../Features/ui/uiSlice'

export const store=configureStore({
  reducer:{
    uislice:uislice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch