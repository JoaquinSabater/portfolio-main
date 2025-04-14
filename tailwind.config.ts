import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translate(-50%, -50%) translateX(-50px) translateY(-30px) scale(1)' },
          '25%': { transform: 'translate(-50%, -50%) translateX(30px) translateY(-30px) scale(1.2)' },
          '50%': { transform: 'translate(-50%, -50%) translateX(-50px) translateY(30px) scale(0.9)' },
          '75%': { transform: 'translate(-50%, -50%) translateX(50px) translateY(30px) scale(1.1)' },
        },
        'move-slower': {
          '0%, 100%': { transform: 'translate(-50%, -50%) translateX(-20px) translateY(-30px) scale(1)' },
          '25%': { transform: 'translate(-50%, -50%) translateX(20px) translateY(-40px) scale(1.1)' },
          '50%': { transform: 'translate(-50%, -50%) translateX(-60px) translateY(20px) scale(0.9)' },
          '75%': { transform: 'translate(-50%, -50%) translateX(40px) translateY(40px) scale(1.05)' },
        },
        slide: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(calc(-100% / 2))' },
        },
      },
      animation: {
        move: 'move 8s ease-in-out infinite',
        'move-slower': 'move-slower 10s ease-in-out infinite',
        'slide-infinite': 'slide 25s ease-in-out infinite',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
