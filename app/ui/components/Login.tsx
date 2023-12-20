'use client';
import './stylescomponents.css'
import { lato } from "../fonts"
import { roboto } from '../fonts'
import Link from 'next/link'
import { dataInput } from '@/app/lib/definitions';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { inputSchema } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setDataLogin } from '../../../redux/features/dataLoginSlice';
import { fetchData } from '@/redux/features/dataClientSlice';
import { RootState } from '@/redux/store';
import { useEffect } from 'react';
import Alert from './Alert';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<dataInput>({
        defaultValues:{
            nrodoc: '',
            celular: '',
            placa: '',
            condiciones: false
        },
        resolver: zodResolver(inputSchema)
    })

    const dispatch = useAppDispatch()
    const router = useRouter()
    const errorFetch = useAppSelector((state: RootState) => state.dataClient.error)
        
    const onSubmit: SubmitHandler<dataInput> = (data: dataInput) => {
        dispatch(setDataLogin(data))
        dispatch(fetchData(data.placa)) 
    }
    
    useEffect(() => {
        if(errorFetch === 'ok') router.push('/yourplan')
    }, [errorFetch])

    return(
        <main className={`${lato.className} antiliased text-[#494F66] font-feature font-normal flex flex-col mt-10 mx-8 mb-14 items-star min-[480px]:items-center lg:w-3/5 lg:items-start lg:mt-[140px]`}>
            
            {errorFetch !== '' && errorFetch !== 'ok' && <Alert />}
            
            <h2 className="text-2xl leading-8 tracking-dejanos pb-6 lg:mt-14 lg:text-xl/[36px] lg:tracking-[0.2px] lg:ml-[30%]">Déjanos tus datos</h2>
            <form className='max-w-md lg:ml-[30%] lg:max-w-xs' onSubmit={handleSubmit(onSubmit)}>
                <div className="flex pl-5 border border-[#C5CBE0] rounded-md">
                    <select className="h-14 focus:outline-none">
                        <option>DNI</option>
                    </select>
                    <div className="border-e-2 h-14 w-4"></div>
                    <input
                        type="text"
                        id='nrodoc'
                        placeholder="Nro. de doc"
                        className="w-full pl-5 rounded-md focus:outline-none"
                        {...register('nrodoc')}
                    />
                </div>
                <div className={`h-5 w-full flex justify-center items-center ${roboto.className} text-[10px] text-[#FF1C44] font-bold `}>
                    {errors.nrodoc?.message && <p>{errors.nrodoc?.message}</p>}
                </div>
                <input
                    type="text"
                    id='celular'
                    placeholder="Celular"
                    className={`placeholder:${lato.className} flex px-5 border border-[#C5CBE0] rounded-md w-full h-14 focus:outline-none`}
                    {...register('celular')}
                />
                <div className={`h-5 w-full flex justify-center items-center ${roboto.className} text-[10px] text-[#FF1C44] font-bold `}>
                    {errors.celular?.message && <p>{errors.celular?.message}</p>}
                </div>
                <input 
                    type="text"
                    id='placa'
                    placeholder="Placa"
                    className={`${lato.className} flex px-5 border border-[#C5CBE0] rounded-md w-full h-14 focus:outline-none`}
                    {...register('placa')}
                />
                <div className={`h-5 w-full flex justify-center items-center ${roboto.className} text-[10px] text-[#FF1C44] font-bold `}>
                    {errors.placa?.message && <p>{errors.placa?.message}</p>}
                </div>
                <div className={`flex ${roboto.className} text-[#676F8F] text-xs font-light leading-5 tracking-politicas mb-1 mt-1`}>
                    <input 
                        type="checkbox" 
                        className='mr-3 w-8  accent-[#389E0D] cursor-pointer max-w-[20px]'
                        {...register('condiciones')}
                    />
                    <p>
                    Acepto la <Link href={'#'} className='underline decoration-1 font-extrabold'>Política de Protecciòn de Datos Personales</Link> y los <Link href={'#'} className='underline decoration-1 font-extrabold'>Términos y Condiciones</Link>.
                    </p>
                </div>
                <div className={`h-5 w-full flex justify-center items-center ${roboto.className} text-[10px] text-[#FF1C44] font-bold `}>
                    {errors.condiciones?.message && <p>{errors.condiciones?.message}</p>}
                </div>
                <button
                    className="rounded-md w-full h-14 bg-green-600 uppercase text-[#ffffff] text-sm font-bold leading-4 tracking-wider cursor-pointer mt-4"
                    type='submit'
                >
                    Cotizar
                </button>
            </form>
        </main>
    )
}

export default Login