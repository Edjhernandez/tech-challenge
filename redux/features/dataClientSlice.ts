import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { adicional, initialData } from '@/app/lib/definitions'
import { setLocalStorage } from '@/app/lib/actions'
import { dataofcars } from '@/app/lib/dataForComponents'

export const fetchData = createAsyncThunk(
  'getDataClient',
  async (placa: string, {rejectWithValue}) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    if(!response.ok){
        return rejectWithValue(response.status)
    } else {
        const data = await response.json()
        return [data, placa]
    } 
  }
)

const initialState = initialData

const dataClientSlice = createSlice({
  name: 'clientes',
  initialState,
  reducers: {
    setAditional: (state, action) => {
      let suma = 20
      state.data.adicionales.map((adicional: adicional) => {
        if(action.payload === adicional.name) adicional.status = !adicional.status
        adicional.status ? suma = suma + adicional.value : suma
      })
      state.data.mensual = suma
      setLocalStorage('dataClient', state)
    },
    setPlus: (state) => {
      state.data.sumaAsegurada < 16500 ? 
      state.data.sumaAsegurada = state.data.sumaAsegurada + 100 : 
      state.data.sumaAsegurada = state.data.sumaAsegurada
      if(state.data.sumaAsegurada > 16000){
        let suma = 20
        if(state.data.adicionales[1].status && state.data.adicionales[1].value === 20) state.data.adicionales[1].value = 0
        state.data.adicionales.map((adicional: adicional) => {
          adicional.status ? suma = suma + adicional.value : suma
        })
        state.data.mensual = suma
      }
      setLocalStorage('dataClient', state)
    },
    setLess: (state) => {
      state.data.sumaAsegurada > 12500 ? 
      state.data.sumaAsegurada = state.data.sumaAsegurada - 100 : 
      state.data.sumaAsegurada

      if(state.data.sumaAsegurada <= 16000){
        let suma = 20
        if(state.data.adicionales[1].status && state.data.adicionales[1].value === 0) state.data.adicionales[1].value = 20 
          state.data.adicionales.map((adicional: adicional) => {
          adicional.status ? suma = suma + adicional.value : suma
        })
        state.data.mensual = suma
      }
      setLocalStorage('dataClient', state)
    },
    setMensual: (state, action) => {
      state.data.mensual = action.payload
      setLocalStorage('dataClient', state)
    },
    setInitial: (state) => {
      state.error = ''
      state.loading = false
      state.data = initialData.data
      setLocalStorage('dataClient', initialData)
    },
    setLS: (state, action) => {
      state.loading = action.payload.loading
      state.error = action.payload.error
      state.data.id = action.payload.data.id
      state.data.nombre = action.payload.data.nombre
      state.data.correo = action.payload.data.correo
      state.data.vehiculo = action.payload.data.vehiculo
      state.data.adicionales = action.payload.data.adicionales
      state.data.sumaAsegurada = action.payload.data.sumaAsegurada
      state.data.mensual = action.payload.data.mensual
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true
    }),
    builder.addCase(fetchData.fulfilled, (state, action) => {
        const index = Math.floor(Math.random() * 9)
        const clientes = action.payload[0]
        const placa = action.payload[1]
        state.error = 'ok'
        state.loading = false
        state.data.nombre = clientes[index].name
        state.data.correo = clientes[index].email
        state.data.id = placa
        state.data.vehiculo.ano = dataofcars[index].ano
        state.data.vehiculo.modelo = dataofcars[index].modelo
        state.data.vehiculo.marca = dataofcars[index].marca 
        setLocalStorage('dataClient', state) 
    }),
    builder.addCase(fetchData.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.error = action.payload
    })
  },
})

export default dataClientSlice.reducer

export const { setAditional, setPlus, setLess, setMensual, setInitial, setLS } = dataClientSlice.actions;