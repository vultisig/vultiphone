import Image from "next/image";
import { footerCopy } from "../copy/Footer";

export function Footer() {
  return (
    <>
      <div className="footer text-light container">
        <hr className="solid mt-5" />
        <div className="row mt-5 mb-5">
          <div className="col-lg-6 col-md-12">
            <div className="d-flex align-items-center mb-5">
              {" "}
              <Image
                width={30}
                height={30}
                src={footerCopy.brand.image}
                alt={footerCopy.brand.title}
              />
              <strong
                className=" monserrat-semibold"
                style={{ fontSize: "xx-large" }}
              >
                {footerCopy.brand.title}
              </strong>
            </div>
            <div className="mt-5">
              {footerCopy.social.map((social, index) => (
                <>
                  <a key={index}
                    className="mx-3"
                    href={social.url}
                    target={social.target}
                  >
                    <Image
                      width={30}
                      height={30}
                      src={social.image}
                      alt=""
                    />
                  </a>
                </>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt-3 mt-lg-0">
            <div>
              <div className="row justify-content-end">
                <div className="col-md-3">
                  <ul className="list-unstyled monserrat-regular">
                    <li className="mb-2 text-20">
                      <strong>{footerCopy.footerLinks[0].title}</strong>
                    </li>
                    {footerCopy.footerLinks[0].links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.url}
                          target={link.target}
                          className="nav-link color-footer mt-3"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="list-unstyled monserrat">
                    <li className="mb-2 text-20">
                      <strong>{footerCopy.footerLinks[1].title}</strong>
                    </li>
                    {footerCopy.footerLinks[1].links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.url}
                          target={link.target}
                          className="nav-link color-footer mt-3"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 monserrat-regular color-footer">
          {" "}
          <span>{footerCopy.copyright}</span>
        </div>
      </div>
    </>
  );
}
