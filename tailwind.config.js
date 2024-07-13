/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				xs: '375px',
				md: '900px',
			}
		}
	},
	plugins: []
};


