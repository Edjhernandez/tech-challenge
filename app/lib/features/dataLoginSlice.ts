import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { dataInput } from '@/app/lib/definitions';

const initialState = {
  nrodoc: '',
  celular: '',
  placa: '',
  condiciones: false
} as dataInput

const dataLoginSlice = createSlice({
  name: 'dataLogin',
  initialState,
  reducers: {
    setDataLogin: (state, action) => {
      state = action.payload
      console.log(state)
    },
  }
})

export default dataLoginSlice.reducer

export const { setDataLogin } = dataLoginSlice.actions;