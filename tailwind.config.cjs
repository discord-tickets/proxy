/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				blurple: '#5865F2'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
