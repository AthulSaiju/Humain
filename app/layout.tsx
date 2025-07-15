import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Humain",
  description: "Real-time AI Tutor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
         <ClerkProvider  appearance={{
    layout: {
      unsafe_disableDevelopmentModeWarnings: true,
    },
  }}
  /* …your other props */
>
        <Navbar/>
        {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
