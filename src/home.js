import React from 'react';
import logo from "./components/Logos/LogoAlaska.png"
import AsistenteGemini from "./components/Asistente/AsistenteIA.jsx"
import './Home.css'
import GeneradorPanoleta from './components/GeneradorPanoleta.js'

function Home() {
  return (
    <div className="App">
      <h1>Asistente Husky</h1>
       
       <img src={logo} style={{
            position: "absolute",
            left:"10px",
            top:"100px",
            width: "300px",
            height: "300px",
            
        }}/>
      <div className='asistente'>
          <AsistenteGemini />
          

      </div>
        
    </div>
  );
}

export default Home;

