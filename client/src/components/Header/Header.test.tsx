import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "@/components/Header/index.tsx";

vi.mock("@/hooks/useMediaQuery", () => ({
	default: vi.fn(() => true),
}));

describe("Header", () => {
	it("matches snapshot", () => {
		const { container } = render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>,
		);
		expect(container).toMatchSnapshot();
	});
});
