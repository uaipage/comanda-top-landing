
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configuração para suportar SSR
  build: {
    ssr: command === 'build' && mode === 'production' ? true : undefined,
    outDir: command === 'build' && mode === 'production' ? 'dist' : 'dist/client',
    rollupOptions: {
      input: command === 'build' && mode === 'production' ? 
        { server: './server.js', client: './index.html' } : undefined
    }
  }
}));
