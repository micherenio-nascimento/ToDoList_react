# ToDo List React App

Este é um projeto simples de aplicação ToDo List construída com React, Vite, e TailwindCSS. O objetivo deste projeto é oferecer uma interface intuitiva para criar, editar, e gerenciar uma lista de tarefas.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Visão Geral

A aplicação ToDo List permite aos usuários adicionar novas tarefas, marcar tarefas como concluídas, editar títulos de tarefas e excluir tarefas. O estado da lista de tarefas é salvo no `localStorage` do navegador, permitindo que os dados persistam entre as sessões.

Você pode acessar a versão publicada do projeto [aqui](https://react-todolist-self.vercel.app/).

## Funcionalidades

- **Adicionar Tarefas**: Insira um título para a nova tarefa e adicione-a à lista.
- **Editar Tarefas**: Atualize o título de uma tarefa existente.
- **Concluir Tarefas**: Marque tarefas como concluídas, com uma opção visual para destacar as tarefas concluídas.
- **Excluir Tarefas**: Remova tarefas da lista permanentemente.
- **Salvamento no LocalStorage**: As tarefas são automaticamente salvas no `localStorage` do navegador.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Vite**: Ferramenta de build rápida para projetos web modernos.
- **TailwindCSS**: Framework CSS para estilização rápida e customizável.
- **React Icons**: Biblioteca de ícones para React.
- **LocalStorage**: Para persistir os dados da lista de tarefas entre sessões.

## Instalação

Para instalar e rodar este projeto localmente, siga os passos abaixo:

- **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/todolist-react.git
   ```

- **Navegue até o diretório do projeto:**

   ```bash
   cd todolist-react
   ```

- **Instale as dependências:**

   ```bash
   npm install
   ```

- **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

- **Acesse a aplicação:**

   Abra o navegador e acesse `http://localhost:5173`.

## Como Usar

1. **Adicionar uma Tarefa:**
   - Digite o título da tarefa no campo de entrada e clique no botão "Criar".
  
2. **Marcar uma Tarefa como Concluída:**
   - Clique na checkbox ao lado da tarefa para marcá-la como concluída.

3. **Editar uma Tarefa:**
   - Clique no ícone de edição ao lado da tarefa, faça as alterações e pressione o botão de salvar.

4. **Excluir uma Tarefa:**
   - Clique no ícone de lixeira para remover a tarefa da lista.

## Estrutura de Pastas

Aqui está uma visão geral da estrutura de pastas do projeto:

```
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── components
│   │   ├── Templates
│   │   │   └── NavBar.jsx
│   │   └── TodoComponents
│   │       ├── styleCheckbox.css
│   │       ├── ToDoForms.jsx
│   │       ├── ToDoItem.jsx
│   │       └── ToDoList.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
└── vite.config.js
```

- **`src/components`**: Contém todos os componentes da aplicação, divididos em `Templates` (componentes de layout) e `TodoComponents` (componentes funcionais da lista de tarefas).
- **`index.html`**: Ponto de entrada da aplicação.
- **`App.jsx`**: Componente principal da aplicação que gerencia o estado e a lógica.
- **`tailwind.config.js`**: Configurações do TailwindCSS.
- **`vite.config.js`**: Configurações do Vite.

## Contribuindo

Contribuições são bem-vindas! Se você tiver sugestões de melhorias, abra uma issue ou envie um pull request.

- Faça um fork do projeto
- Crie uma nova branch (`git checkout -b feature/sua-feature`)
- Commit suas alterações (`git commit -m 'Adicionei uma nova feature'`)
- Envie para o repositório (`git push origin feature/sua-feature`)
- Abra um Pull Request


## Categoria
**frontend**