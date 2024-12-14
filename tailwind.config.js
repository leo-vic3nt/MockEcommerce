/** @type {import("tailwindcss").Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			cooperBlack: ["Cooper Black", "ui-sans-serif"],
		},

		colors: {
			contrastOrange: "#F85F4F",
		},

		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
