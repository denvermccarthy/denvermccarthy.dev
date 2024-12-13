import type { Metadata } from "next";
import { Red_Hat_Mono } from "next/font/google";
import "./globals.css";

const redHatMono = Red_Hat_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Denver McCarthy",
  description:
    "Welcome to my portfolio website! I'm a full stack developer based in Portland, OR.",
  icons: {
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};

function Head() {
  return (
    <head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </head>
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={redHatMono.className}>
      <Head />
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
