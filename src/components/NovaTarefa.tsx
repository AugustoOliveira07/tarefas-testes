
"use client";

import { useState, type FormEvent } from "react";

// Define as propriedades recebidas pelo componente
interface NovaTarefaProps {
  aoAdicionar: (titulo: string) => void;
}

export default function NovaTarefa({
  aoAdicionar,
}: NovaTarefaProps) {
  // Armazena o texto digitado pelo usuário
  const [titulo, setTitulo] = useState("");

  // Controla o envio do formulário
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Impede que tarefas vazias sejam adicionadas
    if (!titulo.trim()) {
      return;
    }

    // Envia o título para o componente pai
    aoAdicionar(titulo.trim());

    // Limpa o campo depois de adicionar
    setTitulo("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        aria-label="Nova tarefa"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
        className="flex-1 rounded-lg border border-gray-300 p-3 text-gray-900"
      />

      <button
        type="submit"
        disabled={!titulo.trim()}
        className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Adicionar
      </button>
    </form>
  );
}
