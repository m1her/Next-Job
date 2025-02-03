import { AboutSlider } from "@/components/HomePage/AboutSlider";
import { Hero } from "@/components/HomePage/Hero";
import { Logos } from "@/components/HomePage/Logos";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8 pb-8 ">
      <NavBar />
      <Hero />
      <Logos />
      <AboutSlider />
      <div className="h-screen"></div>
    </div>
  );
}
