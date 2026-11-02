
import ListaDeTarefas from "@/components/ListaDeTarefas";
import { buscarTarefas } from "@/data/tarefas";

// Server Component: carrega as tarefas no servidor
export default async function Home() {
  const tarefas = await buscarTarefas();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-2xl">
        <ListaDeTarefas tarefasIniciais={tarefas} />
      </div>
    </main>
  );
}
