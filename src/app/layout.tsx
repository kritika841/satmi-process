import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satmi Process",
  description: "A deploy-ready skeleton for six incense-making process pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}