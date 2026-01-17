"use client";

import { FiCheckCircle } from "react-icons/fi";
import priceFormatter from "../../utils/formatter";
import Button from "../ui/button";
import CardHeader from "../ui/cartheader"
import { useRouter } from "next/navigation";
import FileUpload from "../ui/fileupload";

const PaymentStep = () => {

    const { push } = useRouter();
    const uploadAndConfirm = () => {
        push("/order-status/1127127131212")
    }
    return (
        <CardHeader title="payment list">
            <div className="p-5">
                <ol className="list-decimal text-ls pl-2 flex flex-col gap-4 mb-5">
                    <li>
                        Transfer the total amount of <b>Rp. 1.035.000</b> to your preferred
                        bank account listed under 'Payment Options' (BCA, Mandiri, or BTPN).
                    </li>
                    <li>
                        After completing the transfer, <b>keep the payment receipt</b> or a
                        screenshot of the transfer confirmation. This will be needed for the
                        next step.
                    </li>
                    <li>
                        Upload the payment receipt/screenshot using the{" "}
                        <b>'Upload Receipt & Confirm'</b> button below to validate your
                        transaction.
                    </li>
                </ol>
                <FileUpload />
            </div>
            <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between font-semibold">
                    <div className="text-sm">Total</div>
                    <div className="text-primary text-xs">{priceFormatter(45000)}</div>
                </div>
                <Button
                    variant="dark"
                    className="w-full mt-4"
                    onClick={uploadAndConfirm}
                >
                    <FiCheckCircle />
                    Upload Receipt & Confirm
                </Button>
            </div>
        </CardHeader>
    )
}

export default PaymentStep;