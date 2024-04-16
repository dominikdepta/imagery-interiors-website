/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			serif: ['Spectral', 'serif'],
			sans: ['Arial', 'sans']
		},
		colors: {
			transparent: 'transparent',
			black: '#121110',
			lightBlack: '#33302A',
			blue: '#93ABBE',
			white: '#EFEEEE',
			lightGray: '#E1E1E0',
			mediumGray: '#D9D9D9',
			darkGray: '#909090',
			brown: '#BF886D',
			green: '#9DA27E'
		}
	},
	plugins: [],
}
