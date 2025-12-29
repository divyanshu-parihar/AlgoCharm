import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "AlgoCharm | Master DSA",
  description: "The gamified platform for mastering Data Structures and Algorithms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${jetbrainsMono.variable} font-mono antialiased bg-[#0B0B0B] text-[#CCCCCC]`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
