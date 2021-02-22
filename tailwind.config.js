const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                primary: ['SF Pro Text', ...fontFamily.sans],
            },
            colors: {
                primary: {
                    200: 'rgba(31, 117, 225, 0.08)',
                    300: '#1F75E1',
                    400: '#163c80',
                },
                // 100 for border, 200 for background, default for light text
                brandGray: {
                    100: '#eeeaea',
                    200: '#f1f5f6',
                    DEFAULT: 'rgb(132,146,166)',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
