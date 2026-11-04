import CabecalhoSecao from "../componentes/CabecalhoSecao";
import Menu from "../componentes/Menu";
import Rodape from "../componentes/Rodape";
import imagem from "../assets/lobby-hospitalar.png"
import anaCarlaImagem from "../assets/ana-carla.jpg"

function RecursoBIM({
  titulo,
  descricao,
}: {
  titulo: string;
  descricao: string;
}) {
  return (
    <div className="flex flex-row gap-4">
      <div className="bg-primaria/10 w-10 h-10 rounded shrink-0 flex items-center justify-center">
        <div className="bg-primaria w-2 h-2 rounded-full"></div>
      </div>
      <div className="text-sm text-quaternaria md:text-lg">
        <strong className="font-bold">{titulo} </strong>
        <strong className="text-gray-500 font-normal"> — {descricao}</strong>
      </div>
    </div>
  );
}

function CardEspecialista({
  nome,
  cargo,
  descricao,
  img,
}: {
  nome: string;
  cargo: string;
  descricao: string;
  img: string;
}) {
  return (
    <div className="flex flex-col gap-6 px-4 md:flex-row md:gap-10 md:px-8 md:items-center">
      <div className="group relative w-full aspect-square md:w-1/2">
        <img className="absolute w-full h-full object-cover " src={img} />
        <div className="absolute left-0 bottom-0 bg-primaria w-1 h-0 group-hover:h-full transition-all duration-1500"></div>
      </div>

      <div className="flex flex-col md:max-w-1/2">
        <p className="text-3xl text-quaternaria font-bold md:text-5xl">
          {nome}
        </p>
        <p className="text-lg text-primaria font-bold md:text-2xl">{cargo}</p>
        <p className="text-sm text-gray-500 md:text-lg pt-6">{descricao}</p>
      </div>
    </div>
  );
}

export default function Sobre() {
  return (
    <div className="flex flex-col gap-6">
      <Menu paginaAtual={"Sobre"} />
      <div className="relative flex flex-col md:flex-row">
        <img
          className="h-160 md:w-1/2 object-cover"
          src={imagem}
        ></img>
        <div className="md:max-w-1/2">
          <CabecalhoSecao
            kicker={"QUEM SOMOS"}
            titulo={
              <h2 className="">
                Projetamos com rigor
                <br />
                <strong className="font-bold">técnico e</strong>
                <br />
                <strong className="font-bold">inteligência</strong>
              </h2>
            }
            kickerSecudario={false}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-primaria to-transparent md:h2"></div>
      </div>

      <div className="flex flex-col">
        <CabecalhoSecao
          kicker={"LIDERENÇA"}
          titulo={
            <h2 className="">
              Cada projeto é conduzido
              <strong className="font-bold"> por especialistas</strong>
            </h2>
          }
          subtitulo="Na AC Engenharia e Projetos, unimos conhecimento técnico, experiência e tecnologia BIM para desenvolver soluções de engenharia com precisão e eficiência. Cada projeto é conduzido por profissionais especializados, com foco na compatibilização, na qualidade das entregas e na redução de retrabalhos, garantindo mais segurança e previsibilidade em cada etapa."
          kickerSecudario={false}
        />
        <CardEspecialista
          nome={"Ana Carla"}
          cargo={"Diretora técnica"}
          descricao={"Engenheira civil com mais de 10 anos de expericência em BIM. Especialista em projetos hospitalares e estebelecimentos de saúde, com ênfase em BIM"}
          img={anaCarlaImagem}
        />
      </div>

      <div className="flex flex-col">
        <CabecalhoSecao
          kicker={"TECNLOGIA"}
          titulo={
            <h2 className="">
              Projetamos em
              <strong className="font-bold"> BIM/REVIT</strong>
              com inteligência integrada.
            </h2>
          }
          subtitulo={
            "A AC usa a metodologia BIM desde a concepção do projeto, integrando arquitetura, estrutura e instalações em um modelo único."
          }
          kickerSecudario={false}
        />
        <div className="flex flex-col md:flex-row gap-6 w-full px-4 md:px-8 mb-12 md:mb-24 md:items-center ">
          <div className="flex flex-col gap-4">
            <RecursoBIM
              titulo="Modelagem 3D"
              descricao="Criamos modelos 3D detalhados para visualização e análise."
            />
            <RecursoBIM
              titulo="Meno retrabalho na obra"
              descricao="Cada decisão é antecipada no modelo antes de chegar ao canteiro, minimizando surpresas e aditivos."
            />
            <RecursoBIM
              titulo="Conformidade Normativa"
              descricao="RDC 50, ANVISA e Vigilância Sanitária verificados dentro do modelo, com rastreabilidade completa."
            />
            <RecursoBIM
              titulo="Ambientes preparados para o futuro"
              descricao="Projetamos para que novos conceitos e tecnologias possam ser incorporados sem reformas estruturais."
            />
          </div>
          <div className="">
            <CabecalhoSecao
              kicker={"METODOLOGIA"}
              titulo={
                <h2 className="text-white">
                  BUILDING INFORMATION
                  <strong className="font-bold"> MODELING</strong>
                </h2>
              }
              subtitulo={
                "O BIM permite modelar o hospitais e industrias integralmente — do projeto arquitetônico ao cálculo estrutural, planilha de materiais e custos — em um ambiente interdisciplinar que automatiza processos e antecipa problemas."
              }
              kickerSecudario={false}
              background="bg-quaternaria"
            />
          </div>
        </div>
        <Rodape />
      </div>
    </div>
  );
}
