import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
    {
        id: 1,
        name: "Running",
        img: "/image/categories/category-running.png",
        href: "#"
    },
    {
        id: 2,
        name: "Tennis",
        img: "/image/categories/category-running-1.png",
        href: "#"
    },
    {
        id: 3,
        name: "Basketball",
        img: "/image/categories/category-basketball.png",
        href: "#"
    },
    {
        id: 4,
        name: "Football",
        img: "/image/categories/category-football.png",
        href: "#"
    },
    {
        id: 5,
        name: "Badminton",
        img: "/image/categories/category-badminton.png"
    },
    {
        id: 6,
        name: "Swimming",
        img: "/image/categories/category-swimming.png"
    }

]

const CategorySection = () => {
    return (
        <section id="category-section" className="container mx-auto pb-20">
            <div className="flex justify-between">
                <h2 className="font-bold text-2xl">Browse by Categories</h2>
                <Link href="#" className="flex gap-2 text-primary font-medium " >
                    See All Categories
                    <FiArrowRight className="self-center" />
                </Link>
            </div>
            <div className="grid grid-cols-6 gap-12 mt-8">
                {categoryList.map((item) => (
                    <div key={item.id} className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center">
                        <div className="self-center">
                            <Image src={item.img} alt={item.name} width={86} height={86} className="mb-[10px]" />
                            <div className="text-primary font-medium text-primary text-center">{item.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategorySection;