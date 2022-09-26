/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				blurple: '#5865F2'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')],
};