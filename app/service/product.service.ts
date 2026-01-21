import { fetchApi } from "../lib/api";
import { product } from "../types";

export const getAllProducts = async (): Promise<product[]> => {
  return await fetchApi<product[]>("/products");
};

export const getProductDetail = async (id: string): Promise<product> => {
  return await fetchApi<product>(`/products/${id}`);
};