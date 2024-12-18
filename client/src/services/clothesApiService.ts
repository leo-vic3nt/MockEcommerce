import axios from "axios";

import { Shoe } from "@/types/Shoe.ts";
import { apiBaseUrl } from "@/lib/utils.ts";

async function getAllShoes(): Promise<Shoe[]> {
	const { data } = await axios.get<Shoe[]>(`${apiBaseUrl}/shoes`);
	return data;
}

async function getShoeById(id: number): Promise<Shoe[]> {
	const { data } = await axios.get<Shoe[]>(`${apiBaseUrl}/shoes/${id}`);
	return data;
}

export default { getAllShoes, getShoeById };
