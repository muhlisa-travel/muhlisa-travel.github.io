/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                navy: {
                    900: '#0A1628',
                    800: '#0F1E36',
                    700: '#152744',
                    600: '#1B3052',
                },
                gold: {
                    400: '#E8C564',
                    500: '#D4A843',
                    600: '#B8902E',
                },
                royal: {
                    500: '#2563EB',
                    600: '#1D4ED8',
                },
            },
            fontFamily: {
                heading: ['"Inter"', 'sans-serif'],
                body: ['"Inter"', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'slide-up': 'slide-up 0.6s ease-out',
                'stamp': 'stamp 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97)',
                'plane-fly': 'plane-fly 20s linear infinite',
                'shimmer': 'shimmer 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(212, 168, 67, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(212, 168, 67, 0.6)' },
                },
                'slide-up': {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                stamp: {
                    '0%': { transform: 'scale(3) rotate(-15deg)', opacity: '0' },
                    '60%': { transform: 'scale(0.9) rotate(-15deg)', opacity: '1' },
                    '100%': { transform: 'scale(1) rotate(-15deg)', opacity: '1' },
                },
                'plane-fly': {
                    '0%': { transform: 'translateX(-100%) translateY(0)' },
                    '100%': { transform: 'translateX(calc(100vw + 100%)) translateY(-50px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
