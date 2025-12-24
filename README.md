# 💻 Carlos Borges - Portfólio Pessoal

Portfólio interativo desenvolvido com tecnologias modernas para apresentar meus projetos, conquistas e experiência profissional na área de desenvolvimento.

[![Deploy](https://img.shields.io/badge/deploy-live-brightgreen)](https://carloseduardoborges.pages.dev)
[![Astro](https://img.shields.io/badge/Astro-5.1-orange)](https://astro.build)
[![Svelte](https://img.shields.io/badge/Svelte-5-red)](https://svelte.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-blue)](https://tailwindcss.com)

## 🌟 Destaques

- **🎨 Design Moderno**: Interface responsiva com efeitos 3D usando Three.js e Threlte
- **⚡ Performance**: Build estático otimizado com Astro para carregamento ultra-rápido
- **📱 Responsivo**: Experiência perfeita em dispositivos móveis, tablets e desktop
- **🌐 Bilíngue**: Totalmente em português com interface intuitiva
- **🎯 SEO Otimizado**: Meta tags e estrutura otimizada para mecanismos de busca

## 🚀 Funcionalidades

### Seções Principais
- **Hero 3D**: Animação interativa com modelos 3D usando Threlte
- **Projetos**: Showcase de 13 projetos com thumbnails, tags e descrições detalhadas
- **Sobre**: Apresentação pessoal com experiência e formação
- **Aprendizado**: Certificações e cursos concluídos
- **Contato**: Links para redes sociais e download de currículo

### Conquistas em Destaque
- 🥇 1º Lugar - Hackathon Voucher Desenvolvedor 2024
- 🥇 1º Lugar - Maratona de Programação SENAC
- 🥇 2º Lugar - Segunda Maratona SENAC
- 🏆 Projetos Premiados - Inova Sanesul 2025
- 📜 Múltiplas certificações em Python, Cloud, Cybersecurity

## 🛠️ Stack Tecnológica

### Frontend
- **[Astro](https://astro.build)** - Framework web ultra-rápido
- **[Svelte 5](https://svelte.dev)** - Framework reativo moderno
- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS utilitário
- **[Three.js](https://threejs.org)** - Biblioteca 3D JavaScript
- **[Threlte](https://threlte.xyz)** - Wrapper Svelte para Three.js

### Componentes e Animações
- **GSAP** - Animações fluidas
- **Melt UI** - Componentes acessíveis
- **Theatre.js** - Editor de animações
- **Postprocessing** - Efeitos visuais

### Build e Deploy
- **TypeScript** - Tipagem estática
- **MDX** - Markdown com componentes
- **Vite** - Build tool rápido

## 📂 Estrutura do Projeto

```
portifolio/
├── public/               # Arquivos estáticos
│   ├── curriculo.pdf    # Currículo para download
│   └── lowpoly_nature/  # Assets 3D
├── src/
│   ├── assets/          # Imagens e recursos
│   │   ├── projects/    # Thumbnails dos projetos
│   │   └── about/       # Logos e imagens pessoais
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Hero/        # Seção hero com 3D
│   │   ├── Projects/    # Grid de projetos
│   │   ├── About/       # Seção sobre
│   │   ├── Learning/    # Certificações
│   │   └── Navigation/  # Menu e navegação
│   ├── content/         # Conteúdo em MDX
│   │   ├── projects/    # 13 projetos detalhados
│   │   ├── blog/        # Posts do blog
│   │   └── main/        # Páginas principais
│   ├── layouts/         # Layouts base
│   └── pages/           # Rotas da aplicação
├── astro.config.mjs     # Configuração Astro
├── tailwind.config.mjs  # Configuração Tailwind
└── package.json         # Dependências
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/yonnnxr/portfolio.git

# Entre na pasta
cd portfolio

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:4321`

### Build para Produção

```bash
# Gera build otimizado
npm run build

# Preview da build
npm run preview
```

## 📋 Projetos em Destaque

1. **Mapa com Geoprocessamento** - Mapeamento geoespacial
2. **Sistema de Gestão Integrado (SISGETI)** - Gestão completa
3. **Sistema Bancário** - Simulação de operações bancárias
4. **Sea Chá Pantanal** - E-commerce de chás regionais
5. **Projetos Premiados Inova Sanesul** - Soluções inovadoras
6. **Geo Rotas** - Otimização de rotas
7. **Next + React** - Aplicação moderna
8. **Primeira/Segunda Maratona** - Competições de programação
9. **Hackathon Voucher Desenvolvedor** - 1º Lugar
10. **Projeto Incubado Senac** - Incubação empresarial
11. **Olimpíada Brasileira de Matemática** - Premiação
12. **Certificações Python** - Fundamentos e práticas

## 🎯 Personalização

### Atualizar Informações Pessoais
Edite `src/config.ts`:
```typescript
export const SITE = 'https://seusite.com';
export const SOCIALS = {
  GITHUB: 'seu-github',
  LINKEDIN: 'seu-linkedin',
  // ...
};
```

### Adicionar Projetos
1. Crie arquivo MDX em `src/content/projects/`
2. Adicione thumbnail em `src/assets/projects/seu-projeto/thumbnail.png`
3. Configure frontmatter com tags e descrição

### Personalizar Cores
Edite `src/config.ts`:
```typescript
export const BASE_COLOR = 'zinc';    // Cor base
export const ACCENT_COLOR = 'cyan';  // Cor de destaque
```

## 📱 Responsividade

- **Mobile First**: Otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Menu Mobile**: Navegação adaptada para telas pequenas
- **Grid Adaptativo**: Layouts que se ajustam ao tamanho da tela

## 🔧 Funcionalidades Técnicas

- ✅ **SSG (Static Site Generation)**: Build estático para máxima performance
- ✅ **Image Optimization**: Imagens otimizadas automaticamente pelo Astro
- ✅ **Code Splitting**: Carregamento sob demanda de componentes
- ✅ **SEO Ready**: Meta tags, Open Graph e Twitter Cards
- ✅ **Accessibility**: Componentes acessíveis e semânticos
- ✅ **Dark Mode Ready**: Preparado para modo escuro

## 📄 Licença

Este projeto está sob licença própria. Sinta-se livre para se inspirar, mas por favor, personalize com seu próprio conteúdo.

## 👤 Autor

**Carlos Borges**
- 🌐 Website: [carloseduardoborges.pages.dev](https://carloseduardoborges.pages.dev)
- 💼 LinkedIn: [@yonnnxr](https://linkedin.com/in/yonnnxr)
- 🐙 GitHub: [@yonnnxr](https://github.com/yonnnxr)
- 📧 Email: carlosborges2007edu@gmail.com

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
