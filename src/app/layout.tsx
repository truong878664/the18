import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/app/components/partials/Header";
import Footer from "./components/partials/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 18",
  description: "Generated by create next app",
  abstract: "abstract",
  facebook: {
    admins: "123123",
  },
  applicationName: "The 18 Design",
  authors: {
    name: "tranquoctruong",
  },
  category: "Design",
  keywords: [
    "design",
    "thiet ke",
    "thiết kế",
    "black and white",
    "thiết kế đen trắng",
  ],
  icons: [
    {
      rel: "icon",
      url: "/static/favicon.svg",
      type: "image/x-icon",
      sizes: "16x16",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          "text-lg text-dark selection:bg-dark selection:text-white"
        )}
      >
        <Header />
        <main className="container scroll-smooth">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
