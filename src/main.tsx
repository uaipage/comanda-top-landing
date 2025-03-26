
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
  const currentUrl = window.location.hostname;
  if (currentUrl.includes('uaipage.github.io')) {
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
    root.render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <I18nProvider>
            <BrowserRouter basename={getBasename()}>
              <App />
            </BrowserRouter>
          </I18nProvider>
        </QueryClientProvider>
      </React.StrictMode>
    );
    console.log('Aplicação renderizada com sucesso no domínio: ' + window.location.hostname);
    console.log('Usando base path: ' + getBasename());
  } catch (error) {
    console.error('Erro ao renderizar a aplicação:', error);
  }
}

// Certificar que o DOM está completamente carregado antes de iniciar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarAplicacao);
} else {
  iniciarAplicacao();
}
