import { fetchApi } from "../lib/api";
import { transaction } from "../types";

export const transactionCheckout = async (
  form: FormData
): Promise<transaction> => {
  return await fetchApi<transaction>("/transactions/checkout", {
    method: "POST",
    body: form,
  });
};

export const getTransactionById = async (id: string): Promise<transaction> => {
  return await fetchApi<transaction>(`/transactions/${id}`);
};