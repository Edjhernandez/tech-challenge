
import { configureStore } from '@reduxjs/toolkit'
import dataLoginSlice from './features/dataLoginSlice'
import dataClientSlice from './features/dataClientSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      dataLogin: dataLoginSlice,
      dataClient: dataClientSlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']