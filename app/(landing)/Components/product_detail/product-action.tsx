"use client";

import { FiArrowRight, FiChevronDown, FiChevronUp, FiShoppingBag } from "react-icons/fi"
import Button from "../ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { product } from "@/app/types"
import { useCartStore } from "@/app/hooks/usecartstore";

type TProductActionsProps = {
    product: product;
    stock: number;
}

const ProductAction = ({ product }: TProductActionsProps) => {

    const { addItem } = useCartStore();
    const { push } = useRouter();
    const [qty, setQty] = useState(1);

    const handleAddToCart = () => {
        addItem(product, qty);
    };

    const handleCheckout = () => {
        addItem(product);
        push("/checkout");
    };

    return (
        <div className="flex gap-5">
            <div className="border border-gray-500 inline-flex w-fit min-w-20.5">
                <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center">
                    <span>{qty}</span>
                </div>
                <div className="flex flex-col">
                    <button
                        className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center"
                        onClick={() => setQty(qty + 1)}
                    >
                        <FiChevronUp />
                    </button>
                    <button
                        className="cursor-pointer h-1/2 aspect-square flex items-center justify-center"
                        onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
                    >
                        <FiChevronDown />
                    </button>
                </div>
            </div>
            <Button className="px-20 w-full" onClick={handleAddToCart}>
                <FiShoppingBag size={20} />
                add to cart
            </Button>
            <Button variant="dark" className="px-20 w-full" onClick={handleCheckout}>
                Checkout now
                <FiArrowRight size={24} />
            </Button>
        </div>
    )
}

export default ProductAction