
"use client";

import { useState } from "react";
import type { Tarefa } from "@/data/tarefas";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import NovaTarefa from "./NovaTarefa";

interface ListaDeTarefasProps {
  tarefasIniciais: Tarefa[];
}

export default function ListaDeTarefas({
  tarefasIniciais,
}: ListaDeTarefasProps) {
  // Armazena as tarefas no estado
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  // Controla quais tarefas serão exibidas
const [filtro, setFiltro] = useState<
  "todas" | "pendentes" | "concluidas"
>("todas");

  // Conta a quantidade total de tarefas
  const quantidade = useContadorDeTarefas(tarefas);

  // Conta as tarefas concluídas
const concluidas = tarefas.filter(
  (tarefa) => tarefa.concluida
).length;

// Conta as tarefas pendentes
const pendentes = tarefas.filter(
  (tarefa) => !tarefa.concluida
).length;

// Filtra as tarefas conforme a opção selecionada
const tarefasFiltradas = tarefas.filter((tarefa) => {
  if (filtro === "concluidas") {
    return tarefa.concluida;
  }

  if (filtro === "pendentes") {
    return !tarefa.concluida;
  }

  return true;
});

  // Adiciona uma nova tarefa
  function adicionarTarefa(titulo: string) {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      titulo,
      concluida: false,
    };

    setTarefas((tarefasAtuais) => [
      ...tarefasAtuais,
      novaTarefa,
    ]);
  }

  // Alterna entre tarefa concluída e pendente
  function alternarConclusao(id: number) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">
        Minhas Tarefas
      </h1>

      
<div className="mb-6 grid grid-cols-3 gap-3">
  <div className="rounded-lg bg-blue-50 p-3 text-center">
    <p className="text-2xl font-bold text-blue-600">
      {quantidade}
    </p>
    <p className="text-sm text-gray-600">Total</p>
  </div>

  <div className="rounded-lg bg-yellow-50 p-3 text-center">
    <p className="text-2xl font-bold text-yellow-600">
      {pendentes}
    </p>
    <p className="text-sm text-gray-600">Pendentes</p>
  </div>

  <div className="rounded-lg bg-green-50 p-3 text-center">
    <p className="text-2xl font-bold text-green-600">
      {concluidas}
    </p>
    <p className="text-sm text-gray-600">Concluídas</p>
  </div>
</div>

{/* Mantém o contador acessível aos testes existentes */}
<p className="sr-only">
  Total de tarefas: {quantidade}
</p>


      <NovaTarefa aoAdicionar={adicionarTarefa} />

      
{/* Botões para filtrar as tarefas */}
<div className="mt-6 flex flex-wrap gap-2">
  {(["todas", "pendentes", "concluidas"] as const).map(
    (opcao) => (
      <button
        key={opcao}
        type="button"
        onClick={() => setFiltro(opcao)}
        aria-pressed={filtro === opcao}
        className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
          filtro === opcao
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        {opcao === "todas"
          ? "Todas"
          : opcao === "pendentes"
          ? "Pendentes"
          : "Concluídas"}
      </button>
    )
  )}
</div>


      <ul className="mt-6 space-y-3">
        {tarefasFiltradas.map((tarefa) => (
          <li key={tarefa.id}>
            <button
              type="button"
              onClick={() => alternarConclusao(tarefa.id)}
              aria-pressed={tarefa.concluida}
              className={`flex w-full items-center gap-3 rounded-lg border p-4 text-left transition-colors ${
                tarefa.concluida
                  ? "border-green-200 bg-green-50 text-gray-500"
                  : "border-gray-200 bg-gray-50 text-gray-800 hover:bg-gray-100"
              }`}
            >
              <span aria-hidden="true">
                {tarefa.concluida ? "✅" : "⬜"}
              </span>

              <span
                className={
                  tarefa.concluida ? "line-through" : ""
                }
              >
                {tarefa.titulo}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
