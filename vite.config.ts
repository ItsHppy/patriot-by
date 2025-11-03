import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/patriot-by/",
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["a32152f88088.ngrok-free.app"],
    proxy: {
      '/api': {
        target: 'https://a32152f88088.ngrok-free.app',
        changeOrigin: true,
        secure: true,
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // React core libraries
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            // React Router
            if (id.includes('react-router')) {
              return 'router-vendor';
            }
            // Radix UI components (большая библиотека)
            if (id.includes('@radix-ui')) {
              return 'radix-vendor';
            }
            // Tanstack Query
            if (id.includes('@tanstack')) {
              return 'tanstack-vendor';
            }
            // Lucide icons
            if (id.includes('lucide-react')) {
              return 'icons-vendor';
            }
            // Charts and visualization
            if (id.includes('recharts') || id.includes('chart')) {
              return 'charts-vendor';
            }
            // Map libraries
            if (id.includes('leaflet') || id.includes('react-leaflet')) {
              return 'maps-vendor';
            }
            // Form libraries
            if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
              return 'forms-vendor';
            }
            // Utility libraries
            if (id.includes('date-fns') || id.includes('clsx') || id.includes('class-variance-authority')) {
              return 'utils-vendor';
            }
            // Everything else
            return 'vendor';
          }
        }
      }
    }
  }
}));
