import { FiCreditCard } from "react-icons/fi";
import CardHeader from "../ui/cartheader";

const PaymentOptions = () => {

    const paymentlist = [
        {
            id: 1,
            bank_name: "BCA",
            account_number: 1231231231231,
            account_holder: "PT SportsOn Digital",
        },
        {
            id: 2,
            bank_name: "Mandiri",
            account_number: 89458434,
            account_holder: "PT SportsOn Digital",
        },
        {
            id: 3,
            bank_name: "BRI",
            account_number: 123891283912,
            account_holder: "PT SportsOn Digital",
        },
    ];
    return (
        <CardHeader title="payment options">
            {
                paymentlist.map((item) => (
                    <div className="flex gap-5 p-5 border-b border-gray-100" key={item.id}>
                        <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
                            <FiCreditCard size={24} />
                        </div>
                        <div className="self-center">
                            <div className="font-bold">{item.bank_name}</div>
                            <div className="text-sm">{item.account_number}</div>
                            <div className="text-sm">{item.account_holder}</div>
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