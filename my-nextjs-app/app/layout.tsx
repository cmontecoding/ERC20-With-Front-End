import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@components/Navbar";
//import Navbar from "../components/Navbar";

export const metadata = {
  title: "Crypto",
  description: "next generation of exchnages ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
