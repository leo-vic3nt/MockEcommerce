import logoImg from "@/assets/icons/logo.svg";
import { Link } from "react-router-dom";

interface Props {
	withLogoImg: boolean;
}

function Brand({ withLogoImg = false }: Props) {
	return (
		<Link to={"/"}>
			<div className="flex flex-nowrap items-center justify-center">
				{withLogoImg && <img className="-mr-1.5 size-10 lg:size-14 pt-1 xl:size-16" src={logoImg} alt="logo image" />}
				<h1 className="whitespace-nowrap font-cooperBlack text-2xl lowercase lg:text-3xl xl:text-5xl">
					nice orange<span className="text-orange-contrast">.</span>
				</h1>
			</div>
		</Link>
	);
}

export default Brand;
