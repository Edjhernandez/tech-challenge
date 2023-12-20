import { NextApiRequest, NextApiResponse } from "next";

const salida = {
    placa: 'eee123',
    nombre: 'pepito',
    apellido: 'perez',
    correo: 'eee@coreo.com',
    marca: 'culo',
    modelo: 'nolose',
    ano: '2000'
}

const getDataCustomer = (req: NextApiRequest, res: NextApiResponse) => {

    console.log(salida)
    return res.status(200).json(salida)
}

export default getDataCustomer