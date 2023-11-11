import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		// colors: {
		// 	dun: "#e8d2b1ff",
		// 	platinum: "#ebebe8ff",
		// 	"sandy-brown": "#f1a771ff",
		// 	flame: "#e96838ff",
		// 	"cambridge-blue": "#6ea69dff",
		// 	"ndigo-dye": "#0b3d64ff",
		// },
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				dun: "#e8d2b1ff",
				platinum: "#ebebe8ff",
				"sandy-brown": "#f1a771ff",
				flame: "#e96838ff",
				"cambridge-blue": "#6ea69dff",
				"ndigo-dye": "#0b3d64ff",
			},
		},
	},
	plugins: [],
};
export default config;
