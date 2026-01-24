"use client";

import Button from "@/app/(landing)/Components/ui/button";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import ProductModal from "../../components/products/products-modal";
import ProductTable from "../../components/products/products-table";

const Products = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Product Management</h1>
                    <p className="opacity-50">Organize your products</p>
                </div>
                <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
                    <FiPlus size={24} />
                    Add Product
                </Button>
            </div>
            <ProductModal isOpen={isOpen} onClose={handleCloseModal} />
            <ProductTable />
        </div>
    )
}

export default Products;