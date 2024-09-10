/** @type {import('tailwindcss').Config} */

import range from "lodash/range"

const toRem = (px) => `${parseFloat((px / 16).toFixed(6))}rem`

module.exports = {
	prefix: "tw-",
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		fontFamily: {
			sans: '"Teko", sans-serif',
		},
		extend: {
			spacing: {
				...range(1601).reduce(
					(obj, val) => ({
						...obj,
						[val]: toRem(val),
					}),
					{},
				),
				...{
					full: "100%",
					"100vw": "100vw",
					"100vh": "100vh",
				},
			},
			maxWidth: (theme) => ({
				inherit: "inherit",
				unset: "unset",
				...theme("spacing"),
			}),
			minWidth: (theme) => ({
				inherit: "inherit",
				unset: "unset",
				...theme("spacing"),
			}),
			minHeight: (theme) => ({
				inherit: "inherit",
				unset: "unset",
				...theme("spacing"),
			}),
			maxHeight: (theme) => ({
				inherit: "inherit",
				unset: "unset",
				...theme("spacing"),
			}),
		},
	},
	plugins: [],
}
