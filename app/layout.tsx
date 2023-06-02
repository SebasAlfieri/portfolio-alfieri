import "@/styles/globals.css";
import React from "react";
import Script from "next/script";
import localFont from "next/font/local";

// import { baseMetaData } from "@/lib/constants";
// import { GTM_ID } from "@/lib/constants";

export type RootLayoutProps = {
  children: React.ReactNode;
};

// export const metadata = baseMetaData;

const Interstate = localFont({
  src: [
    {
      path: "./fonts/Interstate-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./fonts/Interstate-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-interstate",
  preload: true,
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${Interstate.variable}`}>{children}</body>
    </html>
  );
}
