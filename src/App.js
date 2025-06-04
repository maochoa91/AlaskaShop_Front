import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./home";
import EdicionPlacas from "./placas/EdicionPlacas"
import BandanaCustomizer from './panoletas/BandanaCustomizer';
import Tienda from './compras/Tienda'
import "./panoletas/styles.css"// Importar los estilos globales

import Navbar from "./components/Barra"

function App() {
  return (
    <div>
     
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panoletas" element={<BandanaCustomizer />} />
          <Route path="/placas" element={<EdicionPlacas/>}/>
          <Route path="/tienda" element={<Tienda/>}/>
        </Routes>
      </Router>

     
    </div>
  );
}

export default App;