import { Footer } from "@/components/Footer";
import { AboutSlider } from "@/components/HomePage/AboutSlider";
import { Hero } from "@/components/HomePage/Hero";
import { LatestJobs } from "@/components/HomePage/LatestJobs";
import { Logos } from "@/components/HomePage/Logos";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12 ">
      <NavBar />
      <Hero />
      <Logos />
      <AboutSlider />
      <LatestJobs />
      <Footer />
    </div>
  );
}
