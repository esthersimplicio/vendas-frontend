# Sistema de Vendas - Frontend

Este é o frontend para um sistema de vendas, construído com tecnologias web modernas para fornecer uma experiência de usuário intuitiva e interativa. O frontend é desenvolvido utilizando HTML, CSS e JavaScript, e interage com o backend por meio de APIs para acessar dados e funcionalidades do sistema.

## Funcionalidades Principais

### 1. Autenticação de Usuários

O frontend oferece uma interface de usuário para autenticação. Os usuários podem inserir suas credenciais (email e senha) para acessar o sistema.

### 2. Gerenciamento de Usuários

Os usuários podem se registrar no sistema, visualizar e editar suas informações pessoais.

### 3. Exibição de Catálogo de Produtos

O frontend exibe uma lista de produtos disponíveis para venda aos usuários autenticados.

## Tecnologias Utilizadas

- **HTML5**: Para estruturação da página e formulários de entrada.
- **CSS3**: Para estilização e design responsivo da interface do usuário.
- **JavaScript (ES6+)**: Para funcionalidades interativas, validação de formulários e requisições assíncronas à API.
- **Axios**: Biblioteca para fazer requisições HTTP ao backend de forma assíncrona.
- **Bootstrap**: Framework CSS para design responsivo e componentes pré-estilizados.
- **JWT (JSON Web Tokens)**: Para autenticação de usuários e manutenção de sessões.

## Estrutura do Projeto

- **`index.html`**: Página inicial do aplicativo, contendo os elementos da interface de usuário.
- **`styles/`**: Pasta contendo arquivos CSS para estilização.
- **`scripts/`**: Pasta contendo arquivos JavaScript para funcionalidades interativas.
- **`assets/`**: Pasta opcional para armazenar imagens, ícones ou outros recursos visuais.

## Configuração e Execução

### Requisitos

- Navegador Web Moderno (Google Chrome, Mozilla Firefox, Safari, etc.)
- Conexão com a Internet (para acessar APIs do backend)

### Passos para Execução

1. **Clonagem do Repositório**:
   - Clone este repositório em sua máquina local usando `git clone https://github.com/seu-usuario/sistema-vendas-frontend.git`.

2. **Configuração do Backend**:
   - Certifique-se de que o backend esteja em execução e acessível na URL configurada no frontend (geralmente definida em um arquivo de configuração ou em uma variável de ambiente).

3. **Abra o Frontend no Navegador**:
   - Navegue até o diretório do frontend no seu sistema de arquivos.
   - Abra o arquivo `index.html` em um navegador web para acessar o aplicativo.

## Funcionalidades do Aplicativo

### 1. Página de Login

- **Campos de Entrada**: Os usuários podem inserir seu email e senha.
- **Botão de Login**: Ao clicar no botão "Login", o frontend faz uma requisição ao endpoint de autenticação do backend para verificar as credenciais.
- **Mensagens de Erro**: Se as credenciais estiverem incorretas ou se houver um erro durante a autenticação, o frontend exibirá mensagens de erro apropriadas.

### 2. Página de Registro

- **Campos de Registro**: Os usuários podem inserir seu nome, email, telefone e senha.
- **Botão de Registro**: Ao clicar no botão "Registrar", o frontend faz uma requisição ao endpoint de registro do backend para criar uma nova conta de usuário.
- **Mensagens de Sucesso ou Erro**: Após o registro bem-sucedido, uma mensagem de sucesso é exibida. Em caso de erro, mensagens apropriadas são exibidas.

### 3. Catálogo de Produtos

- **Lista de Produtos**: O frontend recebe a lista de produtos do backend e os exibe de forma organizada.
- **Detalhes do Produto**: Os usuários podem clicar em um produto para ver detalhes adicionais.
- **Botão de Edição**: Se o usuário estiver autenticado como administrador, botões de edição estarão disponíveis para atualizar ou excluir produtos.

