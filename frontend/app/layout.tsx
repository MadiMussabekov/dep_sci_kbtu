import "./globals.css";

import Navbar from "./components/navbar";


// import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// import { cn } from "@/lib/utils";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "KBTU Science(edit)",
  description: "KBTU science descriptio(edit)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{

  
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
