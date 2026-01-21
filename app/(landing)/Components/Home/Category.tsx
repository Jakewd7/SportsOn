import { getImageUrl } from "@/app/lib/api";
import { category } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type TCategoriesProps = {
    categories: category[];
}


const CategorySection = ({ categories = [] }: TCategoriesProps) => {
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
                {categories.map((item) => (
                    <div key={item._id} className="rounded-lg bg-linear-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center">
                        <div className="self-center">
                            <Image src={getImageUrl(item.imageUrl)} alt={item.name} width={86} height={86} className="mb-2.5" />
                            <div className="font-medium text-primary text-center">{item.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategorySection;