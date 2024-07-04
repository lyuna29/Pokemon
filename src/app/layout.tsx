import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "../../public/logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "lyuna's Pokemon",
  description: "현아의 포켓몬 도감",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-green-800">
        <header className="w-full h-auto mt-10 text-center flex justify-center">
          <Image className="w-[400px] h-52" src={logo} alt="로고당" />
        </header>
        {children}
      </body>
    </html>
  );
}
