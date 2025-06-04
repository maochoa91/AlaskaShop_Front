import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import './Asistente/AsistenteIA.css'
import animacionaesAlaska from './Asistente/animacionaesAlaska';

const AlaskaAsistente = () => {
  const [mensaje, setMensaje] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const[animacionAlaska,setAnimacion] =useState(animacionaesAlaska['Sonriendo2'])

  const enviarPregunta = async () => {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: mensaje }] }],
        }),
      }
    );

    const data = await res.json();
    const texto = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No entendí 🐶';
    setRespuesta(texto);
    hablar(texto);
  };

  const hablar = (texto) => {
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'es-CO';
    speechSynthesis.speak(utterance);
  };
  console.log("animacionAlaska")

  return (
    <div className="contenedorIA">
      <Player
        autoplay
        loop
        src="/alaska-animado.json" // ← guarda tu JSON en public/
        style={{ height: '250px', width: '250px' }}
      />
    
     <img src={animacionAlaska} className='alaskaimg' />
      <textarea
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        className="textoPregunta"
        placeholder="¿Qué quieres preguntarle a Alaska?"
      />
      <button
        onClick={enviarPregunta}
        className="botonEnviar"
      >
        Preguntar
      </button>
      {respuesta && (
        <div className="mt-4 bg-gray-100 p-2 rounded border text-left">
          <strong>Alaska dice:</strong> {respuesta}
        </div>
      )}
    </div>
  );
};

export default AlaskaAsistente;
