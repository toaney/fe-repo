import type { Metadata } from "next";
import { Barlow_Condensed, Nanum_Pen_Script, Inter } from "next/font/google";
import "./globals.css";
// import { GoogleAnalytics } from '@next/third-parties/google';

const nanumPenScript = Nanum_Pen_Script({ subsets: ["latin"], weight: "400", variable: "--font-nanum-pen-script" });
const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "700", variable: "--font-barlow-condensed" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Thomas Toan",
  description: "Work Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nanumPenScript.variable} ${barlowCondensed.variable} ${inter.variable}`}>{children}</body>
      {/* <GoogleAnalytics gaId='G-EZ2EMY8M97' /> */}
    </html>
  );
}
