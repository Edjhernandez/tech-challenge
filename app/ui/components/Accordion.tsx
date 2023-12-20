"use client";
import Image from "next/image"
import { dataAccordion } from "@/app/lib/definitions"
import { useEffect, useState } from 'react'
import { lato, roboto } from "../fonts";
import Switch from "./Switch";
import clsx from "clsx";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { setAditional } from "@/redux/features/dataClientSlice";
import { adicional } from "@/app/lib/definitions";

const Accordion = (props: dataAccordion) => {
  
    const dispatch = useAppDispatch()
    const adicionales: adicional[] = useAppSelector((state: RootState) => state.dataClient.data.adicionales)
    const dataClient = useAppSelector((state: RootState) => state.dataClient.data)
    const [ Show, setShow ] = useState<boolean>(false)
    const [ addCoverage, setAddCoverage ] = useState<boolean>(false)
    const disabler: boolean = props.title === 'Choque y/o pasarte la luz roja' && dataClient.sumaAsegurada > 16000 ? false : true
    
    const handleClick = () => {
        setShow(!Show)
    }

    const handleAddCoverage = (adicional: string) => {
        if(disabler){
        setAddCoverage(!addCoverage)
        dispatch(setAditional(adicional))
        }
    }

    useEffect(()=>{
        const currentCoverage = adicionales.find(adicional => adicional.name === props.title)
        setAddCoverage(currentCoverage?.status || false)
    },[])

    useEffect(() => {
        if(dataClient.sumaAsegurada > 16000 && props.title === adicionales[1].name) setAddCoverage(false)
        if(dataClient.sumaAsegurada <= 16000 && props.title === adicionales[1].name && adicionales[1].status) setAddCoverage(true)         
    },[dataClient.sumaAsegurada])

    return(
        <div className={`${lato.className} not-italic font-normal leading-6 tracking-[0.2px] w-full`}>
            <div className="flex justify-between px-8 pt-8 w-full items-start lg:px-0">
                <div className="flex w-2/3 mb-3 items-start">
                    <Image
                        src={props.src}
                        width={40}
                        height={40}
                        alt='option image'
                    />
                    <div className="flex flex-col">
                        <h4 className='text-[#494F66] text-base ml-4'>{props.title}</h4>
                        {!addCoverage && <div className="hidden justify-start items-center lg:flex ml-4 mt-3">
                            <Image
                                src='/images/gl_add_desktop.svg'
                                width={24}
                                height={24}
                                alt='add icon'
                                className="cursor-pointer"
                                onClick={() => handleAddCoverage(props.title)}
                            />
                            <p className={clsx(
                                "text-xs font-bold leading-4 tracking-[0.6px] ml-3",
                                {
                                    'text-[#A9AFD9]': props.title === 'Choque y/o pasarte la luz roja' && dataClient.sumaAsegurada > 16000,
                                    'text-[#6F7DFF]': props.title !== 'Choque y/o pasarte la luz roja' || (props.title === 'Choque y/o pasarte la luz roja' && dataClient.sumaAsegurada <= 16000) 
                                }
                                )}
                                >AGREGAR</p>
                        </div>}
                        {addCoverage && <div className="hidden justify-start items-center lg:flex ml-4 mt-3">
                            <Image
                                src='/images/gl_remove_desktop.svg'
                                width={24}
                                height={24}
                                alt='remove icon'
                                className="cursor-pointer"
                                onClick={() => {handleAddCoverage(props.title)}}
                            />
                            <p className="text-[#6F7DFF] text-xs font-bold leading-4 tracking-[0.6px] ml-3">QUITAR</p>
                        </div>}
                    </div>
                </div>
                <div className="block lg:hidden">
                <Switch 
                  aditionalTitle={props.title}
                />
                </div>
                <Image 
                    src='/images/gl_arrow_down_red.svg'
                    width={20}
                    height={20}
                    alt="arrow desktop"
                    className={clsx(
                        "hidden lg:block lg:cursor-pointer ",
                        {
                            'rotate-180 ': Show
                        }
                    )}
                    onClick={handleClick}
                />
            </div>
            <div className="">
                {!Show && 
                <div className="flex justify-start items-start ml-[88px] lg:hidden">
                    <p className="text-[#6F7DFF] text-[10px] font-bold leading-4 tracking-[0.8px]">VER MÁS</p>
                    <Image
                        src='/images/gl_arrow_down.svg'
                        width={16}
                        height={16}
                        alt='arrow down'
                        onClick={handleClick}
                        className="cursor-pointer ml-2"
                    />
                </div>}
                <div className={`${roboto.className} text-[#676F8F] text-sm ml-[88px]  mr-8 text-left mb-4`}>
                    {Show && props.description}
                </div>
                {Show && 
                <div className="flex justify-start items-start ml-[88px] mb-8 lg:hidden">
                    <p className="text-[#A9AFD9] text-[10px] font-bold leading-4 tracking-[0.8px]">VER MENOS</p>
                    <Image
                        src='/images/gl_arrow_up.svg'
                        width={16}
                        height={16}
                        alt='arrow down'
                        onClick={handleClick}
                        className="cursor-pointer ml-2 rotate-180"
                    />
                </div>}
            </div>
            <div className="border-b border-[#D7DBF5] w-4/5 lg:w-full mx-auto"></div>
        </div>
    )
}

export default Accordion