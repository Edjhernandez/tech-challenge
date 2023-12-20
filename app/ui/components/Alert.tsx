import Image from "next/image"
import { lato } from "../fonts"
import { useAppDispatch } from "@/redux/hooks"
import { setInitial } from "@/redux/features/dataClientSlice"

const Alert = () => {

    const dispatch = useAppDispatch()

    return(
        <main className={`${lato.className} absolute w-4/5 h-1/5 z-10 bg-bgrimac1 mx-auto rounded-xl  top-0 left-0 right-0 bottom-0 m-auto border-2 border-[#FF1C44] lg:w-1/4 `}>
            
            <div className="w-full flex items-center justify-between mt-1">
                <h2 className="w-[90%] mx-auto ml-3 text-sm font-bold text-nuevo">Por favor ingrese sólo estas placas:</h2>
                <Image
                    src={'/images/cancel_icon.svg'} 
                    width={12}
                    height={12}
                    alt="cancel icon"
                    className="w-[10%] cursor-pointer mr-1"
                    onClick={() => dispatch(setInitial())}
                />
            </div>
            
            <div className="w-[90%] text-nuevo grid grid-rows-3 grid-cols-2 mx-auto font-extrabold mt-3 ">                
                <p className=" text-center border border-black rounded-sm  m-1 ">ABC123</p>
                <p className="text-center border border-black rounded-sm  m-1 ">DEF456</p>
                <p className="text-center border border-black rounded-sm  m-1 ">GHI789</p>
                <p className="text-center border border-black rounded-sm  m-1 ">JKL321</p>
                <p className="text-center border border-black rounded-sm  m-1 ">MNO654</p>
                <p className="text-center border border-black rounded-sm  m-1 ">PQR987</p>
            </div>
            
        </main>
    )
}

export default Alert