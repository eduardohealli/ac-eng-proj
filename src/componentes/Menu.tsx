import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Botao from "./Botao";
import logo from "../assets/logo-marca-colorida.png";
import { Link } from "react-router-dom";

const links = [
  { nome: "Projetos", href: "/projetos" },
  { nome: "Soluções", href: "/solucoes" },
  { nome: "Sobre", href: "/sobre" },
  { nome: "Contato", href: "/contato" },
];

export default function Menu({ paginaAtual }: { paginaAtual: string }) {
  const [aberto, setAberto] = useState(false);
  const [paginaSelecionada] = useState(paginaAtual);

  const toggleMenu = () => {
    setAberto(!aberto);
  };

  return (
    <header className="relative w-full bg-white">
      <div className="flex items-center justify-between py-4 px-12 md:my-4 md:mx-4">
        <Link className="logo" to={"/"}>
          <img
            className="w-32 md:w-40"
            src={logo}
            alt="Logo da AC Engenharia e Projetos"
          ></img>
        </Link>

        <div className="hidden gap-6 items-center justify-end md:flex ">
          {links.map((link) => (
            <Link
              className="text-black hover:text-secundaria text-lg"
              key={link.nome}
              to={link.href}
            >
              {link.nome}
            </Link>
          ))}
          <Botao tipo="" texto="Fale com a AC" href="/contato"></Botao>
        </div>

        <button
          className="relative flex items-center justify-center w-10 h-10 p-1 text-gray-900 focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <FiMenu
            className={`absolute w-8 h-8 transition-all duration-500 ease-in-out ${
              aberto
                ? "opacity-0 rotate-90 scale-50"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />

          {/* Ícone de Fechar (X) */}
          <FiX
            className={`absolute w-8 h-8 transition-all duration-500 ease-in-out ${
              aberto
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-50"
            }`}
          />
        </button>

        {aberto && (
          <nav
            className={`absolute left-0 z-50 w-full bg-white shadow-md top-full md:hidden grid transition-all duration-500 ease-in-out ${
              aberto
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col w-full">
              {links.map((link) => (
                <Link
                  to={link.href}
                  onClick={() => setAberto(false)}
                  className={`block w-full px-6 py-4 text-2xl border-b border-gray-300 transition-colors duration-700 ${
                    link.nome === paginaSelecionada
                      ? "text-secundaria"
                      : "text-quaternaria"
                  }`}
                >
                  {link.nome}
                </Link>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
