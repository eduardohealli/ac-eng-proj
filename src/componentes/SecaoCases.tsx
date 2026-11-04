import CabecalhoSecao from "./CabecalhoSecao";
import ag_iso from "../assets/projetos/ag_iso.jpg";
import wfi_iso from "../assets/projetos/wfi_iso.jpg";
import vapor_puro from "../assets/projetos/vapor_puro_iso.jpg";
import torres from "../assets/projetos/torres.jpg";
import hvac from "../assets/projetos/hvac.jpg";
import clinica from "../assets/projetos/clinica.png";

const cases = [
  {
    titulo: "Projeto de HVAC industrial",
    descricao:
      "Desenvolvimento de projeto HVAC para indústria farmacêutica, atendendo aos requisitos de qualidade estabelecidos na IN 35 da RDC 658/2019.",
    img: hvac,
  },
  {
    titulo: "Projeto de distribuição de água para injetáveis",
    descricao:
      "Desenvolvimento de projeto de armazenamento e distribuição de água para injetáveis para indústria farmacêutica, atendendo aos requisitos de qualidade estabelecidos na ISPE e OMS GPM.",
    img: wfi_iso,
  },
  {
    titulo: "Projeto de distribuição de vapor puro",
    descricao:
      "Desenvolvimento de projeto de distribuição de vapor puro para indústria farmacêutica, atendendo aos requisitos de qualidade na EU GMP.",
    img: vapor_puro,
  },
  {
    titulo: "Projeto de central de água gelada",
    descricao:
      "Desenvolvimento de projeto de central de água gelada atendendo aos requisitos de boas práticas de engenharia e eficiência energética.",
    img: ag_iso,
  },
  {
    titulo: "Projeto de resfriamento industrial",
    descricao:
      "Desenvolvimento de resfriamento industrial, atendendo aos requisitos de boas práticas de engenharia e eficiência energética.",
    img: torres,
  },
    {
    titulo: "Projeto de clínicas médicas",
    descricao:
      "Desenvolvimento de clínicas médicas, atendendo aos requisitos estabelecidos na RDC 50/2002.",
    img: clinica,
  },
];

function Card({
  img,
  titulo,
  descricao,
}: {
  img: string;
  titulo: string;
  descricao: string;
}) {
  return (
    <div className="group flex flex-col gap-4 max-w-xs">
      <div className="overflow-hidden">
        <img
          className="w-full h:3xs rounded-lg object-cover transition-transform duration-700 group-hover:scale-105"
          src={img}
          alt={titulo}
        ></img>
      </div>
      <h3 className="text-lg text-secundaria font-bold">{titulo}</h3>
      <p className="text-black group-hover:text-secundaria transition-colors duration-700">
        {descricao}
      </p>
    </div>
  );
}

export default function SecaoCases() {
  return (
    <div className="flex flex-col px-4 md:px-8 mb-12 md:mb-24">
      <CabecalhoSecao
        kicker={"Insights"}
        titulo={<h2 className="font-semibold">Cases de Sucesso</h2>}
        kickerSecudario={true}
      />
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
        {cases.map((caseItem, index) => (
          <Card
            key={index}
            img={caseItem.img}
            titulo={caseItem.titulo}
            descricao={caseItem.descricao}
          />
        ))}
      </div>
    </div>
  );
}
