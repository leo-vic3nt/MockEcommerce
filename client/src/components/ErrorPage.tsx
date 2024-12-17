import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import PrimaryButton from "@/components/PrimaryButton.tsx";

function ErrorPage() {
	return (
		<div className="bg-background-cream flex min-h-screen items-center justify-center">
			<Card className="border-black bg-white border-2 shadow">
				<CardHeader>
					<CardTitle className="font-cooperBlack font-normal">404 - Not Found</CardTitle>
					<CardDescription className="text-gray-800 text-center">There is nothing here...</CardDescription>
				</CardHeader>

				<CardFooter className="flex justify-center">
					<PrimaryButton asChild>
						<Link to="/">Go back</Link>
					</PrimaryButton>
				</CardFooter>
			</Card>
		</div>
	);
}

export default ErrorPage;
