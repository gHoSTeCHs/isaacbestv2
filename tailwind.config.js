/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
				screens: {
					'2xl': '1400px',
					xl: '1140px',
					lg: '960px',
					md: '768px',
					sm: '640px',
					xs: '480px',
				},
			},
			colors: {
				'background-primary': '#141414',
				'background-secondary': '#191919',
				primary: '#FFFFFF',
				txt: '#999999',
				border: '#262626',
				btn: '#703BF7',
			},
		},
	},
	plugins: [],
};
