'use client'
import { useEffect } from "react"
import { useAppDispatch } from "../../../redux/hooks"
import { getLocalStorage} from '../../lib/actions'
import { setLS } from "../../../redux/features/dataClientSlice"

const Initiator = ({children}: {children: React.ReactNode}) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setLS(getLocalStorage('dataClient')))
    },[])



    return children
}

export default Initiator