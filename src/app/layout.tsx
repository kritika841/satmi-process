import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satmi Process",
  description: "Discover the art of traditional incense making — from forest to fragrance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="global-header">
          <a href="https://satmi.in/">
            <img src="/images/logo.png" alt="Satmi" />
          </a>
        </header>
        {children}
      </body>
    </html>
  );
}