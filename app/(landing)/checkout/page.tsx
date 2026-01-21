"use client";

import { useRouter } from "next/navigation";
import CartItems from "../Components/checkout/cart-item";
import Order from "../Components/checkout/order";
import { CustomerInfo, useCartStore } from "@/app/hooks/usecartstore";
import { useState } from "react";

const Checkout = () => {

    const { push } = useRouter();
    const { setCustomerInfo } = useCartStore();
    const [formData, setFormData] = useState<CustomerInfo>({
        customerName: "",
        customerAddress: "",
        customerContact: null,
    });

    const handlePayment = () => {
        if (
            !formData.customerName ||
            !formData.customerContact ||
            !formData.customerAddress
        ) {
            alert("please fill in all fields");
            return;
        }

        setCustomerInfo(formData);
        push("/payment");
    };


    return (
        <main className="bg-gray-100 min-h-screen">
            <div className="max-w-5xl mx-auto py-20">
                <h1 className="text-5xl font-bold text-center mb-11">Checkout Now</h1>
                <div className="grid grid-cols-2 gap-14">
                    <Order formData={formData} setFormData={setFormData} />
                    <CartItems handlePayment={handlePayment} />
                </div>
            </div>
        </main>
    )
}

export default Checkout;