import { homeCopy } from "@/app/copy";
import { navBarCopy } from "@/app/copy/NavBar";
import Link from "next/link";

export function Sections() {
  return (
    <>

      <div className="hero-sec">
        <div className="container">
          <h1 className="title-header">
            {homeCopy.header.title}
            <span className="animated-text"></span>
          </h1>
          <p
            className="text-16"
            dangerouslySetInnerHTML={{ __html: homeCopy.header.description }}
          ></p>
          <Link aria-disabled={true}
            className="btn px-lg-4 btn-light mx-auto  my-5 btn-color d-flex align-items-center justify-content-center rounded-pill btn-pre-order"
            style={{ height: "48px", width: "193px" }}
            href={navBarCopy.pre_order.url}
            target={navBarCopy.pre_order.target}
          >
            {navBarCopy.pre_order.name}
          </Link>
        </div>
      </div>

      {homeCopy.about_phone.map((item, index) => {
        return (
          <div className="public-section" key={index}>
            <div className="container">
              <h1
                className="title-sec text-uppercase"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p
                className="text-16"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <img src={item.img} />
            </div>
          </div>
        );
      })}

      <div className="container">
        <div className="row" id="choose">
          <div className="col-12 text-center text-white pt-5">
            <h2 style={{ fontSize: "48px" }}>{homeCopy.choose.title}</h2>
            <div className="d-flex justify-content-center flex-wrap gap-5 align-items-center mt-5">
              {homeCopy.choose.items.map((item, index) => {
                return (
                  <div className="item-box" key={index}>
                    <img src={item.img} />
                    <p
                      className="mt-3"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row" id="delivery-details">
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex gap-4 justify-content-center align-items-center px-3 px-lg-0">
            <img src="/img/data-details.png" />
          </div>
          <div className="col-lg-5 px-3 px-lg-0 mt-5 mt-lg-0">
            {homeCopy.delivery_details.items.map((item, index) => {
              return (
                <>
                  <h2 style={{ fontSize: "24px" }} className="text-green mt-5">
                    {item.title}
                  </h2>
                  <p className="text-white text-20">{item.description}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container get-started">
        <div className="shadow">
          <h1
            dangerouslySetInnerHTML={{ __html: homeCopy.get_started.title }}
          />
          <p>{homeCopy.get_started.description}</p>
          <Link
            className="btn px-lg-4 btn-light my-3 btn-color d-flex align-items-center justify-content-center rounded-pill"
            style={{ height: "48px", width: "200px" }}
            target={navBarCopy.pre_order.target}
            href={navBarCopy.pre_order.url}
          >
            {homeCopy.get_started.link_text}
          </Link>
        </div>
        <img src="/img/home/phone.png" />
      </div>

      <div className="container">
        <div className="join-discord">
          <p
            dangerouslySetInnerHTML={{ __html: homeCopy.join_discord.title }}
          ></p>
          <Link
            className="btn btn-primary btn-discord align-items-center"
            href={`https://discord.gg/54wEtGYxuv`}
          >
            {homeCopy.join_discord.link_text}
          </Link>
        </div>
      </div>

    </>
  );
}
