import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { Bell, SearchIcon } from "lucide-react";
import UserNav from "./UserNav";
import NavMobilMenu from "./NavMobilMenu";


export const navlinks = [
  { name: "Home", href: "/home" },
  { name: "TV Shows", href: "/home/show" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recently" },
  { name: "My List", href: "/home/user/list" },
]

export default function Navbar({ username, useremail }: { username: string, useremail: string }) {
  return (
    <div className="w-full max-w-7xl mx-auto flex items-center justify-between p-5 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <Link href="/home">
          <Image
            src="/images/netflix_logo.svg"
            alt="Netflix logo"
            width={130}
            height={130}
            priority
          />
        </Link>
        <ul className="hidden gap-x-4 ml-14 lg:flex">
          {navlinks.map((link, idx) => (
            <NavLinks key={idx} name={link.name} href={link.href} />
          ))}
        </ul>
        <div className="gap-x-4 ml-12 md:hidden">
          <NavMobilMenu />
        </div>
      </div>
      <div className="flex items-center gap-x-8">
        <SearchIcon className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-300 cursor-pointer" />
        <UserNav username={username} useremail={useremail} />
      </div>
    </div>
  )
}



