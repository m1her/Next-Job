import Image from "next/image";
import React from "react";

export default function HunterTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Image src={"/hunterBg.png"} alt={"bg"} fill className="-z-30 brightness-75" />
      <div className="w-full h-full absolute -z-10 bg-primary/25"></div>
      {children}
    </div>
  );
}
