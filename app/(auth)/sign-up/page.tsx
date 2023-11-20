import Link from "next/link";
import GithubSignInButton from "@/components/GithubSignInButton";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function SignUpPage() {

  const session = await getServerSession(authOptions)
  if (session) {
    return redirect("/home")
  }

  return (
    <div className="mt-24 rounded bg-black/80 px-6 py-10 md:mt-0 md:max-w-sm md:px-14">
      <form method="POST" action="/api/auth/signin">
        <h1 className="text-3xl font-semibold text-white">
          Sign Up
        </h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-zinc-700 placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant="destructive"
            className="bg-red-600 w-full"
          >
            Sign Up
          </Button>
        </div>
      </form>
      <div className="text-sm text-gray-500">
        Alredy Have an account?{" "}
        <Link href="/login"
          className={buttonVariants({ variant: "link" })}
        >
          Login in
        </Link>
      </div>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithubSignInButton />
        <GoogleSignInButton />
      </div>
    </div>
  )
}


