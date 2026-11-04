import type { ReactNode } from "react";

export default function CabecalhoSecao({
  kicker,
  titulo,
  subtitulo,
  kickerSecudario,
  background,
}: {
  kicker?: string;
  titulo: ReactNode;
  subtitulo?: string;
  kickerSecudario: boolean;
  background?: string;
}) {
  const kickerClassName = kickerSecudario
    ? "text-secundaria text-sm tracking-wider md:text-base"
    : "inline-flex items-center gap-2 text-sm text-primaria font-bold tracking-wider before:content-[''] before:w-6 before:h-0.5 before:bg-primaria md:text-base";

  const bg = background ? `${background}` : "bg-white";
  return (
    <div
      className={
        bg +
        " flex flex-col gap-6 justify-start w-full py-12 px-4 md:py-24 md:px-8"
      }
    >
      {kicker && <span className={kickerClassName}>{kicker}</span>}

      <div className="text-3xl md:text-5xl">{titulo}</div>

      {subtitulo && (
        <span className="text-sm text-gray-500 md:text-lg">
          {subtitulo}
        </span>
      )}
    </div>
  );
}
