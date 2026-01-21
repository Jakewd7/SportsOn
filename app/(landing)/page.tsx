import Image from "next/image";
import HeroSection from "./Components/Home/Hero";
import CategorySection from "./Components/Home/Category";
import ProductSection from "./Components/Home/Product";
import { getAllCategories } from "../service/category.service";
import { getAllProducts } from "../service/product.service";

export default async function Home() {

  const categories = await getAllCategories();
  const products = await getAllProducts();
  return (
    <main>
      <HeroSection />
      <CategorySection categories={categories} />
      <ProductSection products={products} />
    </main>
  );
}
