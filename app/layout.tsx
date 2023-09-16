import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CarStop",
  description: "Cars that will change how you ride",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
