"use client";

import Button from "@/app/(landing)/Components/ui/button";
import { useState } from "react"
import { FiPlus } from "react-icons/fi";
import BankInfoList from "../../components/bank/bankTable";
import BankModal from "../../components/bank/bankModal";

const BankInfo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Bank Info Management</h1>
                    <p className="opacity-50">
                        Manage destination accounts for customer transfers.
                    </p>
                </div>
                <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
                    <FiPlus size={24} />
                    Add Bank Account
                </Button>
            </div>
            <BankInfoList />
            <BankModal isOpen={isOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default BankInfo;

