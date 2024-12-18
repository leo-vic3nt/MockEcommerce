import Brand from "@/components/Header/Brand/Brand.tsx";
import NavigationMenu from "@/components/Header/NavigationMenu/navigationMenu.tsx";
import FavoritesTracker from "@/components/Header/FavoritesTracker/FavoritesTracker.tsx";
import CartIcon from "@/components/Header/CartIcon/CartIcon.tsx";
import useMediaQuery from "@/hooks/useMediaQuery.tsx";
import { isDesktopMediaQueryString } from "@/lib/utils.ts";

function Header() {
	const isDesktop = useMediaQuery(isDesktopMediaQueryString);

	return (
		<div className="mx-auto flex items-center justify-between">
			<Brand withLogoImg={true} />
			{isDesktop && <NavigationMenu type="desktop" />}
			<div className="flex items-center gap-4 pr-5 lg:pt-3">
				{!isDesktop && <NavigationMenu type="mobile" />}
				<FavoritesTracker />
				<CartIcon />
			</div>
		</div>
	);
}

export default Header;
