import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@components/*";

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
