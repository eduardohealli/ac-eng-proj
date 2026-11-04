import type { IconType } from "react-icons/lib";
import { BsEnvelope, BsWhatsapp } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";
import Rodape from "../componentes/Rodape";
import Menu from "../componentes/Menu";

function Card({
  titulo,
  texto,
  Icone,
  onClick,
}: {
  titulo: string;
  texto: string;
  Icone: IconType;
  onClick?: () => void;
}) {
  return (
    <div className="flex flex-row items-center gap-4 px-4 py-6 w-full max-w-96 rounded-md bg-superficie hover:cursor-pointer" onClick={onClick}>
      <div>
        <Icone className="text-2xl text-secundaria" />
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <h3 className="text-xs font-bold text-gray-500">{titulo}</h3>
        <p className="text-xs text-black">{texto}</p>
      </div>
    </div>
  );
}

export default function PaginaContato() {

  const enviarMensagemWhatsapp = () => {

    const numero = "558881216331"; 
    const  mensagem = "Olá! Gostaria de saber mais informações sobre o serviço.";
    const mensagemCodificada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numero}?text=${mensagemCodificada}`;
    window.open(url, "_blank", "noopener,noreferrer");

  }
  return (
    <section className="w-full flex flex-col">
      <Menu paginaAtual={"Contato"}></Menu>
      <div className="flex flex-col gap-6 justify-start w-full px-4 py-10 bg-quaternaria md:px-14 md:pb-20">
        <span className="text-xs font-bold text-secundaria md:text-base">
          CONTATO
        </span>
        <h2 className="text-3xl text-white md:text-5xl">
          Vamos construir o futuro do seu
          <br />
          <strong className="font-font-bold">Hospital e Indústria</strong>
        </h2>
        <span className="text-sm text-gray-300 md:text-lg">
          Conte-nos sobre o seu projeto e entraremos em contato para apresentar
          a melhor solução.
        </span>
      </div>

      <div className="flex flex-col gap-4 px-4 py-10 md:px-14">
        <span className="text-lg text-quaternaria font-medium md:text-2xl">
          Fale diretamente
        </span>
        <span className="text-sm text-gray-500 md:text-lg">
          Estamos disponíveis por Whatsapp, e-mail ou telefone durante o horário
          comercial.
        </span>
        <div className="flex flex-col gap-4 justify-center ">
          <Card titulo="WHATSAPP" texto="(88) 98121-6331" Icone={BsWhatsapp} onClick={enviarMensagemWhatsapp} />
          <Card
            titulo="E-MAIL"
            texto="engenharia@projetosac.com"
            Icone={BsEnvelope}
          />
          <Card
            titulo="ESCRITÓRIO"
            texto="Juazeiro do Norte, Ceará"
            Icone={LuMapPin}
          />
        </div>
      </div>

      <Rodape />
    </section>
  );
}
