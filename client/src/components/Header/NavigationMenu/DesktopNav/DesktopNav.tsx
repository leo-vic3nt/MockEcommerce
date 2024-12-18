import NavBtn from "@/components/Header/NavigationMenu/NavBtn/NavBtn.tsx";

function DesktopNav() {
	return (
		<nav className="text-md absolute left-1/2 flex -translate-x-1/2 gap-10 text-zinc-800 lg:pt-3 xl:text-xl">
			<NavBtn path={"/"}>Home</NavBtn>
			<NavBtn path={"/shop"}>Shop</NavBtn>
			<NavBtn path={"/about"}>About</NavBtn>
		</nav>
	);
}

export default DesktopNav;
