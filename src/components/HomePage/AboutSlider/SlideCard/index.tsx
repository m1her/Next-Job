import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SlideCard = ({
  title,
  text,
  imageHref,
}: {
  title: string;
  text: string;
  imageHref: string;
}) => {
  return (
    <div className="w-full rounded-xl overflow-hidden flex-shrink-0 p-2">
      <div className="shadow-[0_0_15px_-5px_rgba(0,0,0,0.1)] overflow-hidden lg:grid lg:grid-cols-2 bg-white rounded-lg grid-cols-1 flex flex-col justify-between w-full h-full">
        <div className="flex flex-col rounded-l-xl lg:gap-10 md:gap-8 gap-6 bg-white p-12">
          <div className="text-zinc-700 lg:text-5xl md:text-4xl text-3xl font-inter font-light">
            {title}
          </div>
          <div className="font-roboto text-zinc-500 lg:text-lg text-base font-">
            {text}
          </div>
          <div className="w-full flex justify-start">
            <Link
              href={"/"}
              className="rounded-sm h-full font-medium flex items-center justify-center transition duration-300 text-base text-white bg-primary hover:bg-[#0054ae] px-6 py-2"
            >
              Get Started Now
            </Link>
          </div>
        </div>
        <div className="w-full bg-white lg:min-h-[450px] lg:aspect-auto md:aspect-[5/2] aspect-square object-cover object-center relative rounded-xl overflow-hidden shadow-[10px_0_20px_0px_rgba(0,0,0,0.2)]">
          <Image src={imageHref} alt={"title"} fill className="object-contain object-center" />
        </div>
      </div>
    </div>
  );
};
