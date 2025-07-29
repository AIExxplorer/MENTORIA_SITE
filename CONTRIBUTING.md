# 🤝 Guia de Contribuição - Foco Digital

Obrigado por considerar contribuir com o projeto Foco Digital! Este documento fornece diretrizes para contribuições.

## 📋 Índice

- [Como Contribuir](#como-contribuir)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Padrões de Código](#padrões-de-código)
- [Processo de Pull Request](#processo-de-pull-request)
- [Reportando Bugs](#reportando-bugs)
- [Sugerindo Melhorias](#sugerindo-melhorias)
- [Código de Conduta](#código-de-conduta)

## 🚀 Como Contribuir

### Tipos de Contribuição

- **🐛 Bug Fixes**: Correção de problemas existentes
- **✨ Novas Funcionalidades**: Adição de recursos úteis
- **📚 Documentação**: Melhoria da documentação
- **🎨 Melhorias de UI/UX**: Aprimoramentos visuais
- **⚡ Performance**: Otimizações de velocidade
- **🔒 Segurança**: Correções de vulnerabilidades

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- Node.js (versão 16.0.0 ou superior)
- npm (versão 8.0.0 ou superior)
- Git

### Configuração Inicial

1. **Fork o repositório**
```bash
# No GitHub, clique em "Fork"
```

2. **Clone seu fork**
```bash
git clone https://github.com/SEU_USUARIO/website.git
cd website
```

3. **Configure o upstream**
```bash
git remote add upstream https://github.com/focodigital/website.git
```

4. **Instale as dependências**
```bash
npm install
```

5. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

## 📝 Padrões de Código

### JavaScript

- Use **ES6+** features
- Prefira `const` e `let` sobre `var`
- Use arrow functions quando apropriado
- Mantenha funções pequenas e focadas
- Adicione comentários JSDoc para funções complexas

```javascript
/**
 * Calcula o total de vendas
 * @param {Array} vendas - Array de vendas
 * @returns {number} Total das vendas
 */
const calcularTotalVendas = (vendas) => {
  return vendas.reduce((total, venda) => total + venda.valor, 0);
};
```

### CSS

- Use variáveis CSS para cores e valores reutilizáveis
- Organize propriedades em ordem lógica
- Use nomes de classes semânticos
- Mantenha especificidade baixa

```css
/* ✅ Bom */
.button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--cor-primaria);
  color: var(--cor-texto);
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

/* ❌ Evite */
.button {
  background-color: #ff7a00;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
}
```

### HTML

- Use HTML5 semântico
- Mantenha estrutura limpa e organizada
- Use atributos ARIA quando necessário
- Valide o HTML

```html
<!-- ✅ Bom -->
<main>
  <section aria-labelledby="servicos-titulo">
    <h2 id="servicos-titulo">Nossos Serviços</h2>
    <div class="servicos-grid">
      <!-- conteúdo -->
    </div>
  </section>
</main>

<!-- ❌ Evite -->
<div>
  <div>
    <h2>Nossos Serviços</h2>
    <div>
      <!-- conteúdo -->
    </div>
  </div>
</div>
```

## 🔄 Processo de Pull Request

### 1. Crie uma Branch

```bash
git checkout -b feature/nova-funcionalidade
# ou
git checkout -b fix/correcao-bug
```

### 2. Faça suas Alterações

- Escreva código limpo e bem documentado
- Adicione testes quando apropriado
- Atualize a documentação se necessário

### 3. Commit suas Mudanças

Siga o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Para novas funcionalidades
git commit -m "feat: adiciona sistema de contato"

# Para correções de bugs
git commit -m "fix: corrige menu mobile em iOS"

# Para documentação
git commit -m "docs: atualiza README com instruções de instalação"

# Para melhorias de performance
git commit -m "perf: otimiza carregamento de imagens"

# Para refatoração
git commit -m "refactor: reorganiza estrutura de componentes"
```

### 4. Push para seu Fork

```bash
git push origin feature/nova-funcionalidade
```

### 5. Abra um Pull Request

- Use um título descritivo
- Inclua uma descrição detalhada
- Referencie issues relacionadas
- Adicione screenshots se aplicável

### Template de Pull Request

```markdown
## 📝 Descrição
Breve descrição das mudanças

## 🔗 Issues Relacionadas
Closes #123

## ✅ Checklist
- [ ] Código segue os padrões do projeto
- [ ] Testes foram adicionados/atualizados
- [ ] Documentação foi atualizada
- [ ] Build passa sem erros
- [ ] Linting passa sem erros

## 📸 Screenshots (se aplicável)
Adicione screenshots aqui

## 🧪 Como Testar
Instruções para testar as mudanças
```

## 🐛 Reportando Bugs

### Antes de Reportar

1. Verifique se o bug já foi reportado
2. Teste na versão mais recente
3. Tente reproduzir o problema

### Template de Bug Report

```markdown
## 🐛 Descrição do Bug
Descrição clara e concisa do bug

## 🔄 Passos para Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

## ✅ Comportamento Esperado
O que deveria acontecer

## ❌ Comportamento Atual
O que está acontecendo

## 📱 Informações do Sistema
- OS: [ex: Windows 10, macOS 12]
- Navegador: [ex: Chrome 96, Firefox 95]
- Versão: [ex: 1.0.0]

## 📸 Screenshots
Adicione screenshots aqui

## 📋 Contexto Adicional
Qualquer informação adicional
```

## 💡 Sugerindo Melhorias

### Template de Feature Request

```markdown
## 💡 Descrição da Melhoria
Descrição clara da funcionalidade desejada

## 🎯 Problema que Resolve
Explicação do problema que esta melhoria resolveria

## 💭 Solução Proposta
Descrição da solução proposta

## 🔄 Alternativas Consideradas
Outras soluções que foram consideradas

## 📋 Contexto Adicional
Qualquer informação adicional
```

## 🧪 Testes

### Executando Testes

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com cobertura
npm run test:coverage
```

### Escrevendo Testes

- Teste funcionalidades críticas
- Use nomes descritivos para testes
- Mantenha testes simples e focados
- Use mocks quando apropriado

```javascript
describe('Calculadora', () => {
  test('deve somar dois números corretamente', () => {
    expect(somar(2, 3)).toBe(5);
  });

  test('deve retornar erro para valores inválidos', () => {
    expect(() => somar('a', 'b')).toThrow('Valores inválidos');
  });
});
```

## 🔧 Ferramentas de Desenvolvimento

### Linting e Formatação

```bash
# Verificar linting JavaScript
npm run lint

# Verificar linting CSS
npm run lint:css

# Formatar código
npm run format
```

### Build

```bash
# Build de desenvolvimento
npm run build:dev

# Build de produção
npm run build
```

## 📚 Recursos Úteis

- [Documentação do Projeto](README.md)
- [Guia de Estilo CSS](https://styleguide.focodigital.com)
- [Padrões de JavaScript](https://github.com/airbnb/javascript)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 🤝 Código de Conduta

### Nossos Compromissos

- Manter um ambiente acolhedor e inclusivo
- Respeitar diferentes pontos de vista
- Aceitar críticas construtivas
- Focar no que é melhor para a comunidade

### Nossos Padrões

- Usar linguagem acolhedora e inclusiva
- Respeitar diferentes pontos de vista
- Aceitar graciosamente críticas construtivas
- Focar no que é melhor para a comunidade

### Aplicação

- Reporte comportamentos inadequados para [contato@focodigital.com](mailto:contato@focodigital.com)
- Violações serão investigadas e tratadas adequadamente

## 📞 Contato

- **Email**: contato@focodigital.com
- **Website**: https://focodigital.com
- **Issues**: [GitHub Issues](https://github.com/focodigital/website/issues)

---

**Obrigado por contribuir para o sucesso da Foco Digital!** 🚀 