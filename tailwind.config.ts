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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'ai-primary': 'hsl(var(--ai-primary))',
				'ai-secondary': 'hsl(var(--ai-secondary))',
				'ai-accent': 'hsl(var(--ai-accent))',
				'ai-neon': 'hsl(var(--ai-neon))',
				'ai-electric': 'hsl(var(--ai-electric))',
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-ai-hero': 'var(--gradient-ai-hero)',
				'gradient-ai-primary': 'var(--gradient-ai-primary)',
				'gradient-ai-accent': 'var(--gradient-ai-accent)',
				'gradient-ai-mesh': 'var(--gradient-ai-mesh)',
				'gradient-ai-card': 'var(--gradient-ai-card)',
			},
			boxShadow: {
				'ai-glow': 'var(--shadow-ai-glow)',
				'ai-card': 'var(--shadow-ai-card)',
				'ai-intense': 'var(--shadow-ai-intense)',
				'ai-subtle': 'var(--shadow-ai-subtle)',
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
				'ai-pulse': {
					'0%, 100%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '0.8', transform: 'scale(1.05)' }
				},
				'ai-float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'ai-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(262 73% 57% / 0.3)' },
					'50%': { boxShadow: '0 0 35px hsl(262 73% 57% / 0.6), 0 0 50px hsl(252 95% 67% / 0.3)' }
				},
				'ai-scan': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100vw)' }
				},
				'ai-matrix': {
					'0%': { transform: 'translateY(-100vh)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'ai-pulse': 'ai-pulse 3s ease-in-out infinite',
				'ai-float': 'ai-float 6s ease-in-out infinite',
				'ai-glow': 'ai-glow 2s ease-in-out infinite',
				'ai-scan': 'ai-scan 3s linear infinite',
				'ai-matrix': 'ai-matrix 4s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
