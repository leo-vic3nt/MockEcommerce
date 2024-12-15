import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { ButtonProps } from "@/components/ui/button";

interface CustomButtonProps extends ButtonProps {
	children: React.ReactNode;
	className?: string;
}

const PrimaryButton = ({ children, className, variant = "default", ...props }: CustomButtonProps) => {
	return (
		<Button
			variant={variant}
			className={cn(
				"bg-orange-contrast hover:bg-orange-contrast border-black select-none rounded-none border px-8 py-4 shadow-[0_0_0_#152F3E]",
				"font-semibold transition-all duration-200 ease-in-out hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[0.5rem_0.5rem_0_#152F3E]",
				className,
			)}
			{...props}
		>
			{children}
		</Button>
	);
};

export default PrimaryButton;
