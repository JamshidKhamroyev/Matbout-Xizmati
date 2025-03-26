import { configureStore } from '@reduxjs/toolkit'
import loaderReducers from '../reducers/loader'

export const store = configureStore({
  reducer: {
    load: loaderReducers,
  },
})