
import { useMemo } from "react";
import type { Tarefa } from "@/data/tarefas";

// Hook personalizado que conta as tarefas
export function useContadorDeTarefas(tarefas: Tarefa[]): number {
  // Calcula a quantidade de tarefas da lista
  const quantidade = useMemo(() => {
    return tarefas.length;
  }, [tarefas]);

  return quantidade;
}
