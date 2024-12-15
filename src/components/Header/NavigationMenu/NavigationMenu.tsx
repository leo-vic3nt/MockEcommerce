import NavBtn from "@/components/Header/NavigationMenu/NavBtn.tsx";

function NavigationMenu() {
	return (
		<nav className="text-zinc-800 flex gap-10 pt-4 text-lg">
			<NavBtn path={"/"}>Home</NavBtn>
			<NavBtn path={"/shop"}>Shop</NavBtn>
			<NavBtn path={"/about"}>About</NavBtn>
		</nav>
	);
}

export default NavigationMenu;
