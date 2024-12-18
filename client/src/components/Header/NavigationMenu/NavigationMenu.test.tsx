import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavigationMenu from "@/components/Header/NavigationMenu/NavigationMenu.tsx";

vi.mock("@/components/Header/NavigationMenu/DesktopNav/DesktopNav.tsx", () => ({
	default: () => <nav data-testid="desktop-nav">Desktop Navigation</nav>,
}));

vi.mock("@/components/Header/NavigationMenu/MobileNav/MobileNav.tsx", () => ({
	default: () => <nav data-testid="mobile-nav">Mobile Navigation</nav>,
}));

describe("NavigationMenu", () => {
	test("renders DesktopNav when type is desktop", () => {
		render(
			<MemoryRouter>
				<NavigationMenu type="desktop" />
			</MemoryRouter>,
		);

		expect(screen.getByTestId("desktop-nav")).toBeInTheDocument();
		expect(screen.queryByTestId("mobile-nav")).not.toBeInTheDocument();
	});

	test("renders MobileNav when type is mobile", () => {
		render(
			<MemoryRouter>
				<NavigationMenu type="mobile" />
			</MemoryRouter>,
		);

		expect(screen.getByTestId("mobile-nav")).toBeInTheDocument();
		expect(screen.queryByTestId("desktop-nav")).not.toBeInTheDocument();
	});
});
