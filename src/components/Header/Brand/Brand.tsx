import logoImg from "@/assets/icons/logo.svg";
import { Link } from "react-router-dom";

interface Props {
	withLogoImg: boolean;
}

function Brand({ withLogoImg = false }: Props) {
	return (
		<Link to={"/"}>
			<div className="flex flex-nowrap items-center justify-center">
				{withLogoImg && <img className="size-14 pt-1 lg:size-16" src={logoImg} alt="logo image" />}
				<h1 className="whitespace-nowrap font-cooperBlack text-4xl lowercase lg:text-5xl">
					nice orange<span className="text-orange-contrast">.</span>
				</h1>
			</div>
		</Link>
	);
}

export default Brand;
