import Image from "next/image";
import React from "react";
import { Discord } from "../Icons/Discord";
import { LinkedIn } from "../Icons/LinkedIn";
import { GitHub } from "../Icons/GitHub";
import { Instagram } from "../Icons/Instagram";
import Link from "next/link";

export const Footer = async () => {
  return (
    <div className="px-12 pt-6 pb-4 flex flex-col gap-4 bg-[#071729]">
      <div className="flex flex-row gap-4 items-start justify-between text-zinc-100 font-poppins">
        <div className="flex items-center gap-x-4 md:w-auto md:h-auto w-14 h-14">
          <Image
            src={"/Logo.png"}
            alt={"Logo"}
            width={65}
            height={65}
            className="
          invert brightness-0 grayscale"
          />
        </div>
        <div className="flex flex-col">
          <div className="md:text-base text-sm font-medium">
            Creator&apos;s Socials
          </div>
          <div className="flex justify-center items-center gap-2">
            <Link
              target="_blank"
              href={"https://discord.com/users/311549485434142720"}
            >
              <Discord />
            </Link>
            <Link target="_blank" href={"www.linkedin.com/in/mns21"}>
              <LinkedIn />
            </Link>
            <Link target="_blank" href={"https://github.com/m1her"}>
              <GitHub />
            </Link>
            <Link target="_blank" href={"https://www.instagram.com/m1her"}>
              <Instagram />
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-zinc-100 items-start gap-0 md:text-sm text-xs font-extralight">
          <div className="md:text-base text-sm font-medium">Links</div>
          <div>Web Development</div>
          <div>Styling</div>
          <div>AI & Teck</div>
          <div>Career Growth</div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between text-xs text-zinc-100 border-t border-zinc-100 pt-4">
        <div>© 2024 Web Development Cave. All rights reserved.</div>
        <div>By: m1her</div>
      </div>
    </div>
  );
};
