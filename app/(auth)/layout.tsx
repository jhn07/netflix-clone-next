import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src="/images/login_background.jpg"
        alt="background"
        className="hidden -z-10 brightness-50 sm:flex sm:object-cover"
        priority
        fill
      />

      <Image
        src="/images/netflix_logo.svg"
        alt="Logo"
        width={120}
        height={120}
        priority
        className="absolute top-4 left-4 object-contain md:top-6 md:left-10 "
      />
      {children}
    </div>
  )
}
