import type { Metadata } from "next";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

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
  title: "VultisigPhone",
  description: "VultisigPhone is a secure and easy-to-use platform that allows you to manage your digital assets.",
  metadataBase: new URL("https://vultisigPhone.com"),
  keywords: ['VultisigPhone', 'VultisigPhone Docs', ' VultisigPhone help', 'VultisigPhone support', ' VultisigPhone customer service','VultisigPhone asset exchange'],
  authors: [{ name: 'VultisigPhone' }, { name: 'VultisigPhone', url: 'VultisigPhone.com' }],
  openGraph: {
    siteName: 'VultisigPhone',
    url: 'https://vultisigPhone.com',
    images: 'https://vultisigPhone.com/img/doc-header.png',
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
