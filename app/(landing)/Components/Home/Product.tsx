import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";

const productList = [
  {
    id: 1,
    name: "Sportson Runner Pro",
    img: "/image/Products/product-1.png",
    price: 279000,
    category: "Running",
  },
  {
    id: 2,
    name: "Sportson Speed Flex",
    img: "/image/Products/product-2.png",
    price: 349000,
    category: "Running",
  },
  {
    id: 3,
    name: "Sportson Court Master",
    img: "/image/Products/product-3.png",
    price: 399000,
    category: "Tennis",
  },
  {
    id: 4,
    name: "Sportson Smash Pro",
    img: "/image/Products/product-4.png",
    price: 429000,
    category: "Tennis",
  },
  {
    id: 5,
    name: "Sportson Goal Strike",
    img: "/image/Products/product-5.png",
    price: 459000,
    category: "Football",
  },
  {
    id: 6,
    name: "Sportson Field Control",
    img: "/image/Products/product-6.png",
    price: 499000,
    category: "Football",
  },
  {
    id: 7,
    name: "Sportson Light Runner",
    img: "/image/Products/product-1.png",
    price: 259000,
    category: "Running",
  },
  {
    id: 8,
    name: "Sportson Power Kick",
    img: "/image/Products/product-2.png",
    price: 389000,
    category: "Football",
  },
];

const ProductSection = () => {
  return (
    <section id="products-section" className="mx-auto mt-32 mb-52">
      <h2 className="italic font-bold text-4xl text-center mb-11"><span className="text-primary">OUR </span>PRODUCTS</h2>
      <div className="grid grid-cols-4 gap-5">
        {
          productList.map((item) => (
            <Link href={`product/${item.id}`} key={item.id} className="p-1.5 bg-white hover:drop-shadow-xl duration-300">
              <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
                <Image src={item.img} alt={item.name} width={300} height={300} className="Aspect-square object-contain" />
                <Button className="w-10 h-10 p-2! absolute right-3 top-3">
                  <FiPlus size={24} />
                </Button>
              </div>
              <h3 className="font-medium text-lg mb-1.5 mt-4">
                {item.name}
              </h3>
              <div className="flex justify-between mb-8">
                <div className="text-gray-500">{item.category}</div>
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