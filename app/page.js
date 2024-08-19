import CategoryRepresentWomen from "./_components/CategoryRepresentWomen";
import CategoryRepresentMen from "./_components/CategoryRepresentMen";
import CategorySection from "./_components/CategorySection";
import HeroSlider from "./_components/Hero";
import ProductsSection from "./_components/ProductsSection/ProductsSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSlider />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsSection />
      </Suspense>
      <CategoryRepresentWomen />
      <CategoryRepresentMen />
      <CategorySection />
    </div>
  );
}
