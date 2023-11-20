"use client";

import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { navlinks } from "./Navbar";
import NavLinks from "./NavLinks";


export default function NavMobilMenu() {
  const pathname = usePathname()

  return (
    <NavigationMenu className="relative z-50">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-black/5">Item One</NavigationMenuTrigger>
          <NavigationMenuContent className="w-44">
            <div className="grid gap-y-4 p-4">
              {navlinks.map((link) => (
                <NavLinks key={link.name} name={link.name} href={link.href} />
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
