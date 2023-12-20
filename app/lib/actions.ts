import { z } from 'zod'
import { initialData, getDataClient } from './definitions'

// Validaciones para el login

const placaregex = new RegExp(/^(?=.*[A-Za-z])(?=(.*[0-9]))\S+$/)
const numbersregex = new RegExp(/^[0-9]+$/)
 
export const inputSchema = z.object({
  nrodoc: z.string()
  .min(7, {message:'El numero de documento debe tener minimo 7 digitos'})
  .max(8, {message:'El numero de documento debe tener maximo 8 digitos'})
  .regex(numbersregex, {message: 'El DNI solo debe contener numeros, sin espacios'}),
  celular: z.string()
  .min(8, {message:'El numero de celular debe tener minimo 8 digitos'})
  .max(10, {message:'El numero de celular debe tener maximo 10 digitos'})
  .regex(numbersregex, {message: 'El celular solo debe contener numeros, sin espacios'}),
  placa: z.string()
  .min(6, {message:'La placa debe tener minimo 6 caracteres'})
  .max(7, {message:'La placa debe tener maximo 7 caracteres'})
  .regex(placaregex, {message:'La placa debe contener al menos un numero y una letra, sin espacios'}),
  condiciones: z.boolean()
  .refine(condiciones => condiciones === true, {message: 'Debe aceptar las politicas y condiciones para continuar'})
})

// datos desde el local storage

export function getLocalStorage(key: string){
  let data

  if (typeof window !== "undefined" && window.localStorage) {
   data = window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key) || '') : initialData
  }

  return {    
  loading: data?.loading || false,
  error: data?.error || '',
  data: {
    id: data?.data.id || '',
    nombre: data?.data.nombre || '',
    correo: data?.data.correo || '',
    vehiculo:{
        marca: data?.data.vehiculo.marca || '',
        modelo: data?.data.vehiculo.modelo || '',
        ano: data?.data.vehiculo.ano || '',
    },
    adicionales: data?.data.adicionales || [
      {
        name: 'Llanta robada',
        status: false,
        value: 15
      },
      {
        name: 'Choque y/o pasarte la luz roja',
        status: false,
        value: 20
      },
      {
        name: 'Atropello en la vía Evitamiento',
        status: false,
        value: 50
      },
      {
        name: 'Opcion 1',
        status: false,
        value: 0
      },
      {
        name: 'Opcion 2',
        status: false,
        value: 0
      },
      {
        name: 'Opcion 3',
        status: false,
        value: 0
      },
      {
        name: 'Mejora 1',
        status: false,
        value: 0
      },
      {
        name: 'Mejora 2',
        status: false,
        value: 0
      },
      {
        name: 'Mejora 3',
        status: false,
        value: 0
      }
    ],
    sumaAsegurada: data?.data.sumaAsegurada || 14500,
    mensual: data?.data.mensual || 20
    } 
  } as getDataClient
}

export function setLocalStorage(key: string, value: getDataClient){
  const data = JSON.stringify(value)
  window.localStorage.setItem(key, data)
}
