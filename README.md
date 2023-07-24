# DeoStore STORE

img

## Sobre

**DeoStore** é um projeto de E-Commerce full stack que combina uma plataforma de E-Commerce com um Dashboard & CMS versátil que permite aos administradores gerenciar catálogos de produtos, categorias, medidas, cores, billboards, pedidos e outros conteúdos de forma fácil e intuitiva. A integração com o Stripe garante um processamento de pagamentos seguro e confiável para os clientes.

O deployment foi realizado com o Vercel e está disponível [aqui](https://deostore-store.vercel.app).

Para simulação de pagamento acesse [Stripe: como usar cartões de teste](https://stripe.com/docs/testing).

## Tecnologias

**DeoStore** foi desenvolvido utilizando as seguintes tecnologias:

- Next.js
- React
- Typescript
- Tailwind
- Shadcn-UI
- Prisma
- MySQL
- Stripe
- Clerk
- Cloudinary
- Recharts
- Zustand
- PlanetScale
- React-Hot-Toast
- Lucide-Icons

## Recursos

- Consumindo API gerado no ADMIN DASHBOARD para obter informações sobre os produtos disponíveis.
- Na página inicial do aplicativo, são exibidos produtos em destaque, selecionados para promoções ou lançamentos especiais.
- Os produtos são organizados em diferentes categorias para facilitar a navegação e a busca.
- Cada categoria de produto possui um "billboard" ou destaque visual na tela.
- Sistema de carrinho de compras que permite aos usuários adicionar itens aos seus carrinhos para posterior compra.
- Os usuários podem visualizar detalhes e informações essenciais sobre os produtos antes de adicioná-los ao carrinho.
- Página dedicada à visualização de todas as especificações, descrições detalhadas do produto e imagens, alem de produtos relacionados.
- Filtros de produtos com base em categorias, tamanhos e cores.
- Finalização de compras com integração do Stripe.

## Instalação

```shell
git clone https://github.com/Sellucas/deostore-store.git

cd deostore-store

npm i
```

### Configuração arquivo .env

```js
NEXT_PUBLIC_API_URL=
```

### Iniciar o app

```shell
npm run dev
```

### Comandos disponíveis

Executando comandos com o npm `npm run [comando]`

comando   | descrição
--------- | ------
`dev`  | Inicia uma instância de desenvolvimento do app

### Estrutura de Diretórios

```
├── . . .
├── actions
├── app
    ├── (routes)
        ├── cart
        ├── category
        ├── product
        └── page.ts
    ├── . . .
    └── layout.ts
├── components
├── hooks
├── lib
├── . . .
├── providers
├── public
└── . . .    
```

## Contato

- LinkedIn: [in/lucas-sell-machado](https://www.linkedin.com/in/lucas-sell-machado/)
- Portfólio: [portfolio-sellucas.app](https://portfolio-sellucas.vercel.app)
- Email: <lucassellmachado@gmail.com>