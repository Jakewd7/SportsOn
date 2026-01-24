"use client";

import Button from "@/app/(landing)/Components/ui/button";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import CategoryModal from "../../components/categories/category-modal";
import CategoryTable from "../../components/categories/category-table";

const Categories = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Category Management</h1>
                    <p className="opacity-50">Organize your products into categories</p>
                </div>
                <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
                    <FiPlus size={24} />
                    Add Category
                </Button>
            </div>
            <CategoryModal isOpen={isOpen} onClose={handleCloseModal} />
            <CategoryTable />
        </div>
    )
}

export default Categories;