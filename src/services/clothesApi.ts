import axios from "axios";
import { ClothCategory, ClothItem } from "@/types/ClothItem.ts";

const apiBaseUrl = "https://fakestoreapi.com/products/category";

async function getMenClothes(): Promise<ClothItem[]> {
	const { data } = await axios.get<ClothItem[]>(`${apiBaseUrl}/${ClothCategory.men}`);
	return data;
}

async function getWomenClothes(): Promise<ClothItem[]> {
	const { data } = await axios.get<ClothItem[]>(`${apiBaseUrl}/${ClothCategory.women}`);
	return data;
}

export default { getMenClothes, getWomenClothes };
