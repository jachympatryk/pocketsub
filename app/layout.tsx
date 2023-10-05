import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import "remixicon/fonts/remixicon.css";

export const metadata: Metadata = {
  title: "Pocketsub",
  description: "Manage your payments",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
