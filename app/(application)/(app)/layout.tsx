import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pocketsub",
  description: "Manage your payments",
};

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-8">
      <aside>navigation from app</aside>
      <main>{children}</main>
    </div>
  );
}
