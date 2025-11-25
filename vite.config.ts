import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { createSitemap } from "vite-plugin-sitemap";
import { globby } from "globby";

// Auto-discover all routes from your src/pages or src/routes folder
const generateDynamicRoutes = async () => {
  // Change this pattern to match your actual page structure
  const pages = await globby([
    "src/pages/**/*.{tsx,ts,jsx,js}",     // if you use file-based routing like /pages/about.tsx → /about
    "src/routes/**/*.{tsx,ts,jsx,js}",    // or if you use /routes
    "!src/pages/**/_*.{tsx,ts}",          // ignore layouts, components
    "!src/pages/**/*.d.ts",
    "!src/pages/**/*.test.{tsx,ts}",
  ]);

  const routes = pages.map((page: string) => {
    let route = page
      .replace(/^src[\/\\]pages/, "")           // remove src/pages
      .replace(/^src[\/\\]routes/, "")          // or src/routes
      .replace(/\.(tsx|ts|jsx|js)$/, "")        // remove extension
      .replace(/\/index$/, "")                  // /about/index → /about
      .replace(/\/404$/, "/404")                // keep 404 page
      .replace(/\[\.\.\.(.+)\]/, "*")           // [..slug] → *
      .replace(/\[(.+)\]/, ":$1");              // [id] → :id

    // Make sure route starts with /
    if (!route.startsWith("/")) route = "/" + route;
    if (route !== "/" && route.endsWith("/")) route = route.slice(0, -1); // remove trailing slash except root
    if (route === "") route = "/"; // index → root

    return route;
  });

  // Also add any hardcoded routes you want to guarantee
  const extraRoutes = ["/", "/app"];

  return Array.from(new Set([...extraRoutes, ...routes]));
};

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    createSitemap({
      hostname: "https://knowlia.site", // CHANGE TO YOUR DOMAIN
      generateRobotsTxt: true,
      dynamicRoutes: generateDynamicRoutes, // This auto-finds EVERY page
      readable: true,
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date(),
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));