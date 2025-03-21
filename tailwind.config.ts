import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import scrollbars from "tailwind-scrollbar";
import type { Config } from "tailwindcss";

export default {
  content: ["{routes,islands,components}/**/*.{ts,tsx}"],
  plugins: [typography, forms, scrollbars],
} satisfies Config;
