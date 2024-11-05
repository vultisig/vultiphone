import type { Metadata } from "next";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import "./components/home/index.scss";

import { NavBar } from "./shared-components/NavBar";
import { Footer } from "./shared-components/Footer";

const geistSans = localFont({
  src: "./fonts/Montserrat-Medium.ttf",
  variable: "--font-Montserrat-Medium",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Montserrat-Bold.ttf",
  variable: "--font-Montserrat-Bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "VultiPhone",
  description: "VultiPhone is a secure and easy-to-use platform that allows you to manage your digital assets.",
  metadataBase: new URL("https://vultiphone.vercel.app/"),
  keywords: ['VultiPhone', 'Blockchain', ' Earn Crypto with Security', 'Multi-Chain Vault', ' WEWE' , 'DEFI' , 'NFT'],
  authors: [{ name: 'Vultisig' }],
  openGraph: {
    siteName: 'VultiPhone',
    url: 'https://vultiphone.vercel.app/',
    images: 'https://vultiphone.vercel.app/img/vultiphone-thumbnail.png',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* className={`${geistSans.variable} ${geistMono.variable}`} */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
