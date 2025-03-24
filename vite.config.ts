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
    ssr: command === 'build' && mode === 'production' ? 'src/entry-server.tsx' : undefined, // Caminho para o arquivo de entrada do servidor
    outDir: 'dist', // Diretório de saída
    rollupOptions: {
      input: {
        server: 'src/entry-server.tsx',  // Caminho para o arquivo de entrada do servidor
        client: './index.html',         // Caminho do arquivo HTML do cliente
      },
    },
  },
}));
