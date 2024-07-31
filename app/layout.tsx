import type { Metadata } from "next";
import LocalFont from "next/font/local";
import Header from "./components/Header";
import "./globals.css";

const inter = LocalFont({
  src: "../public/fonts/PretendardVariable.woff2",
});

export const metadata: Metadata = {
  title: "GSMAN",
  description: "소프트웨어마이스터고 프로젝트 리스트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
