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

	return <div className="bg-background-cream min-h-screen">ayy bro</div>;
}

export default App;
