import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
