"use client";

import { useState } from "react";
import { ConfigProvider, Drawer, Menu, MenuProps } from "antd";
import Image from "next/image";
import Link from "next/link";

import content from "@/layouts/default/index.json";

import { HamburgerMD, Vultisig } from "@/icons";

interface InitialState {
  opened?: boolean;
}

export default function Component({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState: InitialState = {};
  const [state, setState] = useState(initialState);
  const { opened } = state;

  const handleMenu = () => {
    setState((prevState) => ({ ...prevState, opened: !prevState.opened }));
  };

  const navbar: MenuProps["items"] = content.navbar.map((item, index) => ({
    key: `${index + 1}`,
    label: <Link href={item.url}>{item.label}</Link>,
    onClick: () => {
      setState((prevState) => ({ ...prevState, opened: false }));
    },
  }));

  return (
    <html lang="en">
      <body className="layout">
        <ConfigProvider theme={{ token: { fontFamily: "inherit" } }}>
          <header>
            <div className="container">
              <Link href="/" className="logo">
                <Vultisig />
                Vultisig
              </Link>

              <Menu
                mode="horizontal"
                rootClassName="header-submenu"
                items={navbar}
                selectedKeys={[]}
              />

              <span className="menu" onClick={handleMenu}>
                <HamburgerMD />
              </span>

              <Link href={content.download.url} className="btn download">
                {content.download.label}
              </Link>
            </div>
          </header>
          {children}
          <footer>
            <div className="container">
              <div className="discord">
                <p className="title">{content.discord.title}</p>
                <a
                  href={content.discord.url}
                  target={content.discord.target}
                  className="btn"
                >
                  {content.discord.btn}
                </a>
              </div>

              <div className="info">
                <Link href="/" className="logo">
                  <Vultisig />
                  Vultisig
                </Link>

                <ul className="socials">
                  <li>
                    <a
                      href={content.social.github.url}
                      target={content.social.github.target}
                    >
                      <Image
                        width={32}
                        height={32}
                        src={content.social.github.img}
                        alt={content.social.github.alt}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={content.social.twitter.url}
                      target={content.social.twitter.target}
                    >
                      <Image
                        width={32}
                        height={32}
                        src={content.social.twitter.img}
                        alt={content.social.twitter.alt}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={content.social.discord.url}
                      target={content.social.discord.target}
                    >
                      <Image
                        width={32}
                        height={32}
                        src={content.social.discord.img}
                        alt={content.social.discord.alt}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={content.social.telegram.url}
                      target={content.social.telegram.target}
                    >
                      <Image
                        width={32}
                        height={32}
                        src={content.social.telegram.img}
                        alt={content.social.telegram.alt}
                      />
                    </a>
                  </li>
                </ul>

                <span className="copyright">{content.copyright}</span>
              </div>

              <div className="links">
                <div className="shortcut">
                  <h4 className="title">{content.shortcut.vultisig.title}</h4>
                  <ul className="list">
                    {content.shortcut.vultisig.links.map(
                      ({ label, newTab, url }, index) => (
                        <li key={index}>
                          {newTab ? (
                            <a href={url}>{label}</a>
                          ) : (
                            <Link href={url}>{label}</Link>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="shortcut">
                  <h4 className="title">{content.shortcut.support.title}</h4>
                  <ul className="list">
                    {content.shortcut.support.links.map(
                      ({ label, newTab, url }, index) => (
                        <li key={index}>
                          {newTab ? (
                            <a href={url}>{label}</a>
                          ) : (
                            <Link href={url}>{label}</Link>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="shortcut">
                  <h4 className="title">{content.shortcut.legal.title}</h4>
                  <ul className="list">
                    {content.shortcut.legal.links.map(
                      ({ label, newTab, url }, index) => (
                        <li key={index}>
                          {newTab ? (
                            <a href={url}>{label}</a>
                          ) : (
                            <Link href={url}>{label}</Link>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </footer>

          <span className="gradient-shadow gradient-shadow-one" />

          <Drawer
            title="MENU"
            placement="left"
            onClose={handleMenu}
            open={opened}
          >
            <Menu mode="inline" items={navbar} selectedKeys={[]} />
          </Drawer>
        </ConfigProvider>
      </body>
    </html>
  );
}
