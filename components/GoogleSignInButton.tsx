"use client";

import Image from "next/image";
import GoogleIcon from "@/public/images/google.svg"


import { Button } from "./ui/button";
import { signIn } from "next-auth/react";


export default function GoogleSignInButton() {
  return (
    <Button onClick={() => signIn("google")}>
      <Image src={GoogleIcon} alt="google icon" className="w-5 h-5" />
    </Button>
  )
}
