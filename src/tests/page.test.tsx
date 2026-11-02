
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";

describe("Página principal", () => {
  // Teste 1: verifica as tarefas carregadas pelo servidor
  test("deve renderizar as tarefas iniciais", async () => {
    // Aguarda o Server Component carregar os dados
    const pagina = await Home();

    render(pagina);

    expect(
      screen.getByRole("heading", { name: "Minhas Tarefas" })
    ).toBeInTheDocument();

    expect(screen.getByText("Estudar Next.js")).toBeInTheDocument();

    expect(
      screen.getByText("Aprender testes unitários")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Praticar TypeScript")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Total de tarefas: 3")
    ).toBeInTheDocument();
  });

  // Teste 2: verifica a adição de uma tarefa na página
  test("deve atualizar a lista e o contador", async () => {
    const pagina = await Home();

    render(pagina);

    const input = screen.getByRole("textbox", {
      name: "Nova tarefa",
    });

    const botao = screen.getByRole("button", {
      name: "Adicionar",
    });

    // Digita uma nova tarefa
    fireEvent.change(input, {
      target: { value: "Estudar Testing Library" },
    });

    // Adiciona a tarefa
    fireEvent.click(botao);

    // Verifica a nova tarefa na lista
    expect(
      screen.getByText("Estudar Testing Library")
    ).toBeInTheDocument();

    // Verifica a atualização do contador
    expect(
      screen.getByText("Total de tarefas: 4")
    ).toBeInTheDocument();
  });
});
