
# Rede Social para a Comunidade de TI

Bem-vindo à nossa rede social voltada para profissionais, entusiastas e estudantes de TI! Aqui você encontrará comunidades específicas para linguagens de programação como Java, JavaScript, Python, C++ e muitas outras. Além disso, temos espaços dedicados a tópicos como segurança cibernética, inteligência artificial, redes de computadores, desenvolvimento web, bancos de dados e hardware. Nosso objetivo é criar um ambiente colaborativo onde a galera do TI possa compartilhar ideias, aprender juntos e se manter atualizada com as últimas inovações. Participe das conversas, resolva problemas e faça parte de uma rede dinâmica e cheia de possibilidades para o futuro da tecnologia!

Este é um projeto **open-source** e está em constante desenvolvimento. Contribuições são bem-vindas!

## Tecnologias Utilizadas

- **Front-end**: Angular (Framework para construção de SPAs)
- **Back-end**: Spring Boot (Framework Java para construção de APIs)
- **Autenticação**: JWT (JSON Web Token)

## Funcionalidades

- **Front-end**:
  - Aplicação Angular com design responsivo.
  - Interface de autenticação de usuários para login e registro.
  - Funcionalidades de rede social: criação de postagens, comentários e perfis de usuário.
  
- **Back-end**:
  - API Spring Boot com os seguintes endpoints para interação com o front-end:
    - **POST** `/auth/login`: Autentica um usuário e retorna um token.
    - **POST** `/auth/register`: Registra um novo usuário e retorna um token.

## Link para Design (Figma)

O design do projeto está disponível no Figma. Siga o protótipo para visualizar a interface e contribuir com ideias e sugestões:  
[Figma - Design do Projeto](https://www.figma.com/design/Uj1BH0OhIYozHO1FI7U1Qh/Untitled?node-id=45-2&t=8lt0Ohe5KKiqCI4e-0)

## Instruções de Instalação

### Front-end

1. Navegue até o diretório `front-end`.
2. Instale as dependências:
   ```bash
   npm install
   ```

### Back-end

1. Navegue até o diretório `login-app-backend`.
2. Construa o projeto utilizando o Maven:
   ```bash
   mvn clean install
   ```

## Instruções de Uso

### Front-end

Para iniciar o servidor de desenvolvimento local, execute:

```bash
ng serve
```

Uma vez que o servidor esteja em execução, abra seu navegador e acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que você modificar qualquer um dos arquivos de origem.

### Back-end

Para executar a aplicação do back-end, utilize:

```bash
mvn spring-boot:run
```

## Endpoints da API do Backend

- **POST** `/auth/login`
  - Corpo da Requisição:
    ```json
    {
      "email": "usuario@exemplo.com",
      "password": "suasenha"
    }
    ```
  - Resposta:
    ```json
    {
      "name": "Nome do Usuário",
      "token": "seu_token_jwt"
    }
    ```

- **POST** `/auth/register`
  - Corpo da Requisição:
    ```json
    {
      "name": "Nome do Usuário",
      "email": "usuario@exemplo.com",
      "password": "suasenha"
    }
    ```
  - Resposta:
    ```json
    {
      "name": "Nome do Usuário",
      "token": "seu_token_jwt"
    }
    ```

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature (`git checkout -b feature-nome`).
3. Faça o commit das suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin feature-nome`).
5. Crie um Pull Request para revisão.

## Recursos Adicionais

- [Visão Geral e Referência de Comandos do Angular CLI](https://angular.dev/tools/cli)
- [Documentação do Spring Boot](https://spring.io/projects/spring-boot)
