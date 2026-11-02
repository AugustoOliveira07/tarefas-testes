
"use client";

import { useState } from "react";
import type { Tarefa } from "@/data/tarefas";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import NovaTarefa from "./NovaTarefa";

// Define as propriedades recebidas pelo componente
interface ListaDeTarefasProps {
  tarefasIniciais: Tarefa[];
}

export default function ListaDeTarefas({
  tarefasIniciais,
}: ListaDeTarefasProps) {
  // Armazena a lista de tarefas no estado
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  // Utiliza nosso hook para contar as tarefas
  const quantidade = useContadorDeTarefas(tarefas);

  // Adiciona uma nova tarefa à lista
  function adicionarTarefa(titulo: string) {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      titulo,
      concluida: false,
    };

    // Atualiza a lista mantendo as tarefas anteriores
    setTarefas((tarefasAtuais) => [
      ...tarefasAtuais,
      novaTarefa,
    ]);
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">
        Minhas Tarefas
      </h1>

      <p className="mb-6 text-gray-600">
        Total de tarefas: {quantidade}
      </p>

      {/* Formulário para adicionar tarefas */}
      <NovaTarefa aoAdicionar={adicionarTarefa} />

      {/* Lista de tarefas */}
      <ul className="mt-6 space-y-3">
        {tarefas.map((tarefa) => (
          <li
            key={tarefa.id}
            className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-800"
          >
            {tarefa.titulo}
          </li>
        ))}
      </ul>
    </div>
  );
}
