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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={redHatMono.className}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
