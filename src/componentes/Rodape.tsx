import {
  BsEnvelope,
  BsTelephone,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";
import logoMarca from "../assets/logo-marca.png";

function Item({ texto }: { texto: string }) {
  return (
    <>
      <span className="flex flex-row gap-2 text-xs text-gray-500">
        <span className="text-10px text-terciaria">●</span>
        {texto}
      </span>
    </>
  );
}

export default function Rodape() {
  return (
    <>
      <footer className="bg-quaternaria text-white py-8 px-6 md:px-96">
        <div className="flex flex-col gap-8 items-start sm:flex-row md:justify-between">
          <div className="flex flex-col gap-5">
            <img src={logoMarca} alt="Logo da empresa" className="h-10 w-15" />

            <p className="text-left text-sm text-gray-300">Engenharia hospitalar e industrial inteligente</p>

            <div className="flex flex-col gap-2">
              <Item texto="Escritório de projetos" />
              <Item texto="Escola de ensino" />
              <Item texto="Conteúdo técnico autoral" />
            </div>

            <div className="midias-sociais flex flex-row gap-2">
              <a className="group bg-gray-700 p-2 rounded-xs" href="https://www.linkedin.com/company/ac-engenharia-e-projetos">
                <BsLinkedin className="text-gray-300 text-lg group-hover:text-terciaria" />
              </a>

              <a className="group bg-gray-700 p-2 rounded-xs" href="https://www.instagram.com/acengenharia_comercial">
                <BsInstagram className="text-gray-300 text-lg group-hover:text-terciaria" />
              </a>

              
              <a className="group bg-gray-700 p-2 rounded-xs">
                <BsInstagram className="text-gray-300 text-lg group-hover:text-terciaria" />
              </a>
            </div>
          </div>

          <div className="sobre flex flex-col gap-5 text-xs items-start">
            <p className="font-bold text-gray-500">SOBRE A AC</p>
            <p className="text-gray-300">A AC é uma empresa de engenharia especializada em projetos para indústrias farmacêuticas, alimentares  e hospitais.</p>
          </div>

          <div className="contatos flex flex-col gap-5 text-xs items-start">
            <p className="font-bold text-gray-500">CONTATO</p>

            <div className="flex flex-row gap-2 items-center">
              <BsEnvelope className="text-gray-500" />
              <p className="text-gray-300 hover:text-terciaria">
                engenharia@projetosac.com
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <BsTelephone className="text-gray-500" />
              <p className="text-gray-300 hover:text-terciaria">
                (88) 98121-6331
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <LuMapPin className="text-gray-500" />
              <p className="text-gray-300 hover:text-terciaria">
                Juazeiro do Norte - Ceará/CE
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
