
import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

describe("Componente NovaTarefa", () => {
  // Teste 1: verifica se o formulário aparece
  test("deve renderizar o campo e o botão", () => {
    const aoAdicionar = jest.fn();

    render(<NovaTarefa aoAdicionar={aoAdicionar} />);

    expect(
      screen.getByPlaceholderText("Digite uma nova tarefa")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Adicionar" })
    ).toBeInTheDocument();
  });

  // Teste 2: verifica a validação do campo vazio
  test("deve desabilitar o botão quando o campo está vazio", () => {
    const aoAdicionar = jest.fn();

    render(<NovaTarefa aoAdicionar={aoAdicionar} />);

    const botao = screen.getByRole("button", {
      name: "Adicionar",
    });

    expect(botao).toBeDisabled();
  });

  // Teste 3: verifica se a tarefa é enviada corretamente
  test("deve adicionar uma tarefa ao enviar o formulário", () => {
    const aoAdicionar = jest.fn();

    render(<NovaTarefa aoAdicionar={aoAdicionar} />);

    const input = screen.getByPlaceholderText(
      "Digite uma nova tarefa"
    );

    const botao = screen.getByRole("button", {
      name: "Adicionar",
    });

    // Simula o usuário digitando uma tarefa
    fireEvent.change(input, {
      target: { value: "Estudar Jest" },
    });

    // Simula o clique no botão
    fireEvent.click(botao);

    // Verifica se a função recebeu o texto correto
    expect(aoAdicionar).toHaveBeenCalledWith("Estudar Jest");

    // Verifica se o campo foi limpo
    expect(input).toHaveValue("");
  });

  // Teste 4: verifica se espaços em branco são rejeitados
  test("não deve permitir tarefas apenas com espaços", () => {
    const aoAdicionar = jest.fn();

    render(<NovaTarefa aoAdicionar={aoAdicionar} />);

    const input = screen.getByRole("textbox", {
      name: "Nova tarefa",
    });

    fireEvent.change(input, {
      target: { value: "   " },
    });

    expect(
      screen.getByRole("button", { name: "Adicionar" })
    ).toBeDisabled();

    expect(aoAdicionar).not.toHaveBeenCalled();
  });
});
