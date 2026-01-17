"use client";

import CartItems from "../Components/checkout/cart-item";
import Order from "../Components/checkout/order";

const checkout = () => {
    return (
        <main className="bg-gray-100 min-h-screen">
            <div className="max-w-5xl mx-auto py-20">
                <h1 className="text-5xl font-bold text-center mb-11">Checkout Now</h1>
                <div className="grid grid-cols-2 gap-14">
                    <Order />
                    <CartItems />
                </div>
            </div>
        </main>
    )
}

export default checkout;