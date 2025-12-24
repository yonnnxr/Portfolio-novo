# 🚀 Deploy na Cloudflare Pages

Guia completo para fazer deploy do seu portfólio na Cloudflare Pages.

## 📋 Pré-requisitos

- Conta na Cloudflare (gratuita)
- Repositório Git (GitHub, GitLab ou Bitbucket)
- Código commitado e enviado para o repositório

---

## 🔧 Método 1: Deploy via Dashboard (Mais Fácil)

### Passo 1: Preparar o Projeto

```bash
# Certifique-se que está tudo commitado
git add .
git commit -m "Preparando para deploy"
git push origin main
```

### Passo 2: Configurar na Cloudflare

1. Acesse: https://dash.cloudflare.com/
2. Vá em **Pages** no menu lateral
3. Clique em **Create a project**
4. Clique em **Connect to Git**
5. Autorize acesso ao seu GitHub/GitLab
6. Selecione o repositório `portfolio`

### Passo 3: Configurações de Build

Configure exatamente assim:

```
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: /
Node version: 18
```

**Environment Variables (Variáveis de Ambiente):**
- Não precisa adicionar nenhuma por enquanto

### Passo 4: Deploy

1. Clique em **Save and Deploy**
2. Aguarde o build (leva ~2-3 minutos)
3. Seu site estará no ar em: `https://seu-projeto.pages.dev`

---

## 🔧 Método 2: Deploy via CLI (Mais Controle)

### Passo 1: Instalar Wrangler (CLI da Cloudflare)

```bash
npm install -g wrangler
```

### Passo 2: Login na Cloudflare

```bash
wrangler login
```

Isso abrirá o navegador para você fazer login.

### Passo 3: Build do Projeto

```bash
npm run build
```

### Passo 4: Deploy

```bash
wrangler pages deploy dist --project-name=carlos-borges-portfolio
```

Na primeira vez, será perguntado:
- **Project name**: `carlos-borges-portfolio`
- **Production branch**: `main`

### Passo 5: Deploy Automático (Opcional)

Para deployar sempre que fizer push, configure GitHub Actions:

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: carlos-borges-portfolio
          directory: dist
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

**Configurar Secrets no GitHub:**

1. Vá em **Settings** > **Secrets and variables** > **Actions**
2. Adicione:
   - `CLOUDFLARE_API_TOKEN`: Pegue em https://dash.cloudflare.com/profile/api-tokens
   - `CLOUDFLARE_ACCOUNT_ID`: Pegue no dashboard da Cloudflare (na URL ou em Workers & Pages)

---

## 🌐 Configurar Domínio Personalizado

### Se você tem um domínio (carlosborges.dev):

#### Opção A: Domínio gerenciado pela Cloudflare

1. No Cloudflare Pages, vá em **Custom domains**
2. Clique em **Set up a custom domain**
3. Digite: `carlosborges.dev`
4. Cloudflare configura automaticamente!

#### Opção B: Domínio em outro provedor

1. No Cloudflare Pages, adicione domínio customizado
2. Copie os registros DNS fornecidos
3. No seu provedor de domínio, adicione:

```
Type: CNAME
Name: @  (ou www)
Value: carlos-borges-portfolio.pages.dev
```

---

## 📝 Checklist Pré-Deploy

```bash
# 1. Testar build local
npm run build
npm run preview

# 2. Verificar se não há erros
npm run build

# 3. Commit e push
git add .
git commit -m "Deploy para Cloudflare Pages"
git push origin main

# 4. Deploy (se usando CLI)
wrangler pages deploy dist --project-name=carlos-borges-portfolio
```

---

## 🔍 Verificar Deploy

Após o deploy, teste:

✅ Site carrega: `https://seu-projeto.pages.dev`
✅ Todas as páginas funcionam
✅ Imagens carregam corretamente
✅ Links internos funcionam
✅ Downloads (currículo) funcionam
✅ Responsividade mobile

---

## ⚙️ Configurações Avançadas (Opcional)

### Headers de Segurança

Crie `public/_headers`:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Redirects

Crie `public/_redirects`:

```
# Redirect /old-page para /new-page
/old-page /new-page 301

# Força HTTPS
http://:project.pages.dev/* https://:project.pages.dev/:splat 301
```

### Preview Deployments

Cloudflare cria automaticamente um deploy de preview para cada branch/PR:
- Branch `develop`: `https://develop.carlos-borges-portfolio.pages.dev`
- PR #1: `https://pr-1.carlos-borges-portfolio.pages.dev`

---

## 🚨 Troubleshooting

### Build falha com erro de memória:

```bash
# No package.json, aumente memória do Node
"build": "NODE_OPTIONS='--max-old-space-size=4096' astro build"
```

### Imagens não carregam:

Verifique se o caminho está correto:
- ✅ `/image.jpg` ou `./image.jpg`
- ❌ `image.jpg` (pode não funcionar)

### 404 em rotas:

Crie `public/_redirects`:
```
/* /index.html 200
```

### Build lento:

```bash
# Use cache de dependências
npm ci  # ao invés de npm install
```

---

## 📊 Métricas e Analytics

### Cloudflare Web Analytics (Gratuito)

1. Vá em **Web Analytics** no dashboard
2. Adicione seu site
3. Copie o código JavaScript
4. Cole em `src/components/BaseHead.astro`:

```html
<!-- Cloudflare Web Analytics -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' 
        data-cf-beacon='{"token": "SEU_TOKEN_AQUI"}'></script>
```

---

## 🎯 Comandos Rápidos

```bash
# Build e preview local
npm run build && npm run preview

# Deploy via CLI
wrangler pages deploy dist

# Ver logs do deploy
wrangler pages deployment list --project-name=carlos-borges-portfolio

# Rollback para deploy anterior
wrangler pages deployment tail --project-name=carlos-borges-portfolio
```

---

## ✅ Vantagens da Cloudflare Pages

- 🆓 **Gratuito** para uso pessoal
- ⚡ **Super rápido** (CDN global)
- 🔒 **HTTPS automático**
- 🌍 **CDN em 200+ cidades**
- 📊 **Analytics gratuito**
- 🔄 **Deploy automático** do Git
- 🎯 **Preview de branches**
- 💰 **Sem limite de banda** (plano gratuito)

---

## 📞 Suporte

- Documentação: https://developers.cloudflare.com/pages/
- Astro + Cloudflare: https://docs.astro.build/en/guides/deploy/cloudflare/
- Community: https://community.cloudflare.com/

---

**Pronto! Seu portfólio estará no ar em minutos! 🚀**
