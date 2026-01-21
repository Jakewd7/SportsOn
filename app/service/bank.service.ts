import { fetchApi } from "../lib/api";
import { bank } from "../types";

export const getAllBanks = async (): Promise<bank[]> => {
  return await fetchApi<bank[]>("/banks");
};