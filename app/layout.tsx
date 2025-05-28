import type { Metadata } from "next";
import { Rubik, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const sansSerifFont = Rubik({
  variable: "--font-sans-serif",
  subsets: ["cyrillic"],
});

const serifFont = Noto_Serif({
  variable: "--font-serif",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Кожаная Мастерская Павла Коваленко",
  description: "Изделия из кожи, реставрация мебели и автосалона",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sansSerifFont.variable} ${serifFont.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
