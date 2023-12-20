'use client'
import { Provider } from "react-redux"
import { setupStore } from "./store"

const MyProvider = ({children}: {children: React.ReactNode}) => {

    const store = setupStore()

    return(
        <Provider store={store}>
            {children}
        </Provider>

    )
}

export default MyProvider