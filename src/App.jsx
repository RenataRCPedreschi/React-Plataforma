import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Menu } from "./components/Menu/Menu";
import { Home } from "./pages/Home/Home";
import { Blog } from "./pages/Blog/Blog";
import { Contato } from "./pages/Contato/Contato";
import { Usuarios } from "./pages/Usuarios/Usuarios";
import { Login } from "./pages/Login/Login";
import { NotFound } from "./pages/NotFound/NotFound";
import { Root } from "./pages/Root/Root";
import { Section1 } from "./pages/Section1/Section1";
import { Section2 } from "./pages/Section2/Section2";
import { Section3 } from "./pages/Section3/Section3";
import { EditaUsuario } from "./pages/EditaUsuario/EditaUsuario";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />}>
              <Route path="/section1" element={<Section1 />} />
              <Route path="/section2" element={<Section2 />} />
              <Route path="/section3" element={<Section3 />} />
            </Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/usuario/edit/:id" element={<EditaUsuario />} /> {/* Parâmetro de rota */}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
