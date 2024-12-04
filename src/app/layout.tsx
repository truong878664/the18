import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/app/components/partials/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const neueMachina = localFont({
  src: "./fonts/PPNeueMachina-InktrapRegular.woff",
  variable: "--font-neue-machina",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          neueMachina.variable,
          neueMachina.className,
          "text-lg text-dark"
        )}
      >
        <Header />
        <div className="container space-y-20">{children}</div>
      </body>
    </html>
  );
}
