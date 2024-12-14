import { useQuery } from "@tanstack/react-query";

import clothesService from "@/services/clothesApiService.ts";
import { ClothCategory } from "@/types/ClothItem.ts";

function App() {
	const menClothesQuery = useQuery({
		queryKey: ["clothes", ClothCategory.MEN],
		queryFn: clothesService.getMenClothes,
	});

	const womenClothesQuery = useQuery({
		queryKey: ["clothes", ClothCategory.WOMEN],
		queryFn: clothesService.getWomenClothes,
	});

	if (menClothesQuery.isSuccess && womenClothesQuery.isSuccess) {
		console.log(menClothesQuery.data, womenClothesQuery.data);
	}

	return <div></div>;
}

export default App;
