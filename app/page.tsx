import Catagory from "@/components/homecomps/Catagory";
import HeroSection from "@/components/homecomps/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-900 h-screen">
      <HeroSection />
      <Catagory/>
    </div>
  );
}
