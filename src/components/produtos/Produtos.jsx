// components/Produtos/Produtos.jsx

import React from 'react';

const Produtos = () => {
  // Produtos com link da imagem, título e descrição
  const produtos = [
    {
      id: 1,
      titulo: "Afria Inteligência Artificial",
      descricao: "Soluções de IA personalizadas para atender às necessidades da sua empresa.",
      imagem: "https://storage.googleapis.com/a1aa/image/zQQQkCa1NV6OFBbk1OJSwldiEz37RORKbRqufpme0lBizAvTA.jpg",
      contato: "https://wa.me/258845508884"
    },
    {
      id: 2,
      titulo: "API IA",
      descricao: "APIs de inteligência artificial para integrar em seus sistemas e aplicativos.",
      imagem: "https://storage.googleapis.com/a1aa/image/EBCzKbNffXlpS0tuismzgpNcMXFI7LTkpJAyUyflgEiHnBeOB.jpg",
      contato: "https://wa.me/258845508884"
    },
    {
      id: 3,
      titulo: "Bot Criator Telegram",
      descricao: "Ferramenta para criar e gerenciar bots no Telegram de forma fácil e eficiente.",
      imagem: "https://storage.googleapis.com/a1aa/image/2lvVM8i3Acp8Nx3VdVogcHKvMl20k2matPYF3i7xROK5Mw7E.jpg",
      contato: "https://wa.me/258845508884"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {produtos.map((produto) => (
        <div key={produto.id} className="bg-white p-6 rounded-lg shadow-lg slide-up">
          <img
            src={produto.imagem}
            alt={`Imagem de ${produto.titulo}`}
            className="mb-4 rounded"
            width="600"
            height="400"
          />
          <h3 className="text-2xl font-bold mb-2">{produto.titulo}</h3>
          <p>{produto.descricao}</p>
          <a
            href={produto.contato}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mt-4"
          >
            Contactar no WhatsApp
          </a>
        </div>
      ))}
    </div>
  );
};

export default Produtos;
