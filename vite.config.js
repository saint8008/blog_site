// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// NO static import of @tailwindcss/vite here

export default defineConfig(async () => {
  const plugins = [react()];

  try {
    const { default: tailwindcss } = await import("@tailwindcss/vite");
    plugins.push(tailwindcss());
  } catch {
    // plugin not installed (e.g. on the autograder): skip it
  }

  return {
    plugins,
    test: {
      // keep the settings that were in your original config, e.g.:
      environment: "jsdom",
      globals: true,
    },
  };
});