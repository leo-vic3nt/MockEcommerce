interface Rating {
	rate: number;
	count: number;
}

enum ClothCategory {
	men = "men's clothing",
	women = "women's clothing",
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
