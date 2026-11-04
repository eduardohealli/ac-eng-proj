import { useEffect, useRef, useState } from "react";
import CabecalhoSecao from "./CabecalhoSecao";
import ag_iso from "../assets/projetos/ag_iso.jpg";
import wfi_iso from "../assets/projetos/wfi_iso.jpg";
import vapor_puro from "../assets/projetos/vapor_puro_iso.jpg";
import trocador from "../assets/projetos/trocadores_iso.jpg";
import torres from "../assets/projetos/torres.jpg";
import hvac from "../assets/projetos/hvac.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imagens: string[] = [ag_iso, wfi_iso, vapor_puro, trocador, torres, hvac];

const DURACAO = 5000; // Tempo em milissegundos para trocar a imagem (5 segundos)

export function Card2({ imagens }: { imagens: string[] }) {
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
        progressoRef.current += (deltaTime / DURACAO) * 100;

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
    <div className="@container group w-full h-full">
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
            <img src={img} alt={""} className="w-full h-full object-cover" />
            {/* Gradiente sutil para garantir leitura dos controles na parte inferior */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}

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

export default function SecaoInsigth() {

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center py-12 md:py-0">
      <div className="relative overflow-hidden rounded-2xl w-full md:w-160 h-68 md:h-160 border-2 border-primaria/50">
        <Card2 imagens={imagens} />
      </div>

      <div className="max-w-xl">
        <CabecalhoSecao
          kicker={"INSIGHT"}
          titulo={
            "Engenharia de precisão para indústria farmacêutica. Cada sistema conectado. Cada detalhe compatibilizado."
          }
          subtitulo={
            "A AC assina o projeto de expansão da fábrica da empresa farmacêutica FARMACE, em barbalha, contemplando os sistemas de HVAC, água gelada, vapor e tubulações de processo. Um trabalho de engenharia que integra diferentes sistemas em um modelo tridimensional coordenado. Mais do que representar instalações, o BIM transforma a complexidade industrial em clareza, precisão e eficiência para o projeto."
          }
          kickerSecudario={true}
        />
      </div>
    </div>
  );
}
