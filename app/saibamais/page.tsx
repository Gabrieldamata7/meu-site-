import React from "react";

export default function Page() {
  return (
    <div className="bg-[#0b0f19] text-white min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-400 text-center">
        Explore o Poder da Inteligência Artificial
      </h1>
      <p className="text-lg text-gray-400 text-center mt-2">
        Descubra como a IA pode transformar sua vida de maneiras surpreendentes.
      </p>

      <div className="mt-6 w-full max-w-4xl">
        <div className="bg-[#151a26] p-6 rounded-xl shadow-lg mb-4">
          <h2 className="text-2xl font-bold text-blue-300">IA para Estudos</h2>
          <p className="text-gray-400 mt-2">
            Você está estudando da maneira mais eficiente possível? Conheça
            ferramentas que podem turbinar sua aprendizagem!
          </p>
        </div>

        <div className="bg-[#151a26] p-6 rounded-xl shadow-lg mb-4">
          <h2 className="text-2xl font-bold text-blue-300">IA no Trabalho</h2>
          <p className="text-gray-400 mt-2">
            Descubra como a IA pode automatizar tarefas, gerar textos e análises,
            e elevar sua produtividade para outro nível.
          </p>
        </div>

        <div className="bg-[#151a26] p-6 rounded-xl shadow-lg mb-4">
          <h2 className="text-2xl font-bold text-blue-300">IA para Ganhar Dinheiro</h2>
          <p className="text-gray-400 mt-2">
            Já pensou em usar IA para criar negócios lucrativos? Veja como
            transformar inteligência artificial em renda!
          </p>
        </div>

        <div className="bg-[#151a26] p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-blue-300">IA e o Futuro</h2>
          <p className="text-gray-400 mt-2">
            O que o futuro reserva para quem domina a Inteligência Artificial?
            Esteja preparado para o que está por vir!
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <a
          href="https://pay.kiwify.com.br/36vnFrK"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          Quero aprender a usar a IA
        </a>
      </div>

      <p className="text-gray-500 text-sm mt-6">
        Criado com <span className="text-red-500">❤</span> para transformar seu
        aprendizado com IA.
      </p>
    </div>
  );
}
