import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pocketsub",
  description: "Manage your payments",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <header>navigaition</header>
      {children}
    </div>
  );
}
