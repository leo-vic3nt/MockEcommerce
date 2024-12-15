import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Brand from "./Brand";

describe("Brand", () => {
	test("navigates to root when clicked", async () => {
		const user = userEvent.setup();
		window.history.pushState({}, "", "/some-other-page");
		render(
			<BrowserRouter>
				<Brand withLogoImg={false} />
			</BrowserRouter>,
		);
		const brandLink = screen.getByRole("link");

		expect(brandLink.getAttribute("href")).toBe("/");
		await user.click(brandLink);
		expect(window.location.pathname).toBe("/");
	});

	test("renders logo image when withLogoImg is true", () => {
		render(
			<BrowserRouter>
				<Brand withLogoImg={true} />
			</BrowserRouter>,
		);

		const logoImage = screen.getByRole("img", { name: "logo image" });
		expect(logoImage).toBeInTheDocument();
		expect(logoImage).toHaveAttribute("src", expect.stringContaining("logo.svg"));
	});

	test("does not render logo image when withLogoImg is false", () => {
		render(
			<BrowserRouter>
				<Brand withLogoImg={false} />
			</BrowserRouter>,
		);

		const logoImage = screen.queryByRole("img");
		expect(logoImage).not.toBeInTheDocument();
	});
});
