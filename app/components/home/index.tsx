import { navBarCopy } from "@/app/copy/NavBar";
import Image from "next/image";
import Link from "next/link";
export function Sections() {
  return (
    <>
      <header className="container">
        <div className="row">
          <div className="col-12 text-center text-white mt-5 pt-5">
            <h1 className="title-header">
              Your
              <span className="animated-text"></span>
            </h1>
            <p className="text-16">
              The Ultimate Crypto Phone with Built-In Multi-Chain Vault.
              <br />
              Start Protecting Your Assets and Earning Rewards Today.
            </p>
            <Link
              className="btn px-lg-4 btn-light mx-auto  my-5 btn-color d-flex align-items-center justify-content-center rounded-pill btn-pre-order"
              style={{ height: "48px", width: "193px" }}
              href={navBarCopy.pre_order.url}
              target={navBarCopy.pre_order.target}
            >
              {navBarCopy.pre_order.name}
            </Link>
          </div>
        </div>
      </header>

      <div className="container-fluid px-0">
        <img
          src="/img/left-shadow.png"
          className="shadow-left position-absolute start-0"
          style={{ marginTop: "600px" }}
        />
        <img
          src="/img/right-shadow.png"
          className="shadow-right position-absolute end-0"
          style={{ marginTop: "900px" }}
        />
        <div className="container">
          <div className="row" id="brilliant">
            <div className="col-12 d-block d-lg-none text-center">
              <img src="/img/phone-mob.png" />
            </div>
            <div
              className="col-lg-12 d-flex justify-content-end align-items-center px-3 px-lg-0"
              id="bg-sec-one"
            >
              <div className="w-60-custom float-end ps-lg-4">
                <h2 style={{ fontSize: "40px" }} className="text-green">
                  BIG, BOLD, AND <br />
                  BRILLIANT
                </h2>
                <p className="text-white text-20 pb-lg-5 mb-lg-5">
                  Experience the world on a stunning 6.745" HD+ IPS<br/> Display that
                  delivers sharp, vibrant visuals. Whether<br/> it's work or play,
                  the Vultiphone ensures everything<br/> looks better.
                </p>
              </div>
            </div>
          </div>

          <div className="row" id="advanced-sec">
            <div className="col-12 d-block d-lg-none text-center">
              <img src="/img/sec-mob.png" />
            </div>
            <div
              className="col-lg-11 mx-auto d-flex justify-content-center align-items-center ps-lg-5 px-3 px-lg-0"
              id="bg-sec-two"
            >
              <div
                className="w-90-custom float-start mt-5 mt-lg-0"
                style={{ marginBottom: "100px" }}
              >
                <h2 style={{ fontSize: "40px" }} className="text-green">
                  ADVANCED SECURITY<br></br> FEATURES
                </h2>
                <p className="text-white text-20 mb-5 pb-5 sec-four-paragraph">
                  Stay secure with the Fingerprint Sensor and <br /> advanced
                  sensor technology, including G-sensor, <br />
                  P-sensor, and L-sensor for enhanced functionality and<br></br>
                  protection.
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="capture">
            <div className="col-12 d-block d-lg-none text-center">
              <img src="/img/cap-mob.png" />
            </div>
            <div
              className="col-lg-12 d-flex justify-content-center align-items-start ps-lg-5 px-3 px-lg-0"
              id="bg-sec-three"
            >
              <div className="w-50-custom float-end ms-custom mt-5 mt-lg-0">
                <h2 style={{ fontSize: "40px" }} className="text-green">
                  CAPTURE LIFE <br />
                  IN DETAIL
                </h2>
                <p className="text-white text-20">
                  Capture every detail with the 50MP + 2MP Macro <br /> dual
                  rear cameras, delivering sharp, vibrant images <br /> from
                  expansive landscapes to intricate close-ups.
                  <br /> The 8MP front camera ensures clear, high-quality <br />
                  shots every time.
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="app-sec">
            <div className="col-12 d-block d-lg-none text-center">
              <img src="/img/phones-mob.png" className="w-100" />
            </div>
            <div
              className="col-lg-12 d-flex justify-content-start align-items-center ps-lg-5 px-3 px-lg-0"
              id="bg-sec-four"
            >
                <div className="w-50-custom float-start mt-5 mt-lg-0 pe-lg-5 pe-0">
                
                <h2 style={{ fontSize: "40px" }} className="text-green">
                  Comes with the Vultisig App
                </h2>
                <p className="text-white text-20 mt-4 sec-four-paragraph">
                  VultiPhone is designed with crypto security in <br /> mind,
                  pre-installed with Vultisig—a self-custodial <br />
                  multi-chain crypto vault. <br />
                  Protect your digital assets with unmatched ease <br /> and
                  start earning crypto rewards from day one.
                </p>
                <Link
                  className="btn px-lg-4  btn-light   my-5   btn-color d-flex align-items-center justify-content-center rounded-pill"
                  style={{ height: "48px", width: "193px" }}
                  href={navBarCopy.pre_order.url}
                  target={navBarCopy.pre_order.target}
                >
                  {navBarCopy.pre_order.name}
                </Link>
              </div>
              <div className="d-lg-none" style={{width:"20%"}}></div>
            
            </div>
          </div>
          <div className="row justify-content-between gap-5" id="session-wallet">
          
            <div className="col-lg-4 mx-lg-5 px-3 px-lg-0" style={{ textAlign: "center" }}>
              <img src="/img/session-app.png" />
              <div className="text-start mt-5 mt-lg-0">
              <h2 style={{ fontSize: "32px" }} className="text-green mt-3">
                Session App
              </h2>
              <p
                className="text-white text-18 mt-4"
                style={{ padding: "inherit", textAlign: "left" }}
              >
                Session is an end-to-end encrypted messenger that
                minimises sensitive metadata, designed and built for people who
                want absolute privacy and freedom from any form of surveillance.
              </p>
              </div>
             
            </div>
            <div className="col-lg-4 mx-lg-5 px-3 px-lg-0 mt-5 mt-lg-0" style={{ textAlign: "center" }}>
              <img src="/img/thor-wallet.png" />
              <div className="text-start mt-5 mt-lg-0">
              <h2 style={{ fontSize: "32px" }} className="text-green mt-3">
                ThorWallet
              </h2>
              <p
                className="text-white text-18 mt-4"
                style={{ padding: "inherit", textAlign: "left" }}
              >
                Cross-chain transactions simplified. Experience mobile swaps
                between blockchains using THORChain & Maya Protocol or grow your
                cypto using our unique Savers Account.
              </p>
            </div>
            </div>
          </div>
        </div>

        <div className="container-fluid px-0">
          <img
            src="/img/left-shadow.png"
            className="shadow-left position-absolute start-0"
            style={{ marginTop: "600px" }}
          />
          <img
            src="/img/right-shadow.png"
            className="shadow-right position-absolute end-0"
            style={{ marginTop: "900px" }}
          />
          <div className="container">
            <div className="row" id="choose">
              <div className="col-12 text-center text-white pt-5">
                <h2 style={{ fontSize: "48px" }}>Why Choose VultiPhone?</h2>
                <div className="d-flex justify-content-center flex-wrap gap-5 align-items-center mt-5">
                  <div className="item-box position-relatives">
                    <img
                      src="/img/circle-1.png"
                      style={{ marginTop: "20px", marginLeft: "100px" }}
                    />
                    <img
                      src="/img/circle-2.png"
                      style={{ left: "10px", top: "5px" }}
                      className=" position-absolute"
                    />
                    <p className="mt-4">
                      Earn Crypto <br /> Rewards
                    </p>
                  </div>

                  <div className="item-box">
                    <img
                      src="/img/nft-1.png"
                      className=""
                      style={{ marginTop: "-20px" }}
                    />
                    <img
                      src="/img/nft-2.png"
                      style={{ marginTop: "50px", marginLeft: "-20px" }}
                    />
                    <p className="mt-3">
                      Exclusive NFTs for <br /> Early Adopters
                    </p>
                  </div>
                  <div className="item-box">
                    <img src="/img/phone.png" />
                    <p className="mt-4">
                      Pair and Backup <br /> Your Vault
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center flex-wrap gap-5 align-items-center mt-5">
                  <div className="item-box">
                    <img src="/img/logo-box.png" />
                    <p className="mt-2">
                      Pre-Installed <br /> Vultisig
                    </p>
                  </div>
                  <div className="item-box">
                    <img src="/img/coin.png" />
                    <p className="mt-4">
                      $WEWE Shades <br /> Included
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="limited">
              <div className="col-12 text-center text-white pt-5">
                <h2 style={{ fontSize: "40px" }} className="text-white">
                  LIMITED OFFER
                </h2>
                <p className="text-white text-20 mt-4">
                  First 100 Preorders Come with <br /> @THORGuards
                </p>
                <Link
                  className="btn px-lg-4  btn-light mx-auto  my-5   btn-color d-flex align-items-center justify-content-center rounded-pill"
                  style={{ height: "48px", width: "300px" }}
                  href={`#`}
                >
                  Get it now for only 149 USDC
                </Link>
              </div>
            </div>
            <div className="row" id="pre-order">
              <div className="col-lg-5 px-3 px-lg-0">
                <h2 style={{ fontSize: "40px" }} className="text-green">
                  HOW TO <br />
                  PRE-ORDER
                </h2>
                <p className="text-white text-20">
                  Initiate a transaction in USDC or WEWE using the QR codes
                  provided. Ensure the correct amount is sent and remember to
                  copy the transaction id, as you need to provide it in the next
                  step.
                </p>
                <p className="pt-3 text-white">
                  Fill out our{" "}
                  <a href="#" className="text-green">
                    Google Form
                  </a>
                  .
                </p>
                <p className="pt-3 text-white">
                  Your order will be considered valid once both the payment is
                  received and the form is successfully submitted.
                </p>
                <p className="pt-3 text-white">
                  This website will be updated once the 100 preorders have been
                  reached.
                </p>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0 d-flex flex-wrap gap-4 justify-content-center align-items-center px-3 px-lg-0">
                <div>
                  <img src="/img/qr-1.png" />
                  <p className="text-white text-18 text-center mt-2">
                    PAY WITH USDC
                  </p>
                  <p className="text-green text-18 text-center">149 USDC</p>
                </div>
                <div>
                  <img src="/img/qr-1.png" />
                  <p className="text-white text-18 text-center mt-2">
                    1,111.111 WEWE
                  </p>
                  <p className="text-green text-18 text-center">149 USDC</p>
                </div>
              </div>
            </div>
            <div className="row" id="delivery-details">
              <div className="col-lg-7 mt-5 mt-lg-0 d-flex gap-4 justify-content-center align-items-center px-3 px-lg-0">
                <img src="/img/data-details.png" />
              </div>
              <div className="col-lg-5 px-3 px-lg-0 mt-5 mt-lg-0">
                <h2 style={{ fontSize: "24px" }} className="text-green">
                  DELIVERY DETAILS
                </h2>
                <p className="text-white text-20">
                  The estimated delivery is expected by late October, subject to
                  international shipping times based on your location.
                </p>
                <h2 style={{ fontSize: "24px" }} className="text-green mt-5">
                  DATA PRIVACY
                </h2>
                <p className="text-white text-20">
                  Your personal information (address, email, transaction ID)
                  will be used solely for communication regarding delivery and
                  will be deleted once your Vultiphone has been delivered.
                </p>
                <h2 style={{ fontSize: "24px" }} className="text-green mt-5">
                  WARRANTY INFORMATION
                </h2>
                <p className="text-white text-20">
                  Your personal information (address, email, transaction ID)
                  will be used solely for communication regarding delivery and
                  will be deleted once your Vultiphone has been delivered.
                </p>
              </div>
            </div>
            <div className="row" id="phone-box">
              <div className="col-lg-10 mx-auto px-3 px-lg-0 text-start bg-phone-box">
                <div className="ms-lg-5 mt-3 d-flex flex-column justify-content-center h-100 align-items-start">
                  <h2 style={{ fontSize: "40px" }} className="text-white">
                    Get <br /> Started in <br /> Minutes
                  </h2>
                  <p className="text-white text-20 mt-3">
                    Setting up your VultiPhone is simple. Unbox, power <br />{" "}
                    on, and your Vultisig vault is ready to go. With just a{" "}
                    <br /> few taps, you can generate a secure vault and start{" "}
                    <br /> managing your crypto safely.
                  </p>
                  <Link
                    className="btn px-lg-4 btn-light my-3 btn-color d-flex align-items-center justify-content-center rounded-pill"
                    style={{ height: "48px", width: "200px" }}
                    href={`#`}
                  >
                    Pre-order Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="row" id="join-discord">
              <div className="col-12 text-start px-3 px-lg-0 d-flex flex-wrap justify-content-start">
                <p className="text-white" style={{ fontSize: "24px" }}>
                  JOIN THE DISCORD TO REQUEST <br /> NEW FEATURES!
                </p>
                <Link
                  className="btn btn-primary px-lg-4 d-flex align-items-center justify-content-center btn-discord"
                  href={`#`}
                >
                  DISCORD LINK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
