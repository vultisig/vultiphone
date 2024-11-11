import type { Metadata } from "next";

import Component from "@/components/layouts/default";

import "@fontsource/montserrat/latin.css";
import "@fontsource/roboto-mono/latin.css";
import "@/styles/index.scss";

export const metadata: Metadata = {
  title: "VultiPhone",
  description: "VultiPhone is a secure and easy-to-use platform that allows you to manage your digital assets.",
  metadataBase: new URL("https://vultiphone.com/"),
  keywords: ['VultiPhone', 'Blockchain', ' Earn Crypto with Security', 'Multi-Chain Vault', ' WEWE' , 'DEFI' , 'NFT'],
  authors: [{ name: 'Vultisig' }],
  openGraph: {
    siteName: 'VultiPhone',
    url: 'https://vultiphone.com/',
    images: 'https://vultiphone.com/thumbnails/home.png',
  },
  twitter: {
    site: "VultiPhone",
    card: "summary_large_image",
    title: "VultiPhone",
    description: "VultiPhone is a secure and easy-to-use platform that allows you to manage your digital assets.",
    images: 'https://vultiphone.com/thumbnails/home.png',
  },
  icons: {
    icon: "logo.svg",
  },
};
export default Component;
