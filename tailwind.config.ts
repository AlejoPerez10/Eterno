import { type Config } from 'tailwindcss'

export default {
    content: [
        './src/app/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
        colors: {
            eterno: {
            DEFAULT: '#F4D35E', // sweet yellow
            dark: '#0b0b0b' // black-ish
            }
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif']
        }
        }
    },
    plugins: []
} as Config
