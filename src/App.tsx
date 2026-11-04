import "./App.css";
import CTA from "./componentes/CTA.tsx";
import Rodape from "./componentes/Rodape.tsx";
import SecaoSolucoes from "./componentes/SecaoSolucoes.tsx";
import SecaoPortifolio from "./paginas/Portifolio.tsx";
import PaginaContato from "./paginas/PaginaContato.tsx";
import SecaoHero from "./componentes/SecaoHero.tsx";
import Menu from "./componentes/Menu.tsx";

function App() {

  return (
    <>
      <Menu paginaAtual={""}></Menu>
      <SecaoHero />
      <PaginaContato />
      <SecaoPortifolio />
      <SecaoSolucoes kickerSecudario={false}></SecaoSolucoes>
      <CTA />
      <Rodape />
    </>
  );
}

export default App;
