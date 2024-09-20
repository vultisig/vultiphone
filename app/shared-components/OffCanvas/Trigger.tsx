import React, { useContext } from 'react'
import { AppContext } from './Context'
import { TriggerProps } from './Props'
export function Trigger({
    component = 'button',
    className = 'offcanvas-trigger',
    styles = {},
    children
}: TriggerProps) {
    const { handleOpen, randomId } = useContext(AppContext)

    return (
        <button id="navbar-toggle-btn" className="navbar-toggler" type="button" onClick={handleOpen}>
            <span className="navbar-toggler-icon"></span>
        </button>
    )
}