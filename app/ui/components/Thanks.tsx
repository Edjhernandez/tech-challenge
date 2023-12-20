'use client'
import Image from "next/image"
import { lato, roboto } from "../fonts"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { RootState } from "@/redux/store"
import { getDataClient } from "@/app/lib/definitions"
import { useEffect } from "react"
import { setLS } from "@/redux/features/dataClientSlice"

const Thanks = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        if(localStorage.getItem('dataClient')) {
            const stateLS: getDataClient = JSON.parse(localStorage.getItem('dataClient') || '')
            dispatch(setLS(stateLS))
        }
    },[])

    const dataClient = useAppSelector((state: RootState) => state.dataClient.data)

    return(
        <main className={`w-full mt-14 flex flex-col justify-start items-center ${lato.className} not-italic font-normal lg:flex-row lg:items-start`}>
           
            <div className="w-full lg:hidden">
                <Image 
                    src='/images/Illustration.svg' 
                    width={360}
                    height={208}
                    alt='thanks mobile ilustration'
                    className="w-full"
                />
            </div>

            <div className="hidden lg:flex bg-[#FAFBFF] w-1/3 h-screen flex-col justify-start items-end lg:pt-[12%]">
                <Image
                    src='/images/Illustration_desktop.svg'
                    width={520}
                    height={560}
                    alt="thanks desktop ilustration"
                    className="-mr-[22.5%]"
                />
            </div>
            
            <div className="w-4/5 flex flex-col justify-start items-start max-w-[300px] lg:max-w-[490px] lg:ml-[18%] lg:mt-[10%]">
                <h2 className="mt-12 ml-0 text-xl text-green-600 leading-9 tracking-[-0.6px] lg:text-4xl lg:leading-[48px] lg:tracking-[-0.2px]">¡Te damos la bienvenida!</h2>
                <h2 className="text-xl text-[#494F66] leading-9 tracking-[-0.6px] lg:text-4xl lg:leading-[48px] lg:tracking-[-0.2px]">Cuenta con nosotros&nbsp;<br className="lg:hidden"></br>para<br className="hidden lg:block"></br> proteger tu vehículo</h2>
                <p className={`mt-6 ${roboto.className} text-base font-light leading-7 text-[#676F8F]`}>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo: <br className="hidden lg:block"></br><b>{dataClient.correo}</b></p>
                <p className={`mt-6 ${roboto.className} text-xs font-light leading-7 text-[#676F8F]`}>Con una cuota mensual de ${dataClient.mensual}.00 y ${dataClient.sumaAsegurada.toLocaleString('es-US')}.00 de suma asegurada</p>
                <button className="w-[296px] h-[56px] bg-green-600 rounded-md text-sm text-[#ffffff] font-bold leading-4 tracking-[0.8px] uppercase mt-10 lg:cursor-pointer lg:w-[255px]">cómo usar mi seguro</button>
            </div>
                        
            <div className="w-full mt-[57px] border-t   border-[#D7DBF5] h-[75px] flex justify-center lg:hidden">   
                <div className="w-4/5 h-full flex justify-start items-center  max-w-[300px]">
                    <p className={`${lato.className} text-xs font-light leading-5 tracking-[0.2px] text-[#A9AFD9]`}>© 2023 CarInsurance.</p>
                </div>
            </div>
        
        </main>
    )
}

export default Thanks