import logoImg from "../assets/icons/logo.svg";

interface Props {
	withLogoImg: boolean;
}

function Brand({ withLogoImg = false }: Props) {
	return (
		<div className="flex justify-center items-center w-fit">
			{withLogoImg && <img className="size-14 pt-1 lg:size-16 " src={logoImg} alt="ayy" />}
			<h1 className="text-4xl lg:text-5xl font-cooperBlack lowercase">
				nice orange<span className="text-contrastOrange">.</span>
			</h1>
		</div>
	);
}

export default Brand;
