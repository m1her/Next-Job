import Link from "next/link";
import React from "react";
import { NavLink } from "./NavLink";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";

export const NavBar = () => {
  return (
    <div className="w-full grid grid-cols-[1fr,3fr,1fr] pt-8 px-12 font-inter">
      <Link href={"/"} className="text-black text-2xl flex items-center w-fit">
        <Image
          src={"/logo.png"}
          alt={"N"}
          width={100}
          height={100}
          className="w-12"
        />
        NEXTJOB
      </Link>
      <div className="flex items-center justify-center gap-12 w-full">
        <NavLink text={"Home"} href={"/"} />
        <NavLink text={"About Us"} href={"/about-us"} />
        <NavLink text={"Contact Us"} href={"/contact-us"} />
        <NavLink text={"Help Center"} href={"/help-center"} />
      </div>
      <div className="flex items-center justify-end gap-x-2">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="rounded-sm h-full font-medium flex items-center justify-center transition duration-300 text-base text-primary border border-primary hover:text-[#0054ae] hover:border-[#0054ae0] hover:bg-[#0054ae]/5 px-6 py-2">
              Log In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="rounded-sm h-full font-medium flex items-center justify-center transition duration-300 text-base text-white bg-primary hover:bg-[#0054ae] px-6 py-2">
              Get Started
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <SignOutButton>
            <button className="rounded-sm h-full font-medium flex items-center justify-center transition duration-300 text-base text-primary border border-primary hover:text-[#0054ae] hover:border-[#0054ae0] hover:bg-[#0054ae]/5 px-6 py-2">
              Sign Out
            </button>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
};
