
# Lista de Tarefas — Next.js 15

Projeto desenvolvido como atividade prática do curso Fullstack JavaScript da EBAC, com foco em testes unitários utilizando Next.js 15, TypeScript, Jest e React Testing Library.

## Funcionalidades

- Listagem de tarefas carregadas por um Server Component.
- Simulação de busca de dados usando Promise.resolve().
- Adição de novas tarefas por formulário controlado.
- Validação para impedir tarefas vazias.
- Contagem automática de tarefas com hook personalizado.
- Interface responsiva utilizando Tailwind CSS.

## Tecnologias utilizadas

- Next.js 15 (App Router)
- React
- TypeScript
- Tailwind CSS
- Jest
- React Testing Library

## Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd tarefas-testes
```

Instale as dependências:

```bash
npm install
```

## Executando o projeto

```bash
npm run dev
```

Acesse http://localhost:3000.

## Executando os testes

Para executar os testes unitários:

```bash
npm test
```

Para verificar a cobertura:

```bash
npm run test:coverage
```

Para gerar a versão de produção:

```bash
npm run build
```

## Testes implementados

### Componente NovaTarefa
- Renderização do formulário.
- Validação do campo vazio.
- Submissão de novas tarefas.
- Bloqueio de entradas contendo apenas espaços.

### Hook useContadorDeTarefas
- Contagem correta de tarefas.
- Retorno zero para listas vazias.
- Atualização da contagem após alteração da lista.

### Página principal
- Renderização das tarefas iniciais.
- Atualização da lista e do contador após uma adição.

## Resultados

- 9 testes aprovados.
- 3 suítes de testes aprovadas.
- 96,77% de cobertura de instruções.
- Build de produção realizado com sucesso.

## Observações

Os dados são simulados localmente. As novas tarefas são mantidas no estado do React e não persistem após atualizar a página.
