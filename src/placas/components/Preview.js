// src/components/Preview.js
import React from 'react';
import './Preview.css'; // Estilos para la previsualización
// Si vas a usar Three.js, lo importarías aquí:
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// Y si vas a usar react-three-fiber:
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';

function Preview({ design }) {
  // Función para obtener el icono SVG o la imagen según la figura
  const getFigureSVG = (figure) => {
    switch (figure) {
      case 'paw':
        return (
          <svg width="70" height="60" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          
          <ellipse cx="55" cy="90" rx="18" ry="20" fill="currentColor"/>
          <ellipse cx="115" cy="70" rx="18" ry="20" fill="currentColor"/>
          <ellipse cx="145" cy="90" rx="18" ry="20" fill="currentColor"/>
          <ellipse cx="80" cy="70" rx="18" ry="20" fill="currentColor"/>
          
          
          <path d="M60,130
                   C50,110,80,100,100,100
                   C120,100,150,110,140,130
                   C135,150,65,150,60,130 Z" fill="currentColor"/>
        </svg>

        );
      case 'heart':
        return (
          <svg className="figure-svg"
          viewBox="0 0 100 100"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"><path d="M50 80 L10 40 A20 20 0 0 1 50 10 A20 20 0 0 1 90 40 Z"  /></svg>
        );
      case 'star':
        return (
          <svg
            className="figure-svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
        );
      case 'bone':
        // Puedes encontrar un SVG de hueso o usar una imagen
        return (
          <svg width="220" height="60" viewBox="-48 -40 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M145.3 30.6C145.3 13.7 131.6 0 114.7 0H35.3C18.4 0 4.7 13.7 4.7 30.6V39.4C4.7 56.3 18.4 70 35.3 70H114.7C131.6 70 145.3 56.3 145.3 39.4V30.6Z" fill="currentColor"/>
          <ellipse cx="5" cy="55" rx="30" ry="32" fill="currentColor"/>
          <ellipse cx="145" cy="55" rx="30" ry="32" fill="currentColor"/>
          <ellipse cx="5" cy="5" rx="30" ry="32" fill="currentColor"/>
          <ellipse cx="145" cy="5" rx="30" ry="32" fill="currentColor"/>
          </svg>




        );
      default:
        return null;
    }
  };

  // --- Implementación 3D (Opcional y más avanzada) ---
  // Necesitarías instalar: npm install three @react-three/fiber @react-three/drei
  // y luego uncommentar el código y el componente Canvas en el return.
  // Podrías crear un componente separado como 'PetTag3D'

  // function PetTag3D({ design }) {
  //   const meshRef = useRef();

  //   useEffect(() => {
  //     // Lógica para crear la geometría de la placa según la forma
  //     // y aplicar las texturas o materiales para el texto y figura
  //     // Esto es más complejo y requeriría crear formas 3D dinámicamente
  //     // o cargar modelos GLTF/OBJ si las formas son muy complejas.
  //     // Ejemplo simple (cubo):
  //     // if (meshRef.current) {
  //     //   meshRef.current.geometry = new THREE.BoxGeometry(1, 1, 0.1);
  //     //   meshRef.current.material = new THREE.MeshStandardMaterial({ color: 0xcccccc });
  //     // }
  //   }, [design]);

  //   return (
  //     <mesh ref={meshRef}>
  //       <boxGeometry args={[1, 1, 0.1]} />
  //       <meshStandardMaterial color={0xcccccc} />
  //       {/* Aquí iría la lógica para renderizar texto y figura en 3D */}
  //     </mesh>
  //   );
  // }

  return (
    <div className="preview-container">
      <h2>Previsualización de tu Placa</h2>
      <div className={`pet-tag-2d ${design.shape}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      <div className="tag-face front-face">
          {design.figure !== 'none' && (
            <div className="tag-figure">{getFigureSVG(design.figure)}</div>
          )}
          <p className="tag-text-front">{design.frontText}</p>
        </div>

        {/* Reversa de la placa */}
        <div className="tag-face back-face">
          <p className="tag-text-back">{design.backResponsibleName}</p>
          <p className="tag-text-back">{design.backPhoneNumber}</p>
        </div>
      </div>

      {/* --- Implementación 3D (Descomentar para usar) --- */}
      {/* <h3>Vista 3D (Opcional)</h3>
      <div className="pet-tag-3d-viewer">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <PetTag3D design={design} />
          <OrbitControls />
        </Canvas>
      </div> */}
    </div>
  );
}

export default Preview;