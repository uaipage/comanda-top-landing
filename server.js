
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';

async function createServer() {
  const app = express();
  
  let vite;
  if (!isProduction) {
    // Em desenvolvimento, usamos o servidor de desenvolvimento Vite
    // com sua feature de SSR
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  } else {
    // Em produção, servimos os assets estáticos compilados
    app.use(express.static(path.resolve(__dirname, 'dist/client')));
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template;
      let render;
      
      if (!isProduction) {
        // Em desenvolvimento, carrega o template HTML e transforma via Vite
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        // Em produção, carrega o template e o renderer SSR diretamente
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        render = (await import('./dist/server/entry-server.tsx')).render;
      }

      // Renderiza o aplicativo React no servidor
      const { html, head } = await render(url);
      
      // Injeta o HTML renderizado no template
      const responseHtml = template
        .replace(`<div id="root"></div>`, `<div id="root">${html}</div>`)
        .replace('</head>', `${head}</head>`);
      
      res.status(200).set({ 'Content-Type': 'text/html' }).end(responseHtml);
    } catch (e) {
      // Se algo der errado, vite.middleware redireciona para a página de erro
      if (!isProduction) {
        vite.ssrFixStacktrace(e);
      }
      console.error(e);
      next(e);
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

createServer();
