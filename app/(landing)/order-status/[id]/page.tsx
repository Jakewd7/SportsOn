import { getTransactionById } from "@/app/service/transaction.service";
import OrderConfirmed from "../../Components/order-status/confirmed";
import OrderSubmitted from "../../Components/order-status/submitted";
import { TPageProps } from "../../product/[id]/page";
import OrderRejected from "../../Components/order-status/rejected";

const OrderStatus = async ({ params }: TPageProps) => {
    const { id } = await params;

    const transaction = await getTransactionById(id);
    console.log("transaction", transaction);

    return (
        <main className="bg-gray-100 min-h-[80vh]">
            <div className="max-w-5xl mx-auto py-20 pb-32">
                <h1 className="text-5xl font-bold text-center mb-11">Order Status</h1>
                {transaction.status === "pending" && <OrderSubmitted />}
                {transaction.status === "paid" && <OrderConfirmed />}
                {transaction.status === "rejected" && <OrderRejected />}
            </div>
        </main>
    );
};

export default OrderStatus;