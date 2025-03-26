
// Este script será usado para pré-renderizar as páginas em tempo de build
// Para uma implementação SSG simples
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Lista de rotas que precisam ser pré-renderizadas
const routes = [
  '/',
  '/404', // Página de erro 404
];

// Template básico HTML com espaço para injetar o conteúdo
const htmlTemplate = (content, title = 'ComandaTop - Sistema para Restaurantes', basePath = '/') => `
<!DOCTYPE html>
<html lang="pt-BR" data-base-path="${basePath}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="ComandaTop - Sistema completo para gestão de restaurantes, bares e estabelecimentos gastronômicos." />
    <script>
      // Script para detectar o domínio e configurar corretamente os caminhos
      (function() {
        window.__BASE_PATH__ = '${basePath}';
        document.documentElement.dataset.basePath = window.__BASE_PATH__;
      })();
    </script>
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
    <script type="module" src="${basePath === '/' ? '' : basePath}src/main.tsx"></script>
  </body>
</html>
`;

// Função para gerar as páginas estáticas
async function generateStaticPages() {
  console.log('Iniciando pré-renderização para SSG...');
  
  const outputDir = path.resolve(__dirname, '../dist');
  
  // Certifique-se de que o diretório de saída existe
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Crie páginas estáticas para cada rota - versão para domínio principal
  for (const route of routes) {
    console.log(`Gerando página estática para domínio principal: ${route}`);
    
    const fileName = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
    const filePath = path.join(outputDir, fileName);
    
    // Conteúdo vazio para o esqueleto - na implementação real seria o HTML renderizado
    const content = `<div data-route="${route}"></div>`;
    
    fs.writeFileSync(filePath, htmlTemplate(content, 'ComandaTop - Sistema para Restaurantes', '/'));
    console.log(`Página criada: ${filePath}`);
  }
  
  // Criar uma versão específica para GitHub Pages
  const githubOutputDir = path.resolve(__dirname, '../dist/github');
  if (!fs.existsSync(githubOutputDir)) {
    fs.mkdirSync(githubOutputDir, { recursive: true });
  }
  
  for (const route of routes) {
    console.log(`Gerando página estática para GitHub Pages: ${route}`);
    
    const fileName = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
    const filePath = path.join(githubOutputDir, fileName);
    
    const content = `<div data-route="${route}"></div>`;
    
    fs.writeFileSync(filePath, htmlTemplate(content, 'ComandaTop - Sistema para Restaurantes', '/comanda-top-landing/'));
    console.log(`Página criada para GitHub: ${filePath}`);
  }
  
  console.log('Pré-renderização concluída!');
}

// Execute a geração de páginas estáticas
generateStaticPages().catch(error => {
  console.error('Erro na pré-renderização:', error);
  process.exit(1);
});
