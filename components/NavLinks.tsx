"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavLinks({ name, href }: { name: string, href: string }) {
  const pathname = usePathname()

  return (
    <Link href={href}
      className={cn(
        "text-gray-300 font-normal",
        pathname === href && "text-white font-semibold underline"
      )}
    >
      {name}
    </Link>
  )
}
