import { FiCreditCard } from "react-icons/fi";
import CardHeader from "../ui/cartheader";
import { getAllBanks } from "@/app/service/bank.service";

const PaymentOptions = async () => {
    const banks = await getAllBanks();

    return (
        <CardHeader title="payment options">
            {
                banks.map((item) => (
                    <div className="flex gap-5 p-5 border-b border-gray-100" key={item._id}>
                        <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
                            <FiCreditCard size={24} />
                        </div>
                        <div className="self-center">
                            <div className="font-bold">{item.bankName}</div>
                            <div className="text-sm">{item.accountNumber}</div>
                            <div className="text-sm">{item.accountName}</div>
                        </div>
                        <div className="ml-auto bg-blue-50 text-gray-800 text-xs h-fit self-center px-2 py-1">
                            Bank Transfer
                        </div>
                    </div>
                ))
            }
        </CardHeader>
    )
}

export default PaymentOptions