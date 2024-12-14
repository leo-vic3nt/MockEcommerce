interface Rating {
	rate: number;
	count: number;
}

enum ClothCategory {
	MEN = "men's clothing",
	WOMEN = "women's clothing",
}

interface ClothItem {
	id: number;
	title: string;
	price: number;
	description: string;
	category: ClothCategory;
	image: string;
	rating: Rating;
}

export type { ClothItem };
export { ClothCategory };
