import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
	path: string;
	children: ReactNode;
}

function NavBtn({ path, children }: Props) {
	return (
		<NavLink
			to={path}
			className={({ isActive }) =>
				// prettier-ignore
				`${isActive && "font-bold after:w-full"} after:bg-orange-500 relative leading-tight after:absolute after:bottom-0 
				after:left-0 after:h-0.5 after:w-0 after:transition-[width] after:duration-300 hover:after:w-full`
			}
		>
			{children}
		</NavLink>
	);
}

export default NavBtn;
