import type { Metadata } from "next";
import { Kufam, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

const kufam = Kufam({ 
  subsets: ["latin"],
  weight: ["400", "500","600","700","800"],
  variable: "--font-kufam" 
});

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["400", "500","600","700","800"],
  variable: "--font-nunito" 
});

export const metadata: Metadata = {
  title: "AlNasr",
  description: "Umroh and Hajj safely with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kufam.variable} ${nunito.variable} overflow-x-hidden `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
