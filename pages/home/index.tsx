import Image from "next/image";

import content from "@/pages/home/index.json";

export default function Component() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <strong>{content.hero_section.site_name}</strong>
            <p>{content.hero_section.site_description}</p>
            <div className="order-btn">
              <a href="" className="btn">
                {content.hero_section.btn_order}
              </a>
              <span>{content.hero_section.shipping}</span>
            </div>
          </div>
          <Image
            width={376}
            height={485}
            src="/images/home/vulti-phone.png"
            alt="Hero Image"
            className="image"
          />
        </div>
      </section>

      <section className="phases" id="phases">
        <div className="container">
          <ul className="list">
            {content.phase.map((item, index) => (
              <li key={index} className={item.is_active ? "active" : ""}>
                <span className="number">{item.number}</span>
                <span className="title">{item.title}</span>
                <div className="line" />
                <div className="price">
                  <span className="old">{item.old_price}</span>
                  <span className="current">{item.price}</span>
                </div>
                <span className="price-description">
                  {item.price_description}
                </span>
                <span className="description">{item.description}</span>
                <a className={item.is_active ? "btn" : "btn btn-disabled"}>
                  {item.btn_order}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="offer">
        <div className="container">
          <h3 className="title">{content.limited_offer.title}</h3>
          <p className="desc">{content.limited_offer.description}</p>
          <a className="btn">{content.limited_offer.btn_order}</a>
          <Image
            width={592}
            height={414}
            src="/images/home/limit-offer.jpg"
            alt={content.limited_offer.title}
            className="image"
          />
        </div>
      </section>

      <section className="application">
        <div className="container">
          <h3
            className="title"
            dangerouslySetInnerHTML={{
              __html: content.comes_with_vultisig.title,
            }}
          />
          <p className="desc">{content.comes_with_vultisig.description}</p>
          <a className="btn">{content.comes_with_vultisig.btn}</a>
          <div className="media">
            <Image
              width={366}
              height={482}
              src="/images/home/application.png"
              alt={content.comes_with_vultisig.title}
              className="image"
            />
          </div>
        </div>
      </section>

      <section className="seedless">
        <div className="container">
          <h3
            className="title"
            dangerouslySetInnerHTML={{ __html: content.seedless.title }}
          />
          <Image
            width={322}
            height={368}
            src="/images/home/seedless.png"
            alt={content.seedless.title}
            className="image"
          />
        </div>
      </section>

      <section className="device-specs" id="device-specs">
        <div className="container">
          <h3 className="heading">{content.device_promo.title}</h3>
          <ul className="list">
            {content.device_promo.items.map((item, index) => (
              <li key={index}>
                <img className="icon" src={item.icon} />
                <span className="title">{item.title}</span>
                <span className="subtilte">{item.subtilte}</span>
              </li>
            ))}
          </ul>
          <div className="media">
            <Image
              width={440}
              height={608}
              src="/images/home/device-specs.png"
              alt={content.comes_with_vultisig.title}
              className="image"
            />
          </div>
        </div>
      </section>

      <section className="why-vultiphone">
        <div className="container">
          <h3
            className="heading"
            dangerouslySetInnerHTML={{
              __html: content.comes_with_vultisig.title,
            }}
          />
          <ul className="list">
            {content.why_VultiPhone.items.map((item, index) => (
              <li key={index}>
                <Image
                  width={178}
                  height={140}
                  src={item.icon}
                  alt={item.title}
                  className="image"
                />
                <h4 className="title">{item.title}</h4>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="session-app">
        <div className="container">
          <span className="title">{content.session_app.title}</span>
          <div className="app-name">
            <Image
              width={60}
              height={60}
              src="/images/home/session-app-logo.svg"
              alt={content.session_app.title}
              className="icon"
            />
            <span
              dangerouslySetInnerHTML={{ __html: content.session_app.app_name }}
            />
          </div>
          <p className="desc">{content.session_app.description}</p>
          <div className="media">
            <Image
              width={288}
              height={294}
              src="/images/home/session-app.png"
              alt={content.session_app.title}
              className="image"
            />
          </div>
        </div>
      </section>

      <section className="delivey-details">
        <div className="container">
          <ul className="list">
            {content.delivery_details.items.map((item, index) => (
              <li key={index}>
                <h3 className="title">{item.title}</h3>
                <p className="desc">{item.description}</p>
              </li>
            ))}
          </ul>
          <div className="media">
            <Image
              width={300}
              height={216}
              src="/images/home/delivery-details.png"
              alt="Delivery Details"
              className="image"
            />
          </div>
        </div>
      </section>

      <section className="stay-tuned">
        <div className="container">
          <div className="info">
            <strong className="title">{content.stay_tuned.title}</strong>
            <p className="description">{content.stay_tuned.description}</p>
          </div>
          <div className="get-update">
            <input type="email" placeholder="Email" />
            <a className="btn">{content.stay_tuned.btn_text}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
