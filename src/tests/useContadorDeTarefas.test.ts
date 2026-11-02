
import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import type { Tarefa } from "@/data/tarefas";

describe("Hook useContadorDeTarefas", () => {
  // Teste 1: verifica a quantidade inicial
  test("deve retornar a quantidade correta de tarefas", () => {
    const tarefas: Tarefa[] = [
      { id: 1, titulo: "Estudar Next.js", concluida: false },
      { id: 2, titulo: "Aprender Jest", concluida: false },
      { id: 3, titulo: "Praticar TypeScript", concluida: true },
    ];

    const { result } = renderHook(() =>
      useContadorDeTarefas(tarefas)
    );

    expect(result.current).toBe(3);
  });

  // Teste 2: verifica uma lista vazia
  test("deve retornar zero quando não há tarefas", () => {
    const { result } = renderHook(() =>
      useContadorDeTarefas([])
    );

    expect(result.current).toBe(0);
  });

  // Teste 3: verifica a atualização da quantidade
  test("deve atualizar a contagem quando a lista mudar", () => {
    const tarefasIniciais: Tarefa[] = [
      { id: 1, titulo: "Estudar Next.js", concluida: false },
    ];

    const { result, rerender } = renderHook(
      ({ tarefas }) => useContadorDeTarefas(tarefas),
      {
        initialProps: { tarefas: tarefasIniciais },
      }
    );

    expect(result.current).toBe(1);

    // Simula a adição de uma nova tarefa
    const novasTarefas: Tarefa[] = [
      ...tarefasIniciais,
      { id: 2, titulo: "Aprender Jest", concluida: false },
    ];

    // Renderiza novamente o hook com a lista atualizada
    rerender({ tarefas: novasTarefas });

    expect(result.current).toBe(2);
  });
});
