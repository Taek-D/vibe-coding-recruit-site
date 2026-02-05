import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIO 채용 - 금융을 더 쉽게",
  description: "AIO와 함께 금융의 혁신을 만들어갈 분을 찾습니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>

        {/* Simple Footer for MVP */}
        <footer className="bg-white py-12 border-t border-grey-200 text-center text-grey-500 text-sm">
          © 2026 AIO Inc. 금융을 더 쉽고 투명하게.
        </footer>
      </body>
    </html>
  );
}
