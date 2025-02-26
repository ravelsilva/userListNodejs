```markdown
# Cadastro de Usuários - Projeto com React e JSON Server

Este é um projeto de cadastro de usuários utilizando React para o frontend e `json-server` para simular uma API RESTful. O servidor da API usa um arquivo JSON para armazenar os dados dos usuários e é monitorado com `nodemon` para facilitar o desenvolvimento.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **json-server**: Serve um banco de dados simples, baseado em um arquivo JSON, como uma API REST.
- **axios**: Biblioteca para fazer requisições HTTP.
- **nodemon**: Ferramenta que reinicia automaticamente o servidor sempre que há alterações no código.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
```
/
├── src/
│   ├── Components/
│   │   ├── Register.jsx          # Componente principal de cadastro
│   │   ├── RegisterForm.jsx      # Formulário de cadastro de usuário
│   │   └── UserList.jsx          # Lista de usuários cadastrados
│   ├── App.css                   # Estilos para o aplicativo
│   ├── App.jsx                   # Componente principal que renderiza o formulário e a lista
│   └── index.js                  # Ponto de entrada da aplicação
├── index.html                    # Estrutura HTML da aplicação
├── server.json                   # Arquivo de dados para o json-server (simula o banco de dados)
├── package.json                  # Gerenciador de pacotes com scripts
└── README.md                     # Este arquivo
```

## Como Rodar o Projeto

### 1. Instalar Dependências

Clone este repositório e instale as dependências do projeto:

```bash
git clone https://https://github.com/ravelsilva/user-registration-app.git
cd user-registration-app
npm install
```

### 2. Iniciar o Servidor de API com `json-server` e `nodemon`

Para iniciar o servidor de API localmente, utilize o comando abaixo:

```bash
npm run server
```

Este comando irá rodar o servidor usando o `json-server` e monitorar alterações no arquivo `server.json` com o `nodemon`. O servidor estará disponível em `http://localhost:3000`.

### 3. Iniciar o Frontend com React

Execute o comando abaixo para rodar a aplicação frontend:

```bash
npm start
```

Isso irá rodar o servidor de desenvolvimento React na porta `3000` (ou em uma porta diferente se a 3000 estiver ocupada).

### 4. Interagir com a Aplicação

- A página principal exibe um formulário para cadastro de usuários.
- Ao cadastrar um usuário, ele é adicionado ao arquivo `server.json` (via `json-server`).
- Os usuários cadastrados são listados abaixo do formulário. Cada usuário tem um botão para excluir.

### 5. Estrutura de Dados no `server.json`

O arquivo `server.json` é utilizado como banco de dados para o servidor. Ele contém os dados dos usuários e pode ser modificado para adicionar mais informações, conforme necessário. Um exemplo de estrutura de dados:

```json
{
  "users": [
    { "id": 1, "name": "Ravel", "age": 22, "email": "ravel.teste@email.com" }
  ]
}
```

### 6. Comandos Importantes

- **Rodar o servidor com `json-server` e `nodemon`**:
  ```bash
  npm run server
  ```

- **Instalar as dependências**:
  ```bash
  npm install
  ```

- **Rodar o projeto React**:
  ```bash
  npm start
  ```

### 7. Como Funciona

- **Cadastro de Usuário**: Quando o formulário é enviado, ele valida se os campos estão preenchidos corretamente (verificando o e-mail) e adiciona o novo usuário ao `server.json` através do `json-server`.
- **Listagem de Usuários**: A lista de usuários é atualizada sempre que o estado `data` é modificado, seja por uma adição ou remoção de usuário.
- **Exclusão de Usuário**: Ao clicar no botão "X" ao lado do usuário, o usuário é removido da lista, tanto no front-end quanto no back-end (arquivo JSON).

### 8. Contribuindo

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Basta fazer um fork deste repositório, criar sua branch de feature e enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```

### Explicação:

- **Estrutura do Projeto**: Apresenta os arquivos principais e sua organização.
- **Como Rodar o Projeto**: Passo a passo sobre como rodar o projeto, desde a instalação até a execução.
- **Funcionamento do Código**: Descrição do fluxo de cadastro, listagem e exclusão de usuários.
- **Comandos Importantes**: Comandos úteis para rodar o servidor e o frontend.
- **Licença**: A licença do projeto (caso tenha).
