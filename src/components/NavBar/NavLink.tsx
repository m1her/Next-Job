"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({ text, href }: { text: string; href: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`font-medium relative before:absolute before:-bottom-1 hover:before:-bottom-0.5 before:left-1/2 before:-translate-x-1/2 before:h-0.5 before:w-[105%] before:bg-primary before:opacity-0 hover:before:opacity-100 transition-all duration-200 before:transition-all before:duration-200
        ${isActive ? "text-primary" : "text-zinc-800"}
        `}
    >
      {text}
    </Link>
  );
};
