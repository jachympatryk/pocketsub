"use client";

import { UserButton, useUser } from "@clerk/clerk-react";
import Link from "next/link";

export const AuthButtons = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="flex justify-center items-center gap-4">
      {isSignedIn && (
        <>
          <Link href={"/dashboard"}>Dashboard</Link>
          <UserButton afterSignOutUrl="/" />
        </>
      )}
      {!isSignedIn && (
        <>
          <Link href={"/sign-in/"}>SignIn</Link>
          <Link href={"/sign-up/"}>SignUp</Link>
        </>
      )}
    </div>
  );
};
