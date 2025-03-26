
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { I18nProvider } from "@/context/i18nContext";
import "./index.css";

const queryClient = new QueryClient();

// Detectar qual base URL estamos usando
const getBasename = () => {
  // Verificar se temos o valor definido na inicialização
  if (window.__BASE_PATH__) {
    return window.__BASE_PATH__;
  }
  
  // Fallback para detecção baseada no hostname
  const currentUrl = window.location.hostname;
  if (currentUrl.includes('github.io')) {
    return '/comanda-top-landing';
  }
  return '/';
};

// Função para iniciar a aplicação com SSG
function iniciarAplicacao() {
  const container = document.getElementById('root');
  
  if (!container) {
    console.error('Elemento root não encontrado no DOM');
    return;
  }
  
  // Limpar conteúdo para evitar conflitos de hidratação
  container.innerHTML = '';
  
  try {
    const root = createRoot(container);
    const basePath = getBasename();
    
    // Registrar variável global para uso em assets
    window.__BASE_PATH__ = basePath;
    
    root.render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <I18nProvider>
            <BrowserRouter basename={basePath}>
              <App />
            </BrowserRouter>
          </I18nProvider>
        </QueryClientProvider>
      </React.StrictMode>
    );
    console.log('Aplicação renderizada com sucesso no domínio: ' + window.location.hostname);
    console.log('Usando base path: ' + basePath);
  } catch (error) {
    console.error('Erro ao renderizar a aplicação:', error);
  }
}

// Criar uma função auxiliar para carregar imagens e outros assets
window.getAssetPath = (path) => {
  const basePath = window.__BASE_PATH__ || '/';
  // Remover barra inicial se existir para evitar duplicação
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${basePath}${cleanPath}`;
};

// Certificar que o DOM está completamente carregado antes de iniciar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarAplicacao);
} else {
  iniciarAplicacao();
}
