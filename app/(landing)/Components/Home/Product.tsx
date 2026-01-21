"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import { product } from "@/app/types";
import { useCartStore } from "@/app/hooks/usecartstore";
import { getImageUrl } from "@/app/lib/api";

type TProductProps = {
  products: product[];
}

const ProductSection = ({ products = [] }: TProductProps) => {
  const { addItem } = useCartStore();

  const handleAddCart = (e: React.MouseEvent, product: product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  }
  return (
    <section id="products-section" className="mx-auto mt-32 mb-52">
      <h2 className="italic font-bold text-4xl text-center mb-11"><span className="text-primary">OUR </span>PRODUCTS</h2>
      <div className="grid grid-cols-4 gap-5">
        {
          products.map((item) => (
            <Link href={`product/${item._id}`} key={item._id} className="p-1.5 bg-white hover:drop-shadow-xl duration-300">
              <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
                <Image src={getImageUrl(item.imageUrl)} alt={item.name} width={300} height={300} className="Aspect-square object-contain" />
                <Button className="w-10 h-10 p-2! absolute right-3 top-3"
                  onClick={(e) => handleAddCart(e, item)}>
                  <FiPlus size={24} />
                </Button>
              </div>
              <h3 className="font-medium text-lg mb-1.5 mt-4">
                {item.name}
              </h3>
              <div className="flex justify-between mb-8">
                <div className="text-gray-500">{item.category.name}</div>
                <div className="text-primary font-medium">{Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumSignificantDigits: 3 }).format(item.price)}</div>
              </div>
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default ProductSection;