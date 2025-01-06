import { useQuery } from "@tanstack/react-query";

import shoesService from "@/services/clothesApiService.ts";
import Header from "@/components/Header";

function App() {
	const shoesQuery = useQuery({
		queryKey: ["shoes"],
		queryFn: shoesService.getAllShoes,
	});

	return (
		<div className="bg-background-cream min-h-screen px-1 py-2 lg:px-6 lg:py-2 2xl:px-12 2xl:py-4">
			<Header />
		</div>
	);
}	

export default App;
