
import React from 'react';
import imagenes from "./imagenes"



const BandanaPreview = React.forwardRef(({ customization }, ref) => {
  const {
    baseColor,
    pattern,
    patternColor,
    customText,
    textColor,
    textSize,
    textFont,
    textTop,
    textLeft,
    img,
    imgLeft,
    imgTop,
    // Agrega aquí más propiedades de personalización si las necesitas
  } = customization;

 var patron;
 var patronSize="";
 switch (pattern) {
  case "Rayas diagonales":
    patron= `linear-gradient(45deg,${patternColor} 25%, transparent 25%, transparent 50%, ${patternColor} 50%, ${patternColor} 75%, transparent 75%, transparent)`
    patronSize="20px 20px";
    break;
  case "Rayas horizontales":
     patron= `linear-gradient(to bottom,${patternColor} 25%, transparent 25%, transparent 50%, ${patternColor} 50%, ${patternColor} 75%, transparent 75%, transparent)`;
     patronSize="50px 50px";
    break;
  case "Rayas verticales" :
    patron= `linear-gradient(to right,${patternColor} 25%, transparent 25%, transparent 50%, ${patternColor} 50%, ${patternColor} 75%, transparent 75%, transparent)`;
     patronSize="50px 50px";
    break;
  case "Cuadrícula":
    patron= `linear-gradient(to right, ${patternColor} 3px, transparent 1px),linear-gradient(to bottom, ${patternColor} 3px, transparent 1px)`;
    patronSize="20px 20px";
    break;
  case "Puntos (radiales)":
    patron= `linear-gradient(135deg, ${patternColor} 25%,${patternColor} 25%,${patternColor} 50%, ${patternColor} 50%, ${patternColor} 5%,transparent 5%)`;
    patronSize="45px 45px";
    
    break;
  case "Ajedrezado (checkerboard)":
    patron= `linear-gradient(135deg, ${patternColor} 25%, transparent 25%),
              linear-gradient(225deg, ${patternColor} 25%, transparent 25%),
              linear-gradient(315deg, ${patternColor} 25%, transparent 25%),
              linear-gradient(45deg, ${patternColor} 25%, transparent 25%) `;
    patronSize="40px 40px";

   
    
    break;
  case "Zigzag estilo textil":
    patron= `linear-gradient(60deg, ${patternColor} 25%, transparent 25%, transparent 50%, ${patternColor} 50%, ${patternColor} 75%, transparent 75%)`;
    patronSize="40px 40px";
    break;
  case "Hexagonos falsos" :
    patron= `linear-gradient(to right, ${patternColor} 50%, transparent 50%),
                  linear-gradient(to bottom, ${patternColor} 50%, transparent 50%)`;
    patronSize="20px 40px";
    
    break;
  
  default:
    patron= ``;
    break;
}
 


  const bandanaStyle = {
    backgroundColor: baseColor,
    // Aplicar el color del patrón a través de una variable CSS
    // Esto es necesario para que los patrones definidos en CSS puedan usarlo
    //'--pattern-color': patternColor,
    backgroundImage: patron,
    backgroundSize:patronSize,
    
  };

  // Clases de patrones

  // Añade más 'else if' para otros patrones

  const textStyle = {
    color: textColor,
    fontSize: textSize +'px',
    fontFamily: textFont,
    textAlign: "center",
    position: "absolute",
    top: textTop +'px' ,
    left: textLeft +'px',
    zindex:'1',
    
         // Podrías añadir más estilos de texto aquí (fuente, tamaño, etc.)
  };

  return (

    
    <div id="bandana-preview-export" ref={ref}  className={`bandana-wrapper`} style={bandanaStyle}>
      <div className='cuadricula'>

      </div>
      <div>
      <div>
      {(img!=="ninguno") && (    
        <img src={imagenes[img]}
          alt="{shape}"
          style={{
            position: "absolute",
            left:imgLeft + 'px',
            top:imgTop + 'px',
            width: "150px",
            height: "150px",
            zIndex:'0'
        }}
        />
      )}
      </div>
     
      {customText && (
        <div className="bandana-text" style={textStyle}>
          {customText}
        </div>
      )}
      

      </div>
      
    </div>
  );
});

export default BandanaPreview;