// src/components/DesignForm.js
import React from 'react';
import './DesignForms.css'; // Estilos para el formulario

function DesignForm({ design, updateDesign }) {
  return (
    <div className="design-form">
      <h2>1. Elige los Detalles de tu Placa</h2>

      <div className="form-group">
        <label htmlFor="shape">Forma de la Placa:</label>
        <select
          id="shape"
          value={design.shape}
          onChange={(e) => updateDesign('shape', e.target.value)}
        >
          <option value="circle">Círculo</option>
          <option value="bone">Hueso</option>
          <option value="heart">Corazón</option>
          <option value="huella">Huella</option>
          <option value="Mikey">Mikey</option>
          <option value="globe">Hoja</option>
          <option value="gota">Gota</option>
          <option value="huevo">Huevo</option>
          <option value="luna">Luna</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="figure">Figura Principal (Frente):</label>
        <select
          id="figure"
          value={design.figure}
          onChange={(e) => updateDesign('figure', e.target.value)}
        >
          <option value="none">Ninguna</option>
          <option value="paw">Huella</option>
          <option value="heart">Corazón</option>
          <option value="star">Estrella</option>
          <option value="bone">Hueso Pequeño</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="frontText">Nombre de la Mascota (Frente):</label>
        <input
          type="text"
          id="frontText"
          value={design.frontText}
          onChange={(e) => updateDesign('frontText', e.target.value)}
          maxLength="15" // Limita la longitud para que quepa en la placa
        />
      </div>

      <h3>2. Diseña la Parte Trasera</h3>

      <div className="form-group">
        <label htmlFor="backResponsibleName">Nombre del Responsable:</label>
        <input
          type="text"
          id="backResponsibleName"
          value={design.backResponsibleName}
          onChange={(e) => updateDesign('backResponsibleName', e.target.value)}
          maxLength="25"
        />
      </div>

      <div className="form-group">
        <label htmlFor="backPhoneNumber">Número Telefónico:</label>
        <input
          type="tel" // Usa type="tel" para teléfonos
          id="backPhoneNumber"
          value={design.backPhoneNumber}
          onChange={(e) => updateDesign('backPhoneNumber', e.target.value)}
          maxLength="15"
        />
      </div>
    </div>
  );
}

export default DesignForm;