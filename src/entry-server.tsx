
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nProvider } from "./context/i18nContext";

export function render(url: string) {
  const queryClient = new QueryClient();
  
  // Renderiza a aplicação para uma string HTML
  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </I18nProvider>
    </QueryClientProvider>
  );

  // Gera metadados para a tag head
  const head = '';

  return { html, head };
}
