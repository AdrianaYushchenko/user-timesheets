import React, { ReactNode, useState } from 'react'

interface DataContextType {
    show: boolean,
    userId: string,
    handleShow: (userId: string) => void,
    handleClose: () => void
}

export const DataContext = React.createContext<DataContextType>({
    show: false,
    userId: '',
    handleShow: () => void 0,
    handleClose: () => void 0
})


export const DataContextProvider = ({ children }: {children: ReactNode}) => {
    const [show, setShow] = useState(false);
    const [userId, setUserId] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = (userId: string) => {
        setUserId(userId)
        setShow(true)
    };

    return (
        <DataContext.Provider value={{show, userId, handleClose, handleShow}}>
            {children}
        </DataContext.Provider>
)}
