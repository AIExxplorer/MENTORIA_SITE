# 🚀 Foco Digital - Website Profissional

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-8+-red.svg)](https://www.npmjs.com/)

> **Transforme sua Presença Online. Gere Resultados Reais.**

Website profissional da Foco Digital, especialistas em marketing digital e vendas. Criamos estratégias que convertem visitantes em clientes e alavancam o sucesso do seu negócio.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Deploy](#deploy)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## 🎯 Sobre o Projeto

A Foco Digital é uma agência especializada em marketing digital e vendas online. Nosso website foi desenvolvido com foco em:

- **Conversão**: Design otimizado para transformar visitantes em leads
- **Performance**: Carregamento rápido e experiência de usuário fluida
- **Responsividade**: Funciona perfeitamente em todos os dispositivos
- **SEO**: Otimizado para mecanismos de busca
- **Acessibilidade**: Acessível para todos os usuários

### Nossa Missão
> *"Seu sucesso faz parte do nosso trabalho"*

## ✨ Funcionalidades

### 🎨 Design e UX
- **Design Moderno**: Interface limpa e profissional
- **Animações Suaves**: Efeitos visuais que melhoram a experiência
- **Partículas Interativas**: Background dinâmico com tsParticles
- **Responsivo**: Adaptável a todos os tamanhos de tela

### 📱 Seções Principais
- **Hero Section**: Apresentação impactante da empresa
- **Serviços**: Gestão de tráfego, SEO e desenvolvimento web
- **Depoimentos**: Social proof de clientes satisfeitos
- **Call-to-Action**: Conversão otimizada
- **Contato**: Informações de contato e localização

### 🚀 Performance
- **Carregamento Rápido**: Otimizado para velocidade
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Acessibilidade**: WCAG 2.1 compliant
- **Cross-browser**: Compatível com todos os navegadores

## 🛠 Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis CSS
- **JavaScript (ES6+)**: Interatividade e animações
- **tsParticles**: Efeitos de partículas interativas

### Build Tools
- **Node.js**: Runtime JavaScript
- **npm**: Gerenciador de pacotes
- **PostCSS**: Processamento de CSS
- **esbuild**: Bundling e minificação
- **Live Server**: Servidor de desenvolvimento

### Code Quality
- **ESLint**: Linting JavaScript
- **Stylelint**: Linting CSS
- **Prettier**: Formatação de código
- **Jest**: Testes unitários

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16.0.0 ou superior)
- **npm** (versão 8.0.0 ou superior)

### Verificação
```bash
node --version
npm --version
```

## 🚀 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/focodigital/website.git
cd website
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

## 💻 Como Usar

### Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar testes
npm test

# Linting e formatação
npm run lint
npm run format
```

### Estrutura de Arquivos
```
foco-digital-website/
├── src/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       └── logo.png
├── dist/           # Arquivos otimizados para produção
├── index.html
├── package.json
├── README.md
└── LICENSE
```

## 📁 Estrutura do Projeto

```
foco-digital-website/
├── 📄 index.html              # Página principal
├── 📁 src/                    # Código fonte
│   ├── 📁 css/
│   │   └── 📄 style.css       # Estilos principais
│   ├── 📁 js/
│   │   └── 📄 script.js       # JavaScript principal
│   └── 📁 images/
│       └── 📄 logo.png        # Logo da empresa
├── 📁 dist/                   # Build de produção
├── 📄 package.json            # Configurações e dependências
├── 📄 README.md              # Documentação
├── 📄 LICENSE                # Licença MIT
├── 📄 .gitignore             # Arquivos ignorados pelo Git
├── 📄 .eslintrc.js           # Configuração ESLint
├── 📄 .prettierrc            # Configuração Prettier
├── 📄 postcss.config.js      # Configuração PostCSS
└── 📄 jest.config.js         # Configuração Jest
```

## 🔧 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run build:css` | Compila e otimiza CSS |
| `npm run build:js` | Compila e minifica JavaScript |
| `npm run optimize` | Otimiza imagens |
| `npm run lint` | Executa linting JavaScript |
| `npm run lint:css` | Executa linting CSS |
| `npm run format` | Formata código com Prettier |
| `npm test` | Executa testes unitários |
| `npm run deploy` | Deploy para GitHub Pages |

## 🌐 Deploy

### GitHub Pages
```bash
npm run deploy
```

### Outros Serviços
O projeto pode ser facilmente deployado em:
- **Netlify**: Arraste a pasta `dist` para o Netlify
- **Vercel**: Conecte o repositório ao Vercel
- **AWS S3**: Faça upload dos arquivos da pasta `dist`
- **Qualquer servidor web**: Copie os arquivos da pasta `dist`

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Commit
Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: formatação de código
refactor: refatoração de código
test: adiciona ou corrige testes
chore: tarefas de manutenção
```

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contato

**Foco Digital**

- **Email**: contato@focodigital.com
- **Telefone**: (31) 9 9999-9999
- **Website**: https://focodigital.com

---

<div align="center">

**Transforme sua Presença Online. Gere Resultados Reais.**

*Seu sucesso faz parte do nosso trabalho* 🚀

</div>
