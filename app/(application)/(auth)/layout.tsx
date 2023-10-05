import type { Metadata } from "next";
import React from "react";

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex h-screen w-screen justify-center items-center">{children}</div>;
}
