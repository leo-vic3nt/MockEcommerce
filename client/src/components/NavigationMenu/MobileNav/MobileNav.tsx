import { Menu } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import NavBtn from "@/components/NavigationMenu/NavBtn/NavBtn.tsx";

function MobileNav() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button role="menutrigger" className="focus-visible:outline-none">
					<Menu className="stroke-orange-contrast size-6" />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem className="justify-center">
					<NavBtn path={"/"}>Home</NavBtn>
				</DropdownMenuItem>

				<DropdownMenuSeparator />

				<DropdownMenuItem className="justify-center">
					<NavBtn path={"/shop"}>Shop</NavBtn>
				</DropdownMenuItem>

				<DropdownMenuSeparator />

				<DropdownMenuItem className="justify-center">
					<NavBtn path={"/about"}>About</NavBtn>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default MobileNav;
