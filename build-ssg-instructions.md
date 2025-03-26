
# Instruções para build com SSG

Para realizar o build com SSG (Static Site Generation), adicione os seguintes scripts no seu package.json:

```json
"scripts": {
  "build": "vite build",
  "build:github": "vite build --mode github",
  "preview": "vite preview",
  "prerender": "node src/prerender.js",
  "build:ssg": "npm run build && npm run prerender",
  "build:ssg:github": "npm run build:github && npm run prerender"
}
```

## Build para o domínio principal (comandatop.com.br)

Execute:

```bash
npm run build:ssg
```

Este comando irá:
1. Construir sua aplicação normalmente com Vite
2. Executar o script de pré-renderização para gerar páginas estáticas

## Build para GitHub Pages (uaipage.github.io/comanda-top-landing)

Execute:

```bash
npm run build:ssg:github
```

Este comando irá:
1. Construir sua aplicação com o modo "github" que ajusta o caminho base
2. Executar o script de pré-renderização para gerar páginas estáticas

Os arquivos estáticos serão gerados na pasta `dist` e na pasta `dist/github` para a versão específica do GitHub Pages.

## Dicas para deploy

Para GitHub Pages:
- Os arquivos na pasta `dist/github` devem ser copiados para a raiz do seu repositório GitHub Pages.

Para o domínio principal:
- Os arquivos na pasta `dist` (excluindo a subpasta `github`) devem ser copiados para o servidor web que hospeda comandatop.com.br.
```
