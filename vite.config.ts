import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "tests/setup.js"
	},


	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
