
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nProvider } from "./context/i18nContext";

const queryClient = new QueryClient();

hydrateRoot(
  document.getElementById('root')!,
  <QueryClientProvider client={queryClient}>
    <I18nProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nProvider>
  </QueryClientProvider>
);
