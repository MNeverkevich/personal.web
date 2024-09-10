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
			colors: {
				gray: "#dcdcdc",
				"gray-2": "#e5e5e5",
				blue: "#3c93ff",
				"dark-blue": "#264653",
				yellow: "#E9C46A",
				green: "#2A9D8F",
				orange: "#E76F51",
				"light-orange": "#F4A261",
			},
			fontSize: range(60).reduce(
				(obj, val) => ({
					...obj,
					[val]: toRem(val),
				}),
				{},
			),
			lineHeight: {
				...range(60).reduce(
					(obj, val) => ({
						...obj,
						[val]: toRem(val),
					}),
					{},
				),
				...{
					normal: "normal",
				}
			},
			borderRadius: {
				none: "0",
				2: toRem(2),
			},
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
