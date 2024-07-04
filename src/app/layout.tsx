import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={inter.className}>
        <header className="w-full h-24 text-center">
          <h1 className="mt-[60px] text-3xl">Pokemon</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
