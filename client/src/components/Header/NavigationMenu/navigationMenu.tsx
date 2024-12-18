import DesktopNav from "@/components/Header/NavigationMenu/DesktopNav/DesktopNav.tsx";
import MobileNav from "@/components/Header/NavigationMenu/MobileNav/MobileNav.tsx";

type LayoutTypes = "desktop" | "mobile";

interface Props {
	type: LayoutTypes;
}

function NavigationMenu({ type }: Props) {
	if (type === "desktop") {
		return <DesktopNav />;
	}

	return <MobileNav />;
}

export default NavigationMenu;
