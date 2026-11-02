
// Define o formato de uma tarefa
export interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

// Lista simulada de tarefas
const tarefas: Tarefa[] = [
  { id: 1, titulo: "Estudar Next.js", concluida: false },
  { id: 2, titulo: "Aprender testes unitários", concluida: false },
  { id: 3, titulo: "Praticar TypeScript", concluida: true },
];

// Simula uma requisição a uma API
export async function buscarTarefas(): Promise<Tarefa[]> {
  return Promise.resolve([...tarefas]);
}
