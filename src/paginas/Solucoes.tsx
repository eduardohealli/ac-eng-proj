import CabecalhoSecao from "../componentes/CabecalhoSecao";
import Menu from "../componentes/Menu";
import Rodape from "../componentes/Rodape";
import SecaoSolucoes from "../componentes/SecaoSolucoes";
import imagem from "../assets/linha-producao.png";

export default function Solucoes() {
  return (
    <div>
        <Menu paginaAtual={"Soluções"}></Menu>
      <div className="hero relative w-full md:h-200">
        <img
          className="w-full h-100 md:h-full object-cover md:absolute md:inset-0"
          src={imagem}
          alt="Hero Soluções"
        ></img>
        <div className="relative md:absolute md:top-[55%] md:left-20 md:max-w-3xl mt-6 md:mt-0 px-4 md:px-0">
          <CabecalhoSecao
            kicker={"SOLUÇÕES"}
            titulo={"Projetamos com inteligência"}
            subtitulo={
              "Desenvolvemos projetos de engenharia e soluções BIM para os setores hospitalar, farmacêutico e industrial. Integramos disciplinas, antecipamos incompatibilidades e reduzimos retrabalhos para transformar projetos complexos em soluções mais eficientes, seguras e viáveis."
            }
            kickerSecudario={true}
          />
        </div>
      </div>
      <div className="flex flex-col bg-superficie px-4 md:px-14 pb-10">
        <SecaoSolucoes kickerSecudario={true} />
      </div>
      <Rodape />
    </div>
  );
}
