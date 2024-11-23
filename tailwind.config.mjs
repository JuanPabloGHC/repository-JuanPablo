/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#0E7490',
				'secondary': '#14B8A6',
				'tertiary': '#E7F8F6',
			},
			fontFamily: {
				'narrow': ['Narrow', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
