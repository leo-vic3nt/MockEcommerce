import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";

import NavBtn from "./NavBtn.tsx";
import userEvent from "@testing-library/user-event";

describe("NavBtn", () => {
	test("has correct link destination", () => {
		render(
			<MemoryRouter>
				<NavBtn path="/test">Test Link</NavBtn>
			</MemoryRouter>,
		);

		const link = screen.getByRole("link");

		expect(link).toHaveAttribute("href", "/test");
	});

	test("applies active class when route matches", () => {
		render(
			<MemoryRouter initialEntries={["/test"]}>
				<NavBtn path="/test">Test Link</NavBtn>
			</MemoryRouter>,
		);

		const link = screen.getByRole("link");

		expect(link.className).toContain("font-bold");
		expect(link.className).toContain("after:w-full");
	});

	test("doesn't apply active classes when route doesn't match", () => {
		render(
			<MemoryRouter initialEntries={["/other"]}>
				<NavBtn path="/test">Test Link</NavBtn>
			</MemoryRouter>,
		);

		const link = screen.getByRole("link");

		expect(link.className).not.toContain("font-bold");
	});

	test("navigation works", async () => {
		const user = userEvent.setup();

		render(
			<MemoryRouter initialEntries={["/"]}>
				<Routes>
					<Route path="/" element={<NavBtn path="/shop">Shop</NavBtn>} />
					<Route path="/shop" element={<div>Shop Page</div>} />
				</Routes>
			</MemoryRouter>,
		);
		const shopLink = screen.getByText("Shop");

		await user.click(shopLink);
		expect(screen.getByText("Shop Page")).toBeInTheDocument();
	});
});
