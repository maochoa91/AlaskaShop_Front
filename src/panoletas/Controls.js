import React from 'react';
import imagenes from "./imagenes"
import "./controls.css"
import  { useState } from 'react';

const Controls = ({ customization, onCustomizationChange }) => {
const handleChange = (e) => {
    const { name, value } = e.target;
    onCustomizationChange({
      ...customization,
      [name]: value,
    });
    console.log(value)
    
  };

  const [activeTab, setActiveTab] = useState('color');


  const patternOptions = [
    { value: 'Rayas diagonales', label: 'Rayas diagonales' },
    { value: 'Rayas horizontales', label: 'Rayas horizontales' },
    { value: 'Rayas verticales', label: 'Rayas verticales' },
    { value: 'Cuadrícula', label: 'Cuadrícula' },
    { value: 'Puntos (radiales)', label: 'Triangulos' },
    { value: 'Ajedrezado (checkerboard)', label: 'Ajedrezado (checkerboard)' },
    { value: 'Zigzag estilo textil', label: 'Zigzag estilo textil' },
    { value: 'Hexagonos falsos', label: 'rectangulos' },
    { value: 'Ninguna', label: 'Ninguna' },
  ];


  const fontOptions = [
    { value: 'Arial, sans-serif', label: 'Arial' },
    { value: '"Helvetica Neue", Helvetica, sans-serif', label: 'Helvetica' },
    { value: '"Times New Roman", serif', label: 'Times New Roman' },
    { value: 'Georgia, serif', label: 'Georgia' },
    { value: 'Verdana, sans-serif', label: 'Verdana' },
    { value: 'Tahoma, sans-serif', label: 'Tahoma' },
    { value: '"Courier New", monospace', label: 'Courier New' },
    { value: '"Lucida Console", monospace', label: 'Lucida Console' },
    { value: '"Trebuchet MS", sans-serif', label: 'Trebuchet MS' },
    { value: '"Comic Sans MS", cursive, sans-serif', label: 'Comic Sans MS 🤡' }
  ];

  const Tab = ({ label, isActive, onClick }) => (
    <button
    // 'tab-button' es una clase base. 'active' se añade si la pestaña está seleccionada.
    className={`tab-button ${isActive ? 'active' : ''}`}
    onClick={onClick} // La función onClick se pasa desde el padre para manejar el cambio de pestaña.
    role="tab" // Atributo ARIA para accesibilidad, indica que es un elemento de pestaña
    aria-selected={isActive} // Atributo ARIA que indica si la pestaña está seleccionada
  >
    {label}
  </button>
);


  return (
    <div className="controls-container">
       <h2>Personaliza tu Pañoleta</h2>
      {/* 3. Navegación de Pestañas */}
      <div className="tab-navigation" role="tablist"> {/* role="tablist" para accesibilidad */}
            <Tab
              label="Color"
              isActive={activeTab === 'color'} // Si activeTab es 'color', esta pestaña está activa
              onClick={() => setActiveTab('color')} // Al hacer clic, cambia activeTab a 'color'
            />
            <Tab
              label="Imagen"
              isActive={activeTab === 'transform'}
              onClick={() => setActiveTab('transform')}
            />
            <Tab
              label="Letra"
              isActive={activeTab === 'filters'}
              onClick={() => setActiveTab('filters')}
            />
      </div>
      {/* 4. Contenido de las Pestañas */}
      <div className="tab-content">
      {activeTab === 'color' && (
        <div role="tabpanel" aria-labelledby="tab-color">
              <div className="control-group">
                  <label htmlFor="baseColor">Color de Fondo:</label>
                  <input
                    type="color"
                    id="baseColor"
                    name="baseColor"
                    value={customization.baseColor}
                    onChange={handleChange}
                  />
               </div>

               <div className="control-group">
                  <label htmlFor="pattern">Estilo/Patrón:</label>
                  <select
                    id="pattern"
                    name="pattern"
                    value={customization.pattern}
                    onChange={handleChange}
                  >
                    {patternOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                {customization.pattern !== 'none' && (
                  <div className="control-group">
                    <label htmlFor="patternColor">Color del Patrón:</label>
                    <input
                      type="color"
                      id="patternColor"
                      name="patternColor"
                      value={customization.patternColor}
                      onChange={handleChange}
                    />
                  </div>
                  )}
            </div>
        )} 
        {activeTab === 'transform' && (
          <div role="tabpanel" aria-labelledby="tab-color">
              <div className="control-group">
                <label htmlFor="img">Imagen:</label>
                <select
                  id="img"
                  name="img"
                  value={customization.img}
                  onChange={handleChange}
                >
                  {Object.keys(imagenes).map(key => (
                    <option key={key} value={key}>{key}</option>
                  ))}
                </select>
              </div>

              <div className="control-group">
                <label>   Posición top:
                <input name="imgTop" type="range" min="40" max="200"  id="topSlider1" onChange={handleChange}/>
                </label>
                <label>  Posición left:
                <input name="imgLeft"  type="range" min="500" max="1000"  id="topSlider2" onChange={handleChange} />
                </label>
              </div>  
          </div> 
        )}     
        {activeTab === 'filters' && (
            <div>
                  <div className="control-group">
                    <label htmlFor="customText">Texto Personalizado:</label>
                    <input
                      type="text"
                      id="customText"
                      name="customText"
                      value={customization.customText}
                      onChange={handleChange}
                      placeholder="Escribe algo..."
                    />


                  </div>
               {customization.customText && (  
                  <div className="control-group">
                    <label htmlFor="textSize">Tamaño Texto :</label>
                    <input
                      type="number"
                      id="textSize"
                      name="textSize"
                      value={customization.textSize}
                      onChange={handleChange}
                      placeholder="Tamano..."
                      defaultValue='10'
                    />
                  </div>
                 )}

              {customization.customText && (    
                  <div className="control-group">
                    <label htmlFor="textFont">Tipo de Texto:</label>
                    <select
                      id="textFont"
                      name="textFont"
                      value={customization.pattern}
                      onChange={handleChange}
                    >
                      {fontOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
               )}
                  {customization.customText && (
                    <div className="control-group">
                    <label htmlFor="textColor">Color del Texto:</label>
                    <input
                      type="color"
                      id="textColor"
                      name="textColor"
                      value={customization.textColor}
                      onChange={handleChange}
                    />
                  </div>
                  )}

                  {/* Agrega más controles aquí para otras opciones de personalización */}
                  {customization.customText && (  
                  <div className="control-group">
                    <label>   Posición top:
                    <input name="textTop" type="range" min="100" max="300"  id="topSlider" onChange={handleChange}/>
                    </label>
                    <label>  Posición left:
                    <input name="textLeft"  type="range" min="577" max="1000"  id="topSlider" onChange={handleChange} />
                    </label>
                  </div>
                  )}
              </div> 
            )} 

        </div>
   </div>
  );
};

export default Controls;