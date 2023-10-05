"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { NavLink } from "./app-link.types";
import Link from "next/link";
import { UrlObject } from "url";

export const AppLink = (link: NavLink) => {
  const { icon, name, path } = link;

  const pathname = usePathname();
  const isActive = pathname === path;

  if (isActive)
    return (
      <Link href={path} className="w-full flex bg-black p-2 gap-4 pl-5 transition-colors">
        <i className={`ri-${icon}-fill text-white font-semibold`} />
        <p className="font-semibold text-white">{name}</p>
      </Link>
    );

  return (
    <Link href={path} className="w-full flex p-2 pl-5 gap-4 transition-colors">
      <i className={`ri-${icon}-line text-black font-semibold`} />
      <p className="font-semibold">{name}</p>
    </Link>
  );
};
