import { navBarCopy } from "@/app/copy/NavBar";
import Image from "next/image";
import Link from "next/link";
export function Sections() {
    return (
        <>
            <header className="container">
                <div className="row">
                    <div className="col-12 text-center text-white mt-5 pt-5">
                        <h1 style={{ fontSize: "96px" }}>Your 
                            <span className="animated-text">
                            </span></h1>
                        <p className="text-16">
                            The Ultimate Crypto Phone with Built-In Multi-Chain Vault.<br />Start Protecting Your Assets and Earning Rewards Today.
                        </p>
                        <Link className="btn px-lg-4  btn-light mx-auto  my-5   btn-color d-flex align-items-center justify-content-center rounded-pill"
                            style={{ height: "48px", width: "193px" }} href={navBarCopy.download.url} target={navBarCopy.download.target}>
                            {navBarCopy.download.name}
                        </Link>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="row" id="brilliant">
                    <div className="col-lg-12 d-flex justify-content-center align-items-center ps-5" id="bg-sec-one">
                        <div className="w-50-custom float-end ps-4">
                            <h2 style={{fontSize:"40px"}} className="text-green">Big, Bold, and Brilliant</h2>
                            <p className="text-white text-20">
                            Experience the world on a stunning 6.745" HD+ IPS <br /> Display that delivers sharp, vibrant visuals. Whether <br /> it's work or play, the Vultiphone ensures everything looks better.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row" id="advanced-sec">
                    <div className="col-lg-12 d-flex justify-content-center align-items-center ps-5" id="bg-sec-two">
                        <div className="w-100-custom float-start">
                            <h2 style={{fontSize:"40px"}} className="text-green">Advanced Security <br /> Features</h2>
                            <p className="text-white text-20">
                            Stay secure with the Fingerprint Sensor and <br /> advanced sensor technology, including G-sensor, P-sensor,<br/> and L-sensor for enhanced functionality and protection.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row" id="capture">
                    <div className="col-lg-12 d-flex justify-content-center align-items-center ps-5" id="bg-sec-three">
                        <div className="w-50-custom float-end ms-custom">
                            <h2 style={{fontSize:"40px"}} className="text-green">Capture Life <br/>
                            in Detail</h2>
                            <p className="text-white text-20">
                            Capture every detail with the 50MP + 2MP Macro <br/> dual rear cameras, delivering sharp, vibrant images <br/> from expansive landscapes to intricate close-ups.<br/> The 8MP front camera ensures clear, high-quality <br/> shots every time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row" id="app-sec">
                    <div className="col-lg-12 d-flex justify-content-center align-items-center ps-5" id="bg-sec-four">
                        <div className="w-100-custom float-start">
                            <h2 style={{fontSize:"40px"}} className="text-white">Comes with the Vultisig App</h2>
                            <p className="text-white text-20 mt-4">
                            VultiPhone is designed with crypto security in <br/> mind, pre-installed with Vultisig—a self-custodial <br/> multi-chain crypto vault. <br/>
                            Protect your digital assets with unmatched ease <br/> and start earning crypto rewards from day one.
                            </p>
                            <Link className="btn px-lg-4  btn-light   my-5   btn-color d-flex align-items-center justify-content-center rounded-pill"
                            style={{ height: "48px", width: "193px" }} href={navBarCopy.download.url} target={navBarCopy.download.target}>
                            {navBarCopy.download.name}
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}