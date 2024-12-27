# Calixto Ar - Landing Page

Este é o projeto da landing page da Calixto Ar, uma empresa especializada em serviços de ar condicionado desde 1968.

## Tecnologias Utilizadas

- React 18
- Vite
- SASS
- React Router DOM

## Estrutura do Projeto

```
src/
  ├── components/
  │   └── UserHome/
  │       ├── UserHome.jsx
  │       └── UserHome.scss
  ├── styles/
  │   └── variables.scss
  ├── App.jsx
  └── main.jsx
```

## Como Iniciar

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse o projeto em `http://localhost:3000`

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter no código

## Estrutura de Componentes

- `UserHome`: Componente principal da landing page
  - Navbar com logo e menu de navegação
  - Hero section com informações principais
  - Seção de destaque com imagem e texto

## Estilos

Os estilos são organizados usando SASS com:
- Variáveis globais em `variables.scss`
- Estilos específicos de componentes em arquivos `.scss` separados
- Design responsivo com breakpoints para tablet e mobile
