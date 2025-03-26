
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
const htmlTemplate = (content, title = 'ComandaTop - Sistema para Restaurantes') => `
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="ComandaTop - Sistema completo para gestão de restaurantes, bares e estabelecimentos gastronômicos." />
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
    <script type="module" src="/src/main.tsx"></script>
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
  
  // Crie páginas estáticas para cada rota
  for (const route of routes) {
    console.log(`Gerando página estática para: ${route}`);
    
    // Para uma implementação completa, aqui você poderia usar uma biblioteca como puppeteer
    // para renderizar a aplicação React e extrair o HTML. 
    // Para este exemplo simples, apenas criamos um esqueleto da página.
    
    const fileName = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
    const filePath = path.join(outputDir, fileName);
    
    // Conteúdo vazio para o esqueleto - na implementação real seria o HTML renderizado
    const content = `<div data-route="${route}"></div>`;
    
    fs.writeFileSync(filePath, htmlTemplate(content));
    console.log(`Página criada: ${filePath}`);
  }
  
  console.log('Pré-renderização concluída!');
}

// Execute a geração de páginas estáticas
generateStaticPages().catch(error => {
  console.error('Erro na pré-renderização:', error);
  process.exit(1);
});
