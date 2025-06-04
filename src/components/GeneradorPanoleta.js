import React, { useState } from "react";

function GeneradorPanoleta() {
  const [prompt, setPrompt] = useState("Pañoleta roja con puntos blancos y nombre Alaska");
  const [imagen, setImagen] = useState(null);
  const [cargando, setCargando] = useState(false);


  const traducirPrompt = async (texto) => {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=es|en`);
    const data = await res.json();
    return data.responseData.translatedText;
  };

  const generarImagen = async () => {
    setCargando(true);
    setImagen(null);

    try {
      const promptEnIngles = await traducirPrompt(prompt);
      const promptBase = "A triangular dog bandana, flat on a wooden table, with soft shadows, product style, high resolution. ";
      const promptFinal = promptBase + promptEnIngles;
      const res = await fetch("https://alaskashop-backend.onrender.com/api/generar-imagen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: promptFinal })
      });

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setImagen(url);
    } catch (err) {
      console.error("Error al generar imagen:", err);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Generador de Pañoletas con IA</h2>
      <textarea
        className="border p-2 w-full mb-2"
        rows="3"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={generarImagen}
        disabled={cargando}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {cargando ? "Generando..." : "Generar Imagen"}
      </button>

      {imagen && (
        <div className="mt-4">
          <img src={imagen} alt="Resultado" className="rounded shadow max-w-md" />
          <a
            href={imagen}
            download="panoleta-generada.png"
            className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded"
          >
            Descargar Imagen
          </a>
        </div>
      )}
    </div>
  );
}

export default GeneradorPanoleta;
