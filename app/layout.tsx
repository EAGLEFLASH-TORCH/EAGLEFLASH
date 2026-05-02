import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eagle Flash 闪电鹰 | 专业手电筒制造商",
  description: "义乌市闪电鹰照明科技有限公司 — 专注高品质手电筒研发与生产，100+款产品覆盖户外、战术、工业等全场景",
  openGraph: {
    title: "Eagle Flash 闪电鹰 | 专业手电筒",
    description: "义乌市闪电鹰照明科技有限公司 — 100+款专业手电筒",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable}`}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
