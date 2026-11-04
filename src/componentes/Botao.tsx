import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Botao({
  tipo,
  texto,
  href,
}: {
  tipo: string;
  texto: string;
  href: string;
}) {
  if (tipo === "simples") {
    return (
      <>
        <div className="bg-transparent px-10 py-4 border border-gray-500 hover:border-quaternaria">
          <Link className="text-quaternaria text-base font-semibold" to={href}>
            {texto}
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-row px-10 py-4 gap-2 items-center bg-quaternaria hover:bg-primaria">
        <Link className="text-white text-base font-semibold" to={href}>
          {texto}
        </Link>
        <BsArrowRight className="text-white font-bold" size={16} />
      </div>
    </>
  );
}
