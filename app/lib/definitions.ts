export interface dataAccordion {
    src: string
    title: string
    description: string
}

export interface dataLink {
    name: string
    href: string
}

export interface dataInput {
    nrodoc: string
    celular: string
    placa: string
    condiciones: boolean
}

export interface getDataClient {
    loading: boolean
    error: string
    data: dataClient
}

export interface adicional {
    name: string
    status: boolean
    value: number
} 

export interface dataClient {
    id: string
    nombre: string
    correo: string
    vehiculo:{
        marca: string
        modelo: string
        ano: string
    }
    adicionales: adicional[]
    sumaAsegurada: number
    mensual: number
}

export const initialData = 
  {    
    loading: false,
    error: null || '',
    data: {
      id: null || '',
      nombre: null || '',
      correo: null || '',
      vehiculo:{
          marca: null || '',
          modelo: null || '',
          ano: null || '',
      },
      adicionales: [
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
      sumaAsegurada: 14500,
      mensual: 20
    }                                  
  } as getDataClient

  