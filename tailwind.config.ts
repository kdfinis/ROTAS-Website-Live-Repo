import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
				'sans': ['Montserrat', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Rustic Mediterranean colors - Updated with gold focus instead of navy
				gold: {
					DEFAULT: '#D4AF37',
					50: '#FDF9E6',
					100: '#FAF0BD',
					200: '#F5E285',
					300: '#F0D44D',
					400: '#E8C547',
					500: '#D4AF37',
					600: '#B8962F',
					700: '#9C7D27',
					800: '#80641F',
					900: '#644B17'
				},
				stone: {
					DEFAULT: '#8B7355',
					50: '#F5F3F0',
					100: '#EBE7E1',
					200: '#D7CFC3',
					300: '#C3B7A5',
					400: '#AF9F87',
					500: '#8B7355',
					600: '#75614A',
					700: '#5F4F3F',
					800: '#493D34',
					900: '#332B29'
				},
				olive: {
					DEFAULT: '#6B7B3A',
					50: '#F2F4EC',
					100: '#E5E9D9',
					200: '#CBD3B3',
					300: '#B1BD8D',
					400: '#97A767',
					500: '#6B7B3A',
					600: '#596631',
					700: '#475128',
					800: '#353C1F',
					900: '#232716'
				},
				cream: {
					DEFAULT: '#F5F0E8',
					50: '#FEFCFA',
					100: '#F5F0E8',
					200: '#EBE1D1',
					300: '#E1D2BA',
					400: '#D7C3A3',
					500: '#CDB48C',
					600: '#C3A575',
					700: '#B9965E',
					800: '#AF8747',
					900: '#A57830'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-down': {
					'0%': {
						transform: 'translateY(-10px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'slide-down': 'slide-down 0.3s ease-out'
			},
			letterSpacing: {
				'wide': '0.025em',
				'wider': '0.05em',
				'widest': '0.1em'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
