import Image from "next/image";
import React from "react";

export const Logos = () => {
  const logos = [
    "/Logos/fliker.png",
    "/Logos/google.png",
    "/Logos/netflex.png",
    "/Logos/tagged.png",
    "/Logos/todoist.png",
    "/Logos/tumbler.png",
    "/Logos/vimeo.png",
    "/Logos/vk.png",
    "/Logos/yahoo.png",
  ];

  return (
    <div className="flex flex-col gap-y-12 items-center font-inter overflow-hidden">
      <div className="text-zinc-700 font-light text-4xl">
        Join World&apos;s Top Companies
      </div>
      <div className="w-full flex flex-nowrap overflow-hidden">
        <div className="flex animate-infinite-scroll">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="w-36 h-36 mr-4 flex-shrink-0 shadow-[0_0_10px_-2px_#00000020] bg-white rounded-lg flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={logo}
                width={100}
                height={100}
                className="w-16 h-16"
              />
            </div>
          ))}
        </div>
        <div className="flex animate-infinite-scroll">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="w-36 h-36 mr-4 flex-shrink-0 shadow-[0_0_10px_-2px_#00000020] bg-white rounded-lg flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={logo}
                width={100}
                height={100}
                className="w-16 h-16"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex -mt-8 flex-nowrap overflow-hidden">
        <div className="flex animate-infinite-scroll-rev">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="w-36 h-36 mr-4 flex-shrink-0 shadow-[0_0_10px_-2px_#00000020] bg-white rounded-lg flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={logo}
                width={100}
                height={100}
                className="w-16 h-16"
              />
            </div>
          ))}
        </div>
        <div className="flex animate-infinite-scroll-rev">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="w-36 h-36 mr-4 flex-shrink-0 shadow-[0_0_10px_-2px_#00000020] bg-white rounded-lg flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={logo}
                width={100}
                height={100}
                className="w-16 h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
