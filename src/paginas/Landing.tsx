import CTA from "../componentes/CTA";
import Menu from "../componentes/Menu";
import Rodape from "../componentes/Rodape";
import SecaoCases from "../componentes/SecaoCases";
import SecaoHero from "../componentes/SecaoHero";
import SecaoInsigth from "../componentes/SecaoInsigth";
import ClientesParceiros from "../componentes/SecaoParceiros";
import SecaoSolucoes from "../componentes/SecaoSolucoes";

export default function Landing() {
  return (
    <div className="w-full">
      <Menu paginaAtual={""}></Menu>
      <SecaoHero />
      <SecaoSolucoes
        Titulo={
          <h2 className="">
            Projetamos ambientes onde
            <br />
            <strong className="font-bold">cada detalhe</strong>
            <br />
            contribui para a segurança e o cuidado com a vida
          </h2>
        }
        kickerSecudario={true}
      />
      <div className="flex w-full justify-center items-center">
        <SecaoInsigth />
      </div>
      <ClientesParceiros></ClientesParceiros>
      <SecaoCases/>
      <CTA />
      <Rodape />
    </div>
  );
}
