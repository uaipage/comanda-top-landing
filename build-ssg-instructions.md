
# Instruções para build com SSG

Para realizar o build com SSG (Static Site Generation), adicione o seguinte script no seu package.json:

```json
"scripts": {
  "build": "vite build",
  "preview": "vite preview",
  "prerender": "node src/prerender.js",
  "build:ssg": "npm run build && npm run prerender"
}
```

Então você pode executar:

```bash
npm run build:ssg
```

Este comando irá:
1. Construir sua aplicação normalmente com Vite
2. Executar o script de pré-renderização para gerar páginas estáticas

Os arquivos estáticos serão gerados na pasta `dist`.
