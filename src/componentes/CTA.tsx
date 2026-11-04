import Botao from "./Botao";
import { BsArrowUpRight } from "react-icons/bs";

export default function CTA() {
  return (
    <>
      <div className="w-full py-14 px-6">
        <div className="group flex flex-col items-center">

          <div className="mb-8 justify-center rounded-full border border-gray-300 p-4 group-hover:border-primaria transition-colors duration-700 ">
            <BsArrowUpRight className="text-xl text-primaria" />
          </div>

          <div className="mb-5">
            <h2 className="text-3xl! text-quaternaria text-center md:text-5xl!">
              Tem um projeto
              <br />
              <strong className="font-bold text-primaria">
                hospitalar ou industrial
              </strong>
              <br />
              em mente?
            </h2>
          </div>

          <div className="text-gray-500 text-base mb-11 font-medium">
            <p>
              Converse conosco sem compromisso.
              <br />
              Entenderemos seu desafio para propormos a melhor solução.
            </p>
          </div>

          <div className="flex flex-col gap-4 px-5 items-center justify-center sm:flex-row">
            <Botao tipo="" texto="Fale com a AC" href="/contato"></Botao>

            <Botao tipo="simples" texto="Ver projetos" href="/projetos"></Botao>
          </div>
        </div>
      </div>
    </>
  );
}
