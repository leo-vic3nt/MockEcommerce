import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import Brand from "./Brand";

describe("Brand", () => {
	test("navigates to root when clicked", async () => {
		const user = userEvent.setup();
		render(
			<MemoryRouter initialEntries={["/shop"]}>
				<Routes>
					<Route path="/" element={<div>Home Page</div>} />
					<Route path="/shop" element={<Brand withLogoImg={false} />} />
				</Routes>
			</MemoryRouter>,
		);
		const brandLink = screen.getByRole("link");

		expect(brandLink.getAttribute("href")).toBe("/");
		await user.click(brandLink);
		expect(screen.getByText("Home Page")).toBeInTheDocument();
	});

	test("renders logo image when withLogoImg is true", () => {
		render(
			<MemoryRouter>
				<Brand withLogoImg={true} />
			</MemoryRouter>,
		);

		const logoImage = screen.getByRole("img", { name: "logo image" });
		expect(logoImage).toBeInTheDocument();
		expect(logoImage).toHaveAttribute("src", expect.stringContaining("logo.svg"));
	});

	test("does not render logo image when withLogoImg is false", () => {
		render(
			<MemoryRouter>
				<Brand withLogoImg={false} />
			</MemoryRouter>,
		);

		const logoImage = screen.queryByRole("img");
		expect(logoImage).not.toBeInTheDocument();
	});
});
