import React, { useState } from 'react';
import DesignForm from './components/DesignForms';
import Preview from './components/Preview';
import './EdicionPlacas.css'; // Para estilos generales
import placa from "../components/Logos/Alaskaplaca.png"
function EdicionPlacas() {
  const [design, setDesign] = useState({
    shape: 'circle', // Opciones: 'circle', 'bone', 'heart', 'square'
    figure: 'paw',   // Opciones: 'paw', 'heart', 'star', 'bone', 'none'
    frontText: 'Nombre de la Mascota',
    backResponsibleName: '',
    backPhoneNumber: '',
  });

  const updateDesign = (field, value) => {
    setDesign(prevDesign => ({
      ...prevDesign,
      [field]: value,
    }));
  };

  return (
    <div className="app-container1">
      <h1 className="titulo">Diseña la Placa de tu Mascota</h1>
      <img src={placa} style={{
            position: "absolute",
            left:"50px",
            top:"200px",
            width: "300px",
            height: "300px",
            
        }}/>
      <div className="design-area1">
        <DesignForm design={design} updateDesign={updateDesign} />
        <Preview design={design} />
      </div>
      {/* Podrías agregar un botón para guardar o generar aquí */}
    </div>
  );
}

export default EdicionPlacas;