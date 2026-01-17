import PaymentOptions from "../Components/payment/payment-options"
import PaymentStep from "../Components/payment/payment-step"

const Payment = () => {
    return (
        <main className="bg-gray-100 min-h-[80vh">
            <div className="max-w-5xl mx-auto py-20">
                <h1 className="text-5xl font-bold text-center mb-11">Payment</h1>
                <div className="grid grid-cols-2 gap-14 items-start">
                    <PaymentOptions />
                    <PaymentStep />
                </div>
            </div>
        </main>
    )
}

export default Payment;