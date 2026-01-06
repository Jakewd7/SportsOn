import Image from "next/image";
import HeroSection from "./Components/Home/Hero";
import CategorySection from "./Components/Home/Category";
import ProductSection from "./Components/Home/Product";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <CategorySection/>
      <ProductSection/>
    </main>
  );
}
