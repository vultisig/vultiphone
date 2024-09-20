"use client"
import React, { useCallback, useContext, useEffect, useState } from 'react'
import scss from './OffCanvas.module.scss'
import { AppContext } from './Context'
import { OffcanvasProps } from './Props'
import { navBarCopy } from "../../copy/NavBar"
import Link from 'next/link'
import { usePathname } from 'next/navigation'



export function Offcanvas({
   
    position = 'right',
    backdrop = true,
    allowClickAway = true,
    allowEsc = true,
    allowScroll = true,
    className = 'simple-offcanvas',
    styles = {},
    children
}: OffcanvasProps) {
    const { handleClose, isOpen, randomId } = useContext(AppContext)
    const router = usePathname();
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        if (router) {
            setCurrentPath(router);
        }
    }, [router]);
    const onClickOutside = useCallback(() => {
        if (!allowClickAway) return

        if (isOpen) {
            if (handleClose) handleClose()
        }
    }, [allowClickAway, isOpen, handleClose])

    const onEscKey = useCallback(
        (event: KeyboardEvent) => {
            if (!allowEsc) return

            if (event.key === 'Escape') {
                if (isOpen) {
                    if (handleClose) handleClose()
                }
            }
        },
        [allowEsc, isOpen, handleClose]
    )

    useEffect(() => {
        document.addEventListener('keydown', onEscKey, false)
        return () => document.removeEventListener('keydown', onEscKey)
    }, [onEscKey])



    useEffect(() => {
        if (!allowScroll) {
            if (isOpen) document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen, allowScroll])

    return (
        <>
            <div
                id={`offcanvas_${randomId}`}
                className={`${scss.offcanvas} ${scss[position]} ${isOpen ? scss.show : ''
                    } ${className}  text-bg-dark`}
                tabIndex={-1}
                style={styles}
                role="dialog"
                aria-labelledby={scss.title}
                aria-modal="true"
                onClick={(event) => event.stopPropagation()}
                aria-hidden="true"
            >
                <div className={scss.header}>
                    <h5 className={scss.title}>MENU</h5>
                    <button
                        className={scss.close}
                        onClick={handleClose}
                        type="button"
                        tabIndex={0}
                        aria-label="Close"
                    />
                </div>
                <div className={scss.body}>
                    <ul className="navbar-nav align-items-center">
                        {navBarCopy.navbarLinks.map((link, index) => (
                            <li key={index} className="nav-item my-sm-2 mx-3">
                                <Link className={`nav-link ${currentPath === link.url ? 'gradient-text' : ''}`}
                                    href={link.url} target={link.target} >{link.name}</Link>
                            </li>
                        ))
                        }
                        <a className="btn px-lg-4 ms-lg-5  btn-primary my-2 mx-lg-2 my-sm-0 btn-color d-flex align-items-center justify-content-center rounded"
                            style={{ height: "48px", width: "193px" }} href={navBarCopy.download.url} target={navBarCopy.download.target}>
                            {navBarCopy.download.name}
                        </a>
                    </ul>
                </div>
            </div>
            {backdrop && (
                <div onClick={handleClose} className={`${scss.backdrop} ${isOpen ? scss.show : ''}`} />
            )}
        </>
    )
}