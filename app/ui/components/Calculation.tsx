'use client'
import Image from "next/image"
import { lato, roboto } from "../fonts"
import IWant from "./IWant"
import { useAppSelector, useAppDispatch } from "../../../redux/hooks"
import { RootState } from "../../../redux/store"
import { setPlus, setLess, setInitial, setLS } from "@/redux/features/dataClientSlice"
import { useRouter } from 'next/navigation';
import { useEffect } from "react"
import { getDataClient } from "@/app/lib/definitions"

const Calculation = () => {
//https://deeditor.com/
    const router = useRouter()
    
    const dispatch = useAppDispatch()

    const dataclient = useAppSelector((state: RootState) => state.dataClient.data)
  
    const handleBack = () => {
        dispatch(setInitial())
        router.push('/')
    }

    useEffect(() => {
        if(localStorage.getItem('dataClient')) {
            const stateLS: getDataClient = JSON.parse(localStorage.getItem('dataClient') || '')
            dispatch(setLS(stateLS))
        }
    },[])
  
    return( 

        <main className={`${lato.className} antialiased text-[rgb(73,79,102)] not-italic font-normal leading-9 tracking-[-0.6px] w-full lg:mt-14 lg:pl-24`}>
            
            {/* desktop only */}
            <div className="hidden pt-12 lg:flex lg:flex-col justify-start ">
                <div 
                    className="lg:flex lg:items-center" 
                    >
                    <Image 
                        src='/images/icon_Back.svg'
                        width={24}
                        height={24}
                        alt="icon back"
                        className="cursor-pointer"
                        onClick={handleBack}
                    />
                    <p 
                        className="text-[#A9AFD9] text-xs leading-4 tracking-[0.6px] ml-4 cursor-pointer"
                        onClick={handleBack}
                    >
                        VOLVER
                    </p>
                </div>
                <div className={`${lato.className} text-[#494F66] text-[40px] not-italic leading-[48px] font-normal tracking-[-0.6px] flex justify-start mt-6`}>
                    <h3>¡Hola,&nbsp;</h3>
                    <h3 className="text-green-600">{dataclient?.nombre}!</h3>
                </div>
            </div>

            <section className="w-full">

                <div className="lg:flex">
                <div>

                <div className="bg-[#FAFBFF] pl-8 pt-10 pb-14 sm:flex sm:flex-col sm:items-center sm:pl-0 lg:bg-white lg:pt-0 lg:items-start lg:pb-0">
                    <h1 className="text-xl lg:hidden">Mira las coberturas</h1>
                    <h2 className={`${roboto.className} text-[#676F8F] text-base leading-7 mt-2 mb-4 lg:mb-11`}>Conoce las coberturas de tu plan</h2>
                    <div className="bg-white mr-8 shadow-div-juan rounded-2xl flex justify-between items-center max-w-lg sm:mr-0 sm:min-w-[500px] lg:shadow-none lg:border-[3px] lg:border-[#EDEFFC] lg:min-w-[400px]">
                        <div className="ml-6 w-[35%] ">
                            <h4 className={`${roboto.className} text-xs leading-5 tracking-[0.2px] text-[#A9AFD9]`}>Placa: {dataclient?.id}</h4>
                            <h3 className="text-base  leading-6 tracking-[0.2px]">{dataclient?.vehiculo.marca} {dataclient?.vehiculo.ano} {dataclient?.vehiculo.modelo}</h3>
                        </div>
                        <Image
                            src='/images/Juan.svg'
                            width={80}
                            height={156}
                            alt='Juan image'
                            className="-mt-2 sm:mr-[9%]"
                        />
                    </div>
                </div>
            
                <div className={`${lato.className} mt-11 text-base pl-8 sm:flex sm:flex-col sm:items-center sm:pl-0 lg:mt-[61px] lg:flex-row lg:justify-between lg:items-center lg:pb-[43px] lg:border-b lg:border-[#D7DBF5] lg:max-w-[400px]`} >
                    <div>
                        <h6 className="text-[#494F66] leading-6 tracking-[0.2px]">Indica la suma asegurada</h6>
                        <h6 className="text-[#676F8F] text-xs leading-4 tracking-[0.6px] mt-1 mb-4 lg:mb-0">MIN $12.500  |  MAX $16.500</h6>
                    </div>
                    <div className="border border-[#C5CBE0] rounded-[4px] mr-8 p-4 mb-9 flex justify-between max-w-lg sm:mr-0 sm:min-w-[500px] lg:min-w-[160px] lg:mb-0">
                        <button>
                            <Image
                                src='/images/gl_remove.svg'
                                width={16}
                                height={16}
                                alt="less"
                                onClick={() => dispatch(setLess())}
                            />
                        </button>
                        <h5 className=" text-base leading-6 tracking-[0.2px] text-[#494f66]">$ {dataclient?.sumaAsegurada.toLocaleString('es-US')}</h5>
                        <button>
                            <Image
                                src='/images/gl_add.svg'
                                width={16}
                                height={16}
                                alt="add"
                                onClick={() => dispatch(setPlus())}
                            />
                        </button>
                    </div>
                </div>

                </div>

                {/* only for desktop */}
                <div className="hidden lg:block">
                    <IWant />
                </div>

                </div>
        
            </section>
        
        </main>
    )
}

export default Calculation