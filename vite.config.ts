
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Função para determinar a base URL correta com base no ambiente
function determineBaseUrl(mode: string) {
  return mode === 'github' ? '/comanda-top-landing/' : '/';
}

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
  base: determineBaseUrl(mode),
  build: {
    outDir: 'dist',
  },
}));
