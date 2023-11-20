"use client";

import { signIn } from "next-auth/react";
import { GithubIcon } from "lucide-react";

import { Button } from "./ui/button";

export default function GithubSignInButton() {
  return (
    <Button onClick={() => signIn("github")}>
      <GithubIcon className="w-4 h-4" />
    </Button>
  )
}
