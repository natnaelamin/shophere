"use client"

import AllProduct from "@/components/homecomps/AllProduct";
import Category from "@/components/homecomps/Category";
import HeroSection from "@/components/homecomps/HeroSection";
import { useState } from "react";

export default function Home() {
  const [productCategory, setProductCategory] = useState<string | undefined>(undefined);

  const HandleCategory = (category: string) => {
    setProductCategory(category);
};
  return (
    <div className="bg-slate-900 ">
      <HeroSection />
      <Category HandleCategory={HandleCategory}/>
      <AllProduct productCategory={productCategory}/>
    </div>
  );
}
