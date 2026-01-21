import { fetchApi } from "../lib/api";
import { category } from "../types";

export const getAllCategories = async (): Promise<category[]> => {
  return await fetchApi<category[]>("/categories");
};