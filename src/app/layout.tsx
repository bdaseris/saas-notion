import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import AppProvider from "@/providers";

import "./globals.css";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cypress Platform",
  description: "Create and share your Cypress tests with others",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge("bg-background", inter.className)}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
