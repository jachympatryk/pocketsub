import { AuthButtons } from "@/components";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Pocketsub",
  description: "Manage your payments",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="mx-auto flex max-w-7xl items-center p-6 gap-2">
        <Link href={"/"}>
          <h1 className="font-bold text-xl">Pocketsub</h1>
        </Link>
        <nav className="w-full">
          <ul className="flex items-center justify-center gap-4 list-none">
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
          </ul>
        </nav>
        <AuthButtons />
      </header>
      {children}
    </div>
  );
}
