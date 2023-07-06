/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Poppins', 'sans-serif']
			},
			colors: {
				'gray-1': '#333',
				'gray-2': '#4F4F4F',
				'gray-3': '#828282',
				'gray-4': '#BDBDBD',
				'gray-5': '#4E5150',
				'gray-6': '#F2F2F2',
				'orange-1': '#F2994A',
				'blue-1': '#2D9CDB',
				'red-1': '#EB5757',

			},
			fontSize: {
				'2xs': ['10px', '16px']
			}
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif']
		}
	},
	plugins: [],
}
