// @todo Move the brand component here, create the navbar using shadcn menubar and finally the cart, and search

import Brand from "@/components/Header/Brand/Brand.tsx";
import NavigationMenu from "@/components/Header/NavigationMenu/NavigationMenu.tsx";

function Header() {
	return (
		<div className="flex items-center gap-96">
			<Brand withLogoImg={true} />
			<NavigationMenu />
		</div>
	);
}

export default Header;
