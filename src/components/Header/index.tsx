import Brand from "@/components/Header/Brand/Brand.tsx";
import NavigationMenu from "@/components/Header/NavigationMenu/NavigationMenu.tsx";
import FavoritesTracker from "@/components/Header/FavoritesTracker/FavoritesTracker.tsx";
import CartIcon from "@/components/Header/CartIcon/CartIcon.tsx";

function Header() {
	return (
		<div className="mx-auto flex items-center justify-between">
			<Brand withLogoImg={true} />
			<NavigationMenu />
			<div className="flex items-center lg:pt-3 gap-4 pr-5">
				<FavoritesTracker />
				<CartIcon />
			</div>
		</div>
	);
}

export default Header;
