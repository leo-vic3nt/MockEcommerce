import NavBtn from "@/components/Header/NavigationMenu/NavBtn.tsx";

function NavigationMenu() {
	return (
		<nav className="text-zinc-800 absolute left-1/2 flex -translate-x-1/2 gap-10 lg:pt-3 text-md xl:text-xl">
			<NavBtn path={"/"}>Home</NavBtn>
			<NavBtn path={"/shop"}>Shop</NavBtn>
			<NavBtn path={"/about"}>About</NavBtn>
		</nav>
	);
}

export default NavigationMenu;
