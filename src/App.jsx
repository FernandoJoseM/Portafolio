import { useState } from "react";
import "./App.css";
import FirstModal from "./components/FirstModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Habilidades from "./pages/Habilidades";
import Portafolio from "./pages/Portafolio";
import Contacto from "./pages/Contacto";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
function App() {
  const [firstModal, setFirstModal] = useState(true);
  const [animarModal, setAnimarModal] = useState(true);
  return (
    <>
      {firstModal ? (
        <FirstModal
          setFirstModal={setFirstModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
        />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Habilidades />} />
            <Route path="/experience" element={<Portafolio />} />
            <Route path="/contact" element={<Contacto />} />
          </Routes>
          <div className="wasap">
            <a href="https://wa.me/593995484359" target="_blank">
              <box-icon name="whatsapp" type="logo" color="#5bd64f"></box-icon>
            </a>
          </div>
        </>
      )}
    </>
  );
}

export default App;
