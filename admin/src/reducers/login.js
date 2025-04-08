import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: false,
}

export const counterSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    LoginUser: (state, action) => {
        if(action.payload == "uzun2525"){
            state.login = true
        }
    },
  },
})

export const { LoginUser } = counterSlice.actions

export default counterSlice.reducer