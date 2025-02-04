import Image from "next/image";
import Link from "next/link";
import React from "react";

export const AboutSlider = () => {
  return (
    <div className="w-full h-fit px-12">
      <div className="grid grid-cols-2 gap-12 font-roboto">
        <div className="bg-gradient-to-br from-primary to-primary via-[#bcdafb] p-2 rounded-2xl shadow-[0_0_10px_-2px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col col-span-2 gap-y-4 p-10 rounded-xl bg-white">
            <div className="text-[40px] leading-[44px] text-zinc-800 font-light">
              Take Control Over Your Exposure
            </div>
            <div className="text-zinc-600">
              With WUZZUF new profile you are in full control. You can make it
              public so you can use it to brand yourself, or make it visible
              only for employers to invite you to apply.
            </div>
            <Link
              href={"/"}
              className="w-fit rounded-sm font-medium flex items-center justify-center transition duration-300 text-base text-white bg-primary hover:bg-[#0054ae] px-6 py-2"
            >
              Get Started Now
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 bg-white p-12 rounded-2xl shadow-[0_0_10px_-2px_rgba(0,0,0,0.1)]">
          <div className="text-[40px] leading-[44px] text-zinc-800 font-light">
            Take Control Over Your Exposure
          </div>
          <div className="text-zinc-600">
            With WUZZUF new profile you are in full control. You can make it
            public so you can use it to brand yourself, or make it visible only
            for employers to invite you to apply.
          </div>
          <Link
            href={"/"}
            className="w-fit rounded-sm font-medium flex items-center justify-center transition duration-300 text-base text-white bg-primary hover:bg-[#0054ae] px-6 py-2"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};
