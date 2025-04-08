import { configureStore } from '@reduxjs/toolkit'
import loader from '../reducers/loader'
import login from '../reducers/login'

export const store = configureStore({
  reducer: {
    login: login,
    loader: loader,
  },
})