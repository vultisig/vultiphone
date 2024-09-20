"use client"
import Image from "next/image";
import { navBarCopy } from "../copy/NavBar";
import { OffcanvasProvider } from "../shared-components/OffCanvas/Context";
import { Trigger } from "../shared-components/OffCanvas/Trigger";
import { Offcanvas } from "../shared-components/OffCanvas/OffCanvas";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function NavBar() {
    const router = usePathname();
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        if (router) {
            setCurrentPath(router);
        }
    }, [router]);
    const [show, setShow] = useState(false);
    const handleOpen = () => console.log("");
    // Callback function that is triggered when the Offcanvas is closed
    const handleClose = () => console.log("");
    return (
        <>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark  px-lg-4 px-1 my-5 border-custom rounded-pill bg-navbar">
                <OffcanvasProvider onOpen={handleOpen} onClose={handleClose}>
                    <Trigger />
                    <Offcanvas />   
                </OffcanvasProvider>
                <Link className="navbar-brand mx-auto d-flex align-items-center" href="/">
                    <Image src="./img/logo.svg" width={30} height={30} className="d-inline-block align-top"
                        data-attribute="alt"
                        data-query="navbar.alts.logo" alt="Vultisig Logo" />
                    <strong style={{ fontSize: "x-large" }} className="monserrat-semibold">Vultisig</strong>
                </Link>
                <div id="navbarToggleMain" className="collapse navbar-collapse justify-content-end monserrat-medium">
                    <ul className="navbar-nav align-items-center mx-auto">
                        {navBarCopy.navbarLinks.map((link, index) => (
                            <li key={index} className="nav-item my-sm-2 mx-3">
                                <Link className={`nav-link ${currentPath === link.url ? 'gradient-text' : ''}`}
                                    href={link.url} target={link.target} >{link.name}</Link>
                            </li>
                        ))
                        }
                      
                    </ul>
                    <Link className="btn px-lg-4 ms-lg-5 btn-light  my-2 mx-lg-2 my-sm-0 btn-color d-flex align-items-center justify-content-center rounded-pill"
                            style={{ height: "48px", width: "193px" }} href={navBarCopy.download.url} target={navBarCopy.download.target}>
                            {navBarCopy.download.name}
                        </Link>
                </div>
            </nav >
        </div>
           
        </>
    )
}