import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MobileNav from "@/components/Header/NavigationMenu/MobileNav/MobileNav.tsx";
import userEvent from "@testing-library/user-event";

describe("MobileNav", () => {
	test("renders all navigation links", async () => {
		const user = userEvent.setup();
		render(
			<MemoryRouter>
				<MobileNav />
			</MemoryRouter>,
		);

		// This is needed since it's a Dropdown Menu
		const menuTrigger = screen.getByRole("menutrigger");
		await user.click(menuTrigger);

		const links = screen.getAllByRole("menuitem");

		expect(links).toHaveLength(3);
		expect(screen.getByText("Home")).toHaveAttribute("href", "/");
		expect(screen.getByText("Shop")).toHaveAttribute("href", "/shop");
		expect(screen.getByText("About")).toHaveAttribute("href", "/about");
	});

	test("only one link is active at a time", async () => {
		const user = userEvent.setup();
		render(
			<MemoryRouter initialEntries={["/shop"]}>
				<MobileNav />
			</MemoryRouter>,
		);

		// This is needed since it's a Dropdown Menu
		const menuTrigger = screen.getByRole("menutrigger");
		await user.click(menuTrigger);

		const links = screen.getAllByRole("link");
		const activeLinks = links.filter((link) => link.className.includes("font-bold"));

		expect(activeLinks).toHaveLength(1);
		expect(activeLinks[0]).toHaveTextContent("Shop");
	});
});
