import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";

// Check for "ANALYZE" flag in env vars
const isAnalyze = process.env.ANALYZE === "true";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    ...(isAnalyze
      ? [
          visualizer({
            filename: "bundle-stats.html",
            template: "treemap", // other options: "sunburst", "network"
            gzipSize: true,
            brotliSize: true,
            open: true,
          }),
        ]
      : []),
  ],
});
