import Layout from "@src/layout";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
// AOS import
import "aos/dist/aos.css";

const manrope = Manrope({
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: { template: "%s | Boldo", default: "Boldo" },
  description: "Save time by building fast with Boldo Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${manrope.variable} ${manrope.className} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
