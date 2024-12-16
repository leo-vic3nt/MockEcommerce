import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";

import NavigationMenu from "./NavigationMenu";

describe("NavigationMenu", () => {
	test("renders all navigation links", () => {
		render(
			<MemoryRouter>
				<NavigationMenu />
			</MemoryRouter>,
		);

		const links = screen.getAllByRole("link");

		expect(links).toHaveLength(3);
		expect(screen.getByText("Home")).toHaveAttribute("href", "/");
		expect(screen.getByText("Shop")).toHaveAttribute("href", "/shop");
		expect(screen.getByText("About")).toHaveAttribute("href", "/about");
	});

	test("only one link is active at a time", () => {
		render(
			<MemoryRouter initialEntries={["/shop"]}>
				<NavigationMenu />
			</MemoryRouter>,
		);

		const links = screen.getAllByRole("link");
		const activeLinks = links.filter(
			(link) => link.className.includes("font-bold") && link.className.includes("after:w-full"),
		);

		expect(activeLinks).toHaveLength(1);
		expect(activeLinks[0]).toHaveTextContent("Shop");
	});
});
