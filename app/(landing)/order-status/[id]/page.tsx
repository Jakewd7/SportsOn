"use client";

import { useState } from "react"
import OrderConfirmed from "../../Components/order-status/confirmed";
import OrderSubmitted from "../../Components/order-status/submitted";

const OrderStatus = () => {
    const [isConfirmed, setIsConfirmed] = useState(true);

    return (
        <main className="bg-gray-100 min-h-[80vh]">
            <div className="max-w-5xl mx-auto py-20 pb-32">
                <h1 className="text-5xl font-bold text-center mb-11">Order Status</h1>
                {isConfirmed ? <OrderConfirmed /> : <OrderSubmitted />}
            </div>
        </main>

    )
}

export default OrderStatus;