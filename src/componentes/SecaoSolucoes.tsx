import hospitalar from "../assets/solucoes/engenharia-hospitalar.jpg";
import industrial from "../assets/solucoes/industrial.webp";
import BIM from "../assets/solucoes/BIM.png";
import consultoria from "../assets/solucoes/consultoria.png";
import treinamento from "../assets/solucoes/treinamento.webp";
import CabecalhoSecao from "./CabecalhoSecao";
import type { ReactNode } from "react";

const solucoes = [
  {
    titulo: "Clínicas e Hospitais",
    descricao: "",
    imagem: hospitalar,
  },
  {
    titulo: "Engenharia industrial",
    descricao: "",
    imagem: industrial,
  },
  {
    titulo: "BIM",
    descricao: "",
    imagem: BIM,
  },
  {
    titulo: "Consultoria",
    descricao: "",
    imagem: consultoria,
  },
  {
    titulo: "Treinamento",
    descricao: "",
    imagem: treinamento,
  },
];

function ItemGrid({
  titulo,
  descricao,
  imagem,
}: {
  titulo: string;
  descricao: string;
  imagem: string;
}) {
  return (
    <div className="group relative w-full max-w-5xl aspect-16/10 overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        src={imagem}
        alt={titulo}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10 transition-all duration-500 group-hover:from-black/95"></div>
      <div className="relative z-20 flex flex-col justify-end h-full p-4 md:p-10">
        <div className="space-y-3 pb-4">
          <h3 className="text-xl font-semibold text-white md:text-3xl">
            {titulo}
          </h3>
          <p className="text-sm text-gray-300 md:text-base md:opacity-0 md:translate-y-6 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-750">
            {descricao}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SecaoSolucoes({
  Titulo,
  kickerSecudario = false,
}: {
  Titulo?: ReactNode;
  kickerSecudario: boolean;
}) {
  return (
      <div className="flex flex-col gap-6 pb-12 md:pb-24 justify-start w-full bg-superficie">
        <CabecalhoSecao
          kicker={"SOLUÇÕES"}
          titulo={Titulo || ""}
          kickerSecudario={kickerSecudario}
          background="bg-superficie"
        />
        <div className="grid grid-cols-1 w-full gap-1 sm:grid-cols-2 px-4 md:px-8">
          {solucoes.map((solucao, index) => (
            <ItemGrid
              key={index}
              titulo={solucao.titulo}
              descricao={solucao.descricao}
              imagem={solucao.imagem}
            />
          ))}
        </div>
      </div>
  );
}
