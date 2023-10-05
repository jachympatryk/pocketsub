import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import logo from "../../../public/img/Logo.png";
import Image from "next/image";
import { AppLink, UserButton } from "@/components";
import { NavLink } from "@/components/app-link/app-link.types";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Pocketsub",
  description: "Manage your payments",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const navLink: NavLink[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "dashboard",
  },
  {
    name: "Subscriptions",
    path: "/subscriptions",
    icon: "file-text",
  },
];

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex h-screen ${inter.className}`}>
      <aside className="flex w-64 flex-col justify-between overflow-auto">
        <div>
          <Link href={"/"} className="flex items-center gap-2 mx-auto mt-6 ml-6">
            <Image src={logo} alt="Pocketsub logo" height={28} />
            <h1 className="text-lg font-semibold">pocketsub</h1>
          </Link>
          <nav className="flex flex-col my-6 gap-2">
            {navLink.map((link) => (
              <AppLink {...link} />
            ))}
          </nav>
        </div>

        <UserButton />
      </aside>
      <main className="max-h-full grow overflow-hidden bg-zinc-200">{children}</main>
    </div>
  );
}
