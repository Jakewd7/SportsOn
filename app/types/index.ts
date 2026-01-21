export interface category  {
    _id: string
    name: string
    description: string
    imageUrl: string
    updatedAt: string
    createdAt: string
}

export interface bank {
    _id: string
    bankName: string
    accountName: string
    accountNumber: number
    createdAt: string
    updatedAt: string
}

export interface product {
    _id: string
    name: string
    description: string
    category: category
    stock: number
    price: number
    imageUrl: string
    createdAt: string
    updatedAt: string
}

export interface transaction {
  _id: string;
  paymentProof: string;
  status: "pending" | "paid" | "rejected";
  purchasedItems: {
    productId: string;
    qty: number;
  };
  totalPayment: string;
  customerName: string;
  customerContact: number | null;
  customerAddress: string;
  createdAt: string;
  updatedAt: string;
}
