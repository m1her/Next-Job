import PageWithTransition from "@/components/PageWithTransition";
import React from "react";

export default function HunterTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <PageWithTransition>{children}</PageWithTransition>
    </div>
  );
}
