'use client';
import { useState, useEffect } from 'react'
import { setAditional } from '@/redux/features/dataClientSlice';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { adicional } from '@/app/lib/definitions';

type SwitchProps = {
    aditionalTitle: string
}

const Switch = (props: SwitchProps) => {
    
    const adicionales: adicional[] = useAppSelector((state: RootState) => state.dataClient.data.adicionales)
    const dataClient = useAppSelector((state: RootState) => state.dataClient.data)
    const { aditionalTitle } = props

    const disabler: boolean = aditionalTitle === 'Choque y/o pasarte la luz roja' && dataClient.sumaAsegurada > 16000 ? false : true
    const dispatch = useAppDispatch()
    const [turnSwitch, setTurnSwitch] = useState<boolean>(false)

    const handleClick = (title: string) => {
        if(disabler){
            setTurnSwitch(!turnSwitch)
            dispatch(setAditional(title))
        }
    }

    useEffect(()=>{
        const currentCoverage = adicionales.find(adicional => adicional.name === aditionalTitle)
        setTurnSwitch(currentCoverage?.status || false)
    },[])

    useEffect(() => {
        if(dataClient.sumaAsegurada > 16000 && aditionalTitle === adicionales[1].name) setTurnSwitch(false)
        if(dataClient.sumaAsegurada <= 16000 && aditionalTitle === adicionales[1].name && adicionales[1].status) setTurnSwitch(true)         
    },[dataClient.sumaAsegurada])


    return(
        <div className={`w-[51px] h-[32px]  rounded-full flex items-center p-[1px] ${turnSwitch? 'bg-[#7CC954] justify-end': 'bg-[#E3E9F7]'}`}
        >
            <div 
                className="w-[30px] h-[30px] bg-white rounded-full cursor-pointer"
                onClick={() => handleClick(aditionalTitle)}
            >
            </div>
        </div>
    )
}

export default Switch