import React, { createContext, useReducer, useState } from 'react'
import { ProviderProps } from './Props'

type State = {
    isOpen: boolean
}

type Action = { type: 'open' } | { type: 'close' }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'open':
            return {
                isOpen: true
            }
        case 'close':
            return {
                isOpen: false
            }
        default:
            return state
    }
}
// Generate a simple unique string
const generateRandomId = () => {
    if (typeof window !== 'undefined') {
        return window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36);
    }
    return '';
}

interface ContextProps {
    isOpen?: boolean
    handleOpen?: () => void
    handleClose?: () => void
    randomId: string
}

export const AppContext = createContext<ContextProps>({
    isOpen: false,
    randomId: ''
});

export function OffcanvasProvider({
    children,
    onOpen,
    onClose
}: ProviderProps) {
    const [{ isOpen }, dispatch] = useReducer(reducer, {
        isOpen: false
    })

    const handleOpen = () => {
        dispatch({ type: 'open' })
        if (onOpen) onOpen()
    }
    const handleClose = () => {
        dispatch({ type: 'close' })
        if (onClose) onClose()
    }
    const [randomId, setRandomId] = useState('');
    return (
        <AppContext.Provider value={{ isOpen, handleOpen, handleClose, randomId }}>
            <div className="simple-offcanvas-component">{children}</div>
        </AppContext.Provider>
    )
}