import Image from "next/image";
import Link from "next/link";
import React from "react";

export const AboutSlider = () => {
  return (
    <div className="w-full h-fit bg-white p-12">
      <div className="grid grid-cols-2 gap-12 font-roboto">
        <div className="flex flex-col gap-y-4">
          <div className="text-3xl font- text-zinc-800 font-">Take Control Over Your Exposure</div>
          <div className="text-zinc-600">
            With WUZZUF new profile you are in full control. You can make it
            public so you can use it to brand yourself, or make it visible only
            for employers to invite you to apply.
          </div>
          <Link
            href={"/"}
            className="w-fit rounded-sm h-full font-medium flex items-center justify-center transition duration-300 text-base text-white bg-primary hover:bg-[#0054ae] px-6 py-2"
          >
            Get Started Now
          </Link>
        </div>
        <div className="relative w-full ">
          <Image
            src={"/logo.png"}
            alt={"asd"}
            fill
            className="object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
};
