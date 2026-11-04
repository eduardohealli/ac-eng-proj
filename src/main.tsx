import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import PaginaContato from "./paginas/PaginaContato.tsx";

import Sobre from "./paginas/Sobre.tsx";
import Landing from "./paginas/Landing.tsx";
import Portifolio from "./paginas/Portifolio.tsx";
import Solucoes from "./paginas/Solucoes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contato" element={<PaginaContato />} />
        <Route path="projetos" element={<Portifolio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/solucoes" element={<Solucoes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
