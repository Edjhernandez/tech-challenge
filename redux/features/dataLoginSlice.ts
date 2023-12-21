import { createSlice } from '@reduxjs/toolkit'
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
      const { nrodoc, celular, placa, condiciones} = action.payload
      state.nrodoc = nrodoc,
      state.celular = celular,
      state.placa = placa,
      state.condiciones = condiciones
    },
  }
})

export default dataLoginSlice.reducer

export const { setDataLogin } = dataLoginSlice.actions;