import logoImg from "../assets/icons/logo.svg";

interface Props {
	withLogoImg: boolean;
}

function Brand({ withLogoImg = false }: Props) {
	return (
		<div className="flex w-fit items-center justify-center">
			{withLogoImg && <img className="size-14 pt-1 lg:size-16" src={logoImg} alt="ayy" />}
			<h1 className="font-cooperBlack text-4xl lowercase lg:text-5xl">
				nice orange<span className="text-orange-contrast">.</span>
			</h1>
		</div>
	);
}

export default Brand;
