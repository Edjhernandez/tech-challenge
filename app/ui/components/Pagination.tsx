'use client'
import Image from "next/image"
import { lato } from "../fonts"
import { useAppDispatch } from "@/redux/hooks"
import { setInitial } from "@/redux/features/dataClientSlice"
import { useRouter } from 'next/navigation';

const Pagination = () => {

  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleBack = () => {
    dispatch(setInitial())
    router.push('/')
  }

  return(
      <>
        {/* mobile and tablets until 1024px */}
        <div className="mt-14 flex justify-center items-center h-12 w-full border-b border-[#EDEFFC] lg:hidden">
          <Image
            src='/images/Left_Default.png'
            alt='back icon'
            width={24}
            height={24}
            onClick={handleBack}
          />
          <p className={`text-[#676F8F] ${lato.className} antialiased text-[10px] font-bold not-italic leading-4 tracking-[0.8px] ml-3 mr-4`}>PASO 2 DE 2</p>
          <div className="w-[176px] h-[6px] bg-[#6464FA] rounded-full"></div>
        </div>

        {/* desktop since 1024px */}
        <div className={`hidden ${lato.className}  lg:flex lg:flex-col lg:w-1/3 lg:bg-[#FAFBFF] lg:mt-14 pl-[5%] xl:pl-[8%]`}>
          
          <div className="flex mt-[56px] text-[#C5CBE0] ">
            <div className="flex justify-center items-center w-6 h-6  border border-[#C5CBE0] rounded-full">
              <p className={`text-xs font-bold not-italic leading-4 tracking-[0.6px]`}>1</p>
            </div>
            <p className="ml-4 text-base">Datos</p>
          </div>

          <div className="ml-[12px]">
            <Image 
              src='/images/Progress.svg'
              alt='line progress'
              width={1}
              height={40}
            />
          </div>

          <div className="flex text-base">
            <div className="flex justify-center items-center w-6 h-6  bg-[#6F7DFF]  rounded-full">
              <p className={`text-white  text-xs font-bold not-italic leading-4 tracking-[0.6px]`}>2</p>
            </div>
            <p className="ml-4 text-[#494F66] text-base">Arma tu plan</p>
          </div>

        </div>
      </>
    )
}

export default Pagination