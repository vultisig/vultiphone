import { navBarCopy } from "@/app/copy/NavBar";
import Link from "next/link";
export function Sections() {
  return (
    <>
      <header className="">
        <div className="row">
          <div className="col-12 text-center text-white mt-5 pt-5">
            <h1 className="title-header">
              Your
              <span className="animated-text"></span>
            </h1>
            <p className="text-16">
              The Ultimate Crypto Phone with Built-In Multi-Chain Vault.
              <br />
              Start Protecting Your Assets and Earning Rewards.
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
        {/* <img
          src="/img/left-shadow.png"
          className="shadow-left position-absolute start-0"
          style={{ marginTop: "600px",marginRight:"-35px"  }}
        />
        <img
          src="/img/right-shadow.png"
          className="shadow-right position-absolute end-0"
          style={{ marginTop: "900px",marginRight:"-35px" }}
        /> */}
        <div className="container">
          <div className="row" id="brilliant">
            <div className="col-12 d-block d-lg-none mt-5 text-center">
              <img src="/img/sec-1.png" className="w-100 object-fit-contain" />
            </div>
            <div
              className="col-lg-12 d-flex justify-content-end align-items-center px-3 px-lg-0"
              id="bg-sec-one"
            >
              <div className="w-60-custom float-end ps-lg-4">
                <h2 style={{ fontSize: "40px" }} className="text-green text-uppercase">
                Big, Bold, and<br/> Brilliant
                </h2>
                <p className="text-white text-20 pb-lg-5 mb-lg-5">
                  Experience the best of Vultiphone powered by Android 14,
                  giving you a seamless, secure, and intuitive interface.
                  Whether it's work or play, the Vultiphone ensures everything
                  looks better.
                </p>
              </div>
            </div>
          </div>

          <div className="row" id="advanced-sec">
            <div className="col-12 d-block d-lg-none mt-5 text-center">
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
                <h2 style={{ fontSize: "40px" }} className="text-green text-uppercase">
                  ADVANCED SECURITY<br></br> FEATURES
                </h2>
                <p className="text-white text-20 mb-5 pb-5 sec-four-paragraph">
                  Stay secure with the Fingerprint Sensor and advanced sensor<br></br>
                  technology, including G-sensor, P-sensor, and L-sensor for<br></br>
                  enhanced functionality and protection.
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="capture">
            <div className="col-12 d-block d-lg-none mt-5 text-center">
              <img src="/img/cap-mob.png" />
            </div>
            <div
              className="col-lg-12 d-flex justify-content-center align-items-start ps-lg-5 px-3 px-lg-0"
              id="bg-sec-three"
            >
              <div className="w-50-custom float-end ms-custom mt-5 mt-lg-0">
                <h2
                  style={{ fontSize: "40px" }}
                  className="text-green text-uppercase"
                >
                  Sign Transactions <br />
                  with Ease
                </h2>
                <p className="text-white text-20">
                  Vultiphone makes secure crypto transactions simple and
                  seamless. Whether you’re managing assets or authorizing a
                  transaction, the Vultiphone lets you sign on another trusted
                  device with just a few taps—no additional hardware needed.
                </p>
              </div>
            </div>
          </div>
          <div className="row" id="app-sec">
            <div className="col-12 d-block d-lg-none mt-5 text-center mt-5">
              <img src="/img/sec-4.png" className="w-100 object-fit-contain" />
            </div>
            <div
              className="col-lg-12 d-flex justify-content-start align-items-center ps-lg-5 px-3 px-lg-0"
              id="bg-sec-four"
            >
              <div className="w-50-custom float-start mt-5 mt-lg-0 pe-lg-5 pe-0">
                <h2 style={{ fontSize: "40px" }} className="text-green text-uppercase">
                  Comes with the Vultisig App
                </h2>
                <p className="text-white text-20 mt-4 sec-four-paragraph">
                  VultiPhone is designed with crypto security in mind,
                  pre-installed with Vultisig—a self-custodial multi-chain
                  crypto vault. 
                  <br></br>
                  Protect your digital assets with unmatched ease
                  and start earning crypto rewards from day one.
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
              <div className="d-lg-none" style={{ width: "20%" }}></div>
            </div>
          </div>
          <div
            className="row justify-content-between gap-5"
            id="session-wallet"
          >
            <div className="col-12 d-block d-lg-none mt-5 text-center">
              <img src="/img/session-app.png" />
            </div>
            <div
              className="col-lg-12 ps-lg-5 px-3 px-lg-0"
              id="bg-sec-session-app"
            >
              <div className="description float-end ms-custom mt-5 mt-lg-0">
                <h2 style={{ fontSize: "40px" }} className="text-green text-uppercase">
                  Session App
                </h2>
                <p className="text-white text-20">
                  Session is an end-to-end encrypted messenger that
                  minimises sensitive metadata, designed and built for people
                  who want absolute privacy and freedom from any form
                  of surveillance.
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
                  <div className="item-box">
                    <img src="/img/logo-box.png" />
                    <p className="mt-2">
                      Pre-Installed <br /> Vultisig
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" id="limited">
            <div className="col-12 text-center text-white">
              <h2 style={{ fontSize: "40px" }} className="text-white">
                LIMITED OFFER
              </h2>
              <p className="text-white text-20 mt-4">
                First 100 Preorders Come with <br />
                <Link
                  className="text-white"
                  target="_blacnk"
                  href="https://opensea.io/collection/thorguards"
                >
                  @THORGuards NFT
                </Link>
              </p>
              <Link
                className="btn btn-light mx-auto  my-5 btn-color d-flex align-items-center justify-content-center rounded-pill"
                style={{ height: "48px"}}
                target="_blank"
                href={`https://docs.google.com/forms/d/e/1FAIpQLSeXJc5fWtN6S2tkWM7A7SF5rPMyZTgZlH-pCzqr5xAlv9U2Tw/viewform?usp=sf_link`}
              >
                Available soon! Pre-order for just $149 USDC.
              </Link>
            </div>
          </div>
          <div className="container">
            <div className="row" id="delivery-details">
              <div className="col-lg-7 mt-5 mt-lg-0 d-flex gap-4 justify-content-center align-items-center px-3 px-lg-0">
                <img src="/img/data-details.png" />
              </div>
              <div className="col-lg-5 px-3 px-lg-0 mt-5 mt-lg-0">

                <h2 style={{ fontSize: "24px" }} className="text-green">
                  DELIVERY DETAILS
                </h2>
                <p className="text-white text-20">
                  The estimated delivery is expected by Q4 24/Q1 25, subject to
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
                  Setting up your Vultiphone is simple. Unbox, insert a local<br></br> 
                  SIM card or connect to a WiFi network, power on, and your<br></br> 
                  Vultisig vault is ready to go. With just a few taps, you can generate<br></br>
                   a secure vault and start managing your crypto safely.
                  </p>
                  <Link
                    className="btn px-lg-4 btn-light my-3 btn-color d-flex align-items-center justify-content-center rounded-pill"
                    style={{ height: "48px", width: "200px" }}
                    target={navBarCopy.pre_order.target}
                    href={navBarCopy.pre_order.url}
                  >
                    Pre-order Soon
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
                  href={`https://discord.gg/54wEtGYxuv`}
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
