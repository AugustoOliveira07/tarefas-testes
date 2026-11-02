
import { render, screen, fireEvent } from "@testing-library/react";
import ListaDeTarefas from "@/components/ListaDeTarefas";
import type { Tarefa } from "@/data/tarefas";

// Dados simulados para os testes
const tarefasIniciais: Tarefa[] = [
  { id: 1, titulo: "Estudar Next.js", concluida: false },
  { id: 2, titulo: "Aprender Jest", concluida: false },
  { id: 3, titulo: "Praticar TypeScript", concluida: true },
];

describe("Componente ListaDeTarefas", () => {
  // Teste 1: verifica os contadores
  
test("deve mostrar os contadores corretamente", () => {
  render(
    <ListaDeTarefas tarefasIniciais={tarefasIniciais} />
  );

  // Verifica a quantidade total
  expect(
    screen.getByText("Total de tarefas: 3")
  ).toBeInTheDocument();

  // Verifica a quantidade de tarefas pendentes
  expect(screen.getByText("2")).toBeInTheDocument();

  // Verifica a quantidade de tarefas concluídas
  expect(screen.getByText("1")).toBeInTheDocument();

  // Verifica se os três filtros aparecem
  expect(
    screen.getByRole("button", { name: "Todas" })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: "Pendentes" })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: "Concluídas" })
  ).toBeInTheDocument();
});

  // Teste 2: marca uma tarefa como concluída
  test("deve marcar uma tarefa como concluída", () => {
    render(
      <ListaDeTarefas tarefasIniciais={tarefasIniciais} />
    );

    const tarefa = screen.getByRole("button", {
      name: /Estudar Next.js/,
    });

    expect(tarefa).toHaveAttribute("aria-pressed", "false");

    fireEvent.click(tarefa);

    expect(tarefa).toHaveAttribute("aria-pressed", "true");
  });

  // Teste 3: desmarca uma tarefa concluída
  test("deve voltar uma tarefa para pendente", () => {
    render(
      <ListaDeTarefas tarefasIniciais={tarefasIniciais} />
    );

    const tarefa = screen.getByRole("button", {
      name: /Praticar TypeScript/,
    });

    fireEvent.click(tarefa);

    expect(tarefa).toHaveAttribute("aria-pressed", "false");
  });

  // Teste 4: filtra tarefas pendentes
  test("deve exibir somente tarefas pendentes", () => {
    render(
      <ListaDeTarefas tarefasIniciais={tarefasIniciais} />
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Pendentes" })
    );

    expect(screen.getByText("Estudar Next.js"))
      .toBeInTheDocument();

    expect(screen.getByText("Aprender Jest"))
      .toBeInTheDocument();

    expect(screen.queryByText("Praticar TypeScript"))
      .not.toBeInTheDocument();
  });

  // Teste 5: filtra tarefas concluídas
  test("deve exibir somente tarefas concluídas", () => {
    render(
      <ListaDeTarefas tarefasIniciais={tarefasIniciais} />
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Concluídas" })
    );

    expect(screen.getByText("Praticar TypeScript"))
      .toBeInTheDocument();

    expect(screen.queryByText("Estudar Next.js"))
      .not.toBeInTheDocument();
  });
});
