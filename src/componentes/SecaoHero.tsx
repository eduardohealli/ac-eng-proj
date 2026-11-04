import { useEffect, useState } from "react";
import imagem from "../assets/hero-landing.png";

const textos = ["a indústria", "a arquitetura hospitalar", "a educação"];

export default function SecaoHero() {
  const [, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((atual) => (atual + 1) % textos.length);
    }, 2000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="relative w-screen h-dvh">
      <img
        className="absolute w-full h-full object-cover"
        src={imagem}
        alt="Hero"
      />
      <div className="absolute inset-0 bg-linear-to-r from-primaria/90 to-transparent"></div>

      <div className="absolute inset-0 flex flex-col gap-4 w-full h-full justify-end pl-4 pb-10 md:pl-14">
        <h2 className="text-3xl text-white md:text-6xl">
          Engenharia que
          <br />
          transforma
          <br />
          <strong className="font-bold text-secundaria">a indústria e</strong>
          <br />
          <strong className="font-bold text-secundaria"> hospitais</strong>
        </h2>

        <span className="text-sm text-gray-500 md:text-lg md:mb-16">
          Projetos industriais e hospitalares desenvolvidos com a metologia BIM.
        </span>
      </div>
    </div>
  );
}
