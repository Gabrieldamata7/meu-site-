import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <h1 className="text-4xl font-bold">Bem-vindo ao Guia de IA</h1>
      <p className="mt-4 text-lg text-gray-300">Aprenda sobre Inteligência Artificial e suas aplicações.</p>

      <Link href="/saibamais">
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
          Saiba Mais
        </button>
      </Link>
    </div>
  );
}
