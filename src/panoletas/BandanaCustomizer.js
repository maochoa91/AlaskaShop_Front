import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import BandanaPreview from './BandanaPreview';
import Controls from './Controls';
import placa from "../components/Logos/Alaskapanoleta.png"

const BandanaCustomizer = () => {
  const [customization, setCustomization] = useState({
    baseColor: '#ffffff', // Color blanco por defecto
    pattern: 'none',
    patternColor: '#000000', // Color negro por defecto para el patrón
    customText: '',
    textColor: '#333333', // Color oscuro por defecto para el texto
    textSize:'20',
    textFont:'"Comic Sans MS", cursive, sans-serif',
    textTop:"0 ",
    textLeft:"0 ",
    img:"ninguno",
    imgLeft:700,
    imgTop:40,
    // Agrega más estados iniciales si es necesario
  });
 console.log(customization)
  const [isProcessing, setIsProcessing] = useState(false);
  const previewRef = useRef(null); // Referencia al div de la vista previa para html2canvas

  const handleCustomizationChange = (newCustomization) => {
    setCustomization(newCustomization);
  };

  const handleExportDesign = () => {
    if (previewRef.current) {
      setIsProcessing(true);
      html2canvas(previewRef.current, {
        useCORS: true, // Necesario si usas imágenes de otros dominios en tus patrones
        backgroundColor: null,
         // Para capturar el fondo del div
        
      }).then(canvas => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'panoleta-personalizada.png';
        document.body.appendChild(link); // Requerido en algunos navegadores
        link.click();
        document.body.removeChild(link); // Limpiar
        setIsProcessing(false);
      }).catch(err => {
        console.error("Error al exportar la imagen:", err);
        setIsProcessing(false);
        alert("Hubo un error al exportar la imagen.");
      });
    }
  };

  const handlePlaceOrder = () => {
    // En una aplicación real, aquí enviarías `customization` a tu backend.
    setIsProcessing(true);
    console.log("Detalles del pedido:", customization);

    // Simulación de una llamada API
    setTimeout(() => {
      alert(`Pedido simulado con éxito. Detalles en la consola. Color base: ${customization.baseColor}`);
      setIsProcessing(false);
    }, 1000);

    // Ejemplo de cómo podrías enviar los datos a un backend:
    /*
    fetch('/api/pedidos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customization),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del servidor:', data);
      alert('¡Pedido realizado con éxito!');
      setIsProcessing(false);
    })
    .catch(error => {
      console.error('Error al realizar el pedido:', error);
      alert('Hubo un error al procesar tu pedido.');
      setIsProcessing(false);
    });
    */
  };

  return (
    <div>
    <img src={placa} style={{
      position: "absolute",
      left:"50px",
      top:"200px",
      width: "300px",
      height: "300px",
      
  }}/>
    <div className="app-container">

     
      <Controls
        customization={customization}
        onCustomizationChange={handleCustomizationChange}
      />
      <div className="preview-container">
        <h2>Vista Previa</h2>
        <BandanaPreview ref={previewRef} customization={customization} />
        <button onClick={handleExportDesign} disabled={isProcessing}>
          {isProcessing ? 'Exportando...' : 'Exportar Diseño (PNG)'}
        </button>
        <button onClick={handlePlaceOrder} disabled={isProcessing}>
          {isProcessing ? 'Procesando...' : 'Hacer Pedido (Simulado)'}
        </button>
      </div>
    </div>
    </div>
  );
};

export default BandanaCustomizer;