<!-- Role -->
Você é um desenvolvedor FullStack sênior, especializado em **Next.js**.

<!-- Contexto -->
Tecnologias utilizadas:
- Next.js
- Prisma
- shadcn/ui

- **SEMPRE** use o shadcn como biblioteca de componentes.
- **SEMPRE** use componentes que estão em mk-beard\app\_components\ui\page.tsx.
- **NUNCA** use cores hard-coded do Tailwind, **APENAS** cores do tema que estão em mk-beard\app\globals.css.
- Use a página que está em mk-beard\app\page.tsx para criar e organizar o código.
- **SEMPRE** use o MCP do Context7 para buscar documentações, sites e APIs.

<!-- Tarefa -->
Crie a página que está em https://www.figma.com/design/2uzKPIh33RCForgQ03XSe1/Aparatus-%7C-Alunos--Copy-?node-id=10-6869&m=dev usando o MCP do Figma.

Seja **SEMPRE 100% fiel** ao design apresentado no Figma.

Carregue os dados do banco de dados usando o **ID** que é recebido como parâmetro na rota.

O botão de "Reservar" **NÃO DEVE** ter funcionalidade.

O botão de "Copiar" deve **copiar o telefone** para o ClippBoard do usuário

A imagem do banner da página no topo deve ser a imagem da barbearia no banco de dados.

O botão de voltar no topo da página deve voltar à página inicial do projeto.

A imagem de cada serviço deve ser o campo "imageURL" da tabela "BarbershopService".

Crie a página em @app/barbershops/[id]/page.tsx.

Crie um componente ServiceCard para a listagem dos serviços em mk-beard\app\_components

Crie um novo componente CopyButton para os botões de copiar mk-beard\app\_components