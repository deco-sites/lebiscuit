import daisyui from "daisyui";
import { DEFAULT_THEME } from "./styles/default_theme.ts";
import { addOklchColor } from "./utils/addOklchColor.ts";

export default {
  plugins: [daisyui],
  daisyui: {
    themes: [{
      light: DEFAULT_THEME,
    }],
    logs: false,
  },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    colors: {
      ...addOklchColor(DEFAULT_THEME),
      black: "black",
    },
    extend: {
      colors: {
        complementary: {
          2: "oklch(var(--complementary-2))",
        },
        neutral: {
          900: "oklch(var(--neutral-900))",
          800: "oklch(var(--neutral-800))",
          700: "oklch(var(--neutral-700))",
          600: "oklch(var(--neutral-600))",
          500: "oklch(var(--neutral-500))",
          400: "oklch(var(--neutral-400))",
          300: "oklch(var(--neutral-300))",
          200: "oklch(var(--neutral-200))",
          100: "oklch(var(--neutral-100))",
          50: "oklch(var(--neutral-50))",
          0: "oklch(var(--neutral-0))",
        },
        success: "oklch(var(--success))",
      },
      backgroundColor:{
        'unset': 'unset'
      },
      screens: {
        "xl-b": "1366px",
      },
    },
  },
};
