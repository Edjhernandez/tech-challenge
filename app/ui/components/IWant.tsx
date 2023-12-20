'use client'
import { lato, roboto } from "../fonts"
import Image from "next/image"
import { useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"
import { useRouter } from 'next/navigation';

const IWant = () => {

    const dataclient = useAppSelector((state: RootState) => state.dataClient.data)
    const router = useRouter()
 
    const handleIWant = () => {
        router.push('/thanks')
    }

    return(
        <div className={`${lato.className} px-8 py-4 text-[#494F66] not-italic font-normal flex justify-between items-center shadow-2xl w-full sm:px-[15%] lg:flex-col lg:shadow-none lg:p-0 lg:mt-[45px] lg:ml-24 lg:items-start lg:max-w-[224px] lg:mr-[16px]`}>
            <div className="lg:pb-[19px] lg:border-b lg:border-[#D7DBF5] w-full">
                <p className="hidden lg:block text-xs font-bold leading-4 tracking-[0.6px] mb-[10px] ">MONTO</p>
                <h2 className=" text-[24px] leading-8 tracking-[-0.2px] lg:text-xl lg:leading-9">${dataclient.mensual}.00</h2>
                <p className=" text-[10px] font-bold leading-4 tracking-[0.8px] lg:hidden">MENSUAL</p>
                <p className={`hidden lg:block text-[#676F8F] ${roboto.className} text-xs leading-5 tracking-[0.2px] mt-1`}>mensuales</p>
            </div>

            <div  className="hidden lg:flex lg:flex-col not-italic font-normal leading-6">
                <h4 className={`${lato.className} text-[#494F66] tracking-[0.2px] mt-6`}>El precio incluye:</h4>
                <ul className={`${roboto.className} text-[#676F8F] text-sm`}>
                    <li className="flex mt-3">
                        <Image 
                            src='/images/gl_check.svg'
                            width={16}
                            height={16}
                            alt='check icon'
                        />
                        <p className="ml-4">Llanta de repuesto</p>
                    </li>
                    <li className="flex mt-2">
                        <Image 
                            src='/images/gl_check.svg'
                            width={16}
                            height={16}
                            alt='check icon'
                        />
                        <p className="ml-4">Analisis de motor</p>
                    </li>
                    <li className="flex mt-2">
                        <Image 
                            src='/images/gl_check.svg'
                            width={16}
                            height={16}
                            alt='check icon'
                        />
                        <p className="ml-4">Aros gratis</p>
                    </li>
                </ul>
            </div>

            <button 
                className="bg-green-600 text-white w-[168px] h-[44px] rounded-lg text-sm font-bold leading-4 tracking-[0.4px] lg:mt-8 lg:w-[224px] lg:h-[48px] lg:uppercase"
                onClick={handleIWant}
            >comprar
            </button>
        </div>
    )
}

export default IWant
