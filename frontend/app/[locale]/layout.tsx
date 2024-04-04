import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Navbar from "@/app/components/navbar";
import { NextIntlClientProvider, useLocale, useMessages, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import pick from "lodash/pick";


// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "KBTU Science(edit)",
  description: "KBTU science descriptio(edit)",
};


export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: any
}) {

  const locale = useLocale();
  const t = useTranslations("Navbar");
  const messages = useMessages();
  // const tMeta = useTranslations("Metadata");

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }


  return (
    <html lang={locale}>
      <head>

      </head>
      <body>
        {/* Wrap it because it can't be turned into server side component */}
        <NextIntlClientProvider
        messages={
          pick(messages,"Navbar")
        }>
          <Navbar locale={locale} />
        </NextIntlClientProvider>
        <main className={cn("min-h-screen bg-background font-sans antialiased")}>
          {children}
        </main>
      </body>
    </html>
  );
}