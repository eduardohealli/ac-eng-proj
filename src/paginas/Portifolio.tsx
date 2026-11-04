import { useEffect, useRef, useState } from "react";
import CabecalhoSecao from "../componentes/CabecalhoSecao";
import Menu from "../componentes/Menu";
import Rodape from "../componentes/Rodape";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Projeto = {
  titulo: string;
  descricao: string;
  imagens: string[];
  categorias: string[];
};

const DURATION = 5000; // Tempo em milissegundos para trocar a imagem (5 segundos)

export function Card2({
  titulo,
  imagens,
}: {
  titulo: string;
  imagens: string[];
  categorias: string[];
}) {
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [progresso, setProgresso] = useState(0);
  const progressoRef = useRef(0);

  // Loop de animação contínua e controle do timer
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (!pausado) {
        // Incrementa o progresso com base no tempo passado
        progressoRef.current += (deltaTime / DURATION) * 100;

        // Se chegar a 100%, avança para a próxima imagem e reseta o progresso
        if (progressoRef.current >= 100) {
          progressoRef.current = 0;
          setIndice((prev) => (prev + 1) % imagens.length);
        }

        setProgresso(progressoRef.current);
      }

      // Continua o loop
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [pausado]); // O loop reinicia limpo toda vez que isPaused muda para evitar saltos no deltaTime

  const handleNext = () => {
    setIndice((prev) => (prev + 1) % imagens.length);
    resetProgress();
  };

  const handlePrev = () => {
    setIndice((prev) => (prev - 1 + imagens.length) % imagens.length);
    resetProgress();
  };

  const goToIndex = (index: number) => {
    setIndice(index);
    resetProgress();
  };

  const resetProgress = () => {
    progressoRef.current = 0;
    setProgresso(0);
  };

  return (
    <div className="@container group w-full aspect-16/10">
      {/* Contêiner principal do Card */}
      <div
        className="relative w-full h-full overflow-hidden shadow-2xl bg-neutral-800 rounded-md"
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
      >
        {/* Renderização das Imagens (com transição de opacidade) */}
        {imagens.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === indice ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt={titulo}
              className="w-full h-full object-cover"
            />
            {/* Gradiente sutil para garantir leitura dos controles na parte inferior */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}

        {/* Título da Imagem Atual */}
        <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-black/70 to-transparent z-10 pointer-events-none" />

        <div className="absolute top-4 left-4 @lg:top-6 @lg:left-6 z-20">
          <h2 className="text-base font-semibold text-white @lg:text-2xl drop-shadow-md transition-all">
            {titulo}
          </h2>
        </div>

        {/* Botão Anterior */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0 cursor-pointer"
          aria-label="Imagem Anterior"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Botão Próximo */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 cursor-pointer"
          aria-label="Próxima Imagem"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Indicadores (Dots) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {imagens.map((_, idx) => {
            const isActive = idx === indice;
            return (
              <button
                key={idx}
                onClick={() => goToIndex(idx)}
                className={`relative h-2.5 rounded-full transition-all duration-500 ease-out overflow-hidden cursor-pointer ${
                  isActive
                    ? "w-16 bg-white/20"
                    : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Ir para a imagem ${idx + 1}`}
              >
                {/* Barra de Progresso interna (só aparece no dot ativo) */}
                {isActive && (
                  <span
                    className="absolute left-0 top-0 h-full bg-white rounded-full"
                    style={{ width: `${progresso}%` }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Card({
  titulo,
  imagens,
  categorias,
}: {
  titulo: string;
  descricao: string;
  imagens: string[];
  categorias: string[];
}) {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    if (!imagens || imagens.length <= 1) return;

    const timer = setInterval(() => {
      setIndiceAtual((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="@container group relative w-full aspect-16/10 overflow-hidden rounded-md">
      <div className="absolute inset-0 w-full h-full ">
        {imagens.map((src, index) => (
          <img
            key={index}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ${
              index === indiceAtual
                ? "opacity-100 z-10" // Imagem ativa fica visível e no topo
                : "opacity-0 z-0" // Imagem inativa fica invisível
            }`}
            src={src}
            alt={titulo}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10 transition-all duration-500 group-hover:from-black/95"></div>
      <div className="relative z-20 flex flex-col justify-end h-full p-4 @sm:p-10 @md:p-10">
        <div className="space-y-1 pb-1">
          <h3 className="text-xl font-semibold text-white @md:text-2xl">
            {titulo}
          </h3>
          <div className="flex flex-row gap-2">
            {categorias.map((cat, indice) => (
              <span
                className="inline-flex items-center gap-1 text-sm text-gray-300 before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-white"
                key={indice}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SecaoPortifolio() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [projetos, setProjetos] = useState<Projeto[]>([]);

  // 3. Criar a variável com os projetos filtrados baseada no estado atual
  const filtrarProjetos = (categoria: string) => {
    if (categoria === "Todos") {
      return projetos;
    } else {
      return projetos.filter((projeto) =>
        projeto.categorias.includes(categoria),
      );
    }
  };

  const projetosFiltrados = filtrarProjetos(categoriaSelecionada);

  useEffect(() => {
    // Faz a leitura do arquivo JSON público
    fetch("/projetos.json")
      .then((response) => response.json())
      .then((data) => {
        setProjetos(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar projetos:", error);
      });
  }, []);

  return (
    <section className="flex flex-col">
      <Menu paginaAtual={"Projetos"} />
      <div className="flex flex-col gap-6 justify-start w-full mb-30 md:px-60">
        <CabecalhoSecao
          kicker={"PORTIFÓLIO"}
          titulo={
            <h2 className="text-3xl md:text-5xl">
              Projetos de
              <br />
              <strong className="font-bold">Arquitetura Hospitalar</strong>
              <br />
              <strong className="font-bold">Engenharia Industrial</strong>
            </h2>
          }
          subtitulo={"Confira alguns dos nossos projetos mais recentes"}
          kickerSecudario={false}
        />
        <div className="flex w-full justify-start md:justify-end">
          <select
            name="categoriaProjeto"
            value={categoriaSelecionada}
            onChange={(e) => setCategoriaSelecionada(e.target.value)}
            className="p-2 text-gray-500 text-base border border-gray-300 rounded-sm"
          >
            <option value="Todos">Todos</option>
            <option value="Industrial">Engenharia Industrial</option>
            <option value="Clínica">Clínica</option>
            <option value="Hospitalar">Hospitalar</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {projetosFiltrados.map((proj, index) => (
            <div
              key={index}
              className={index === 0 ? "col-span-1 md:col-span-3" : ""}
            >
              <Card2
                titulo={proj.titulo}
                imagens={proj.imagens}
                categorias={proj.categorias}
              />
            </div>
          ))}
        </div>
      </div>

      <Rodape />
    </section>
  );
}
