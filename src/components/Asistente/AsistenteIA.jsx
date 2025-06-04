import React, { useState } from 'react';
import './AsistenteIA.css'
import animacionaesAlaska from './animacionaesAlaska';

const AsistenteGemini = () => {
  const [mensaje, setMensaje] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const[animacionAlaska,setAnimacion] =useState(animacionaesAlaska['Sonriendo1'])
  const sonido = new Audio('/ladrido.mp3');
  const enviarPregunta = async () => {

    
    console.log(mensaje)
    setAnimacion(animacionaesAlaska['Buscando'])

   
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,

        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Eres Alaska una husky, la asistente de Alaska Shop,Alaska Shop es una pagina que ofrece pañoletas y placas personalizables para mascotas,
                           en la pestaña de pañoletas pueden personalizarlas a su gusto , en la pestaña de placas puedes armar la placa para tu perro a tu gusto,
                           si te llegan a preguntar por el cobro debes responder que el costo varia segun la personalizacion del producto, los metodos de pago
                           son por nequi o tarjeta, se debe pagar la mitad al hacer el pedido y al finalizar la otra mitad.Solo puedes responder preguntas
                           sobre mascotas, productos, servicios, alimentación o comportamiento animal.si te preguntan por ideas de personalizacion responde con posibles combinaciones
                           de colores mas usadas en la moda y que las placas mas pedidas son las que tienen forma de la raza del perro y que la idea de este emprendimiento es no poner 
                           limite a las ideas de los clientes. Si la pregunta no está relacionada, 
                           responde: "Lo siento, solo respondo temas de Alaska Shop 🐾".  Responde con un tono amable y divertido, siempre finaliza las respuestas 
                           con un ladrido "Woof", si la pregunta no coincide con mascotas recomienda las placas y panoletas personalizadas que ofrece la pagina 
                           ademas de algun dato curioso sobre los Husky, de no recibir ningun mensaje pidele que ingrese alguna pregunta relacionada con 
                           la pagina y que estas ansiosa por responder cualquier inquietud.
                           si te dan las gracias di que fue con todo gusto y que esperas que su mascota disfrute el articulo que compro y que tengan una vida muy feliz juntos.
                           si preguntan por los envios responde que se hacen envios a todos lados dentro de colombia y que segun el lugar varia el costo del envio
                           tus respuestas no pueden ser muy largas\n\nPregunta del usuario: ${mensaje}`
                  }
                ]
              }
            ]
          })
          
          
        }
      );

      
      
      const data = await res.json();
      
      const texto = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No entendí 🐶';


      setRespuesta(texto);

      if (mensaje.includes("hola")){
        setAnimacion(animacionaesAlaska['Sonriendo2'])
      }else  if(mensaje.includes("pago")){
        setAnimacion(animacionaesAlaska['Cobrando'])
      }
      else  if(mensaje.includes("ideas")){
        setAnimacion(animacionaesAlaska['Idea'])
      }
      else  if(mensaje.includes("buenos")){
        setAnimacion(animacionaesAlaska['SonriendoGafas'])
      }
      else  if(mensaje.includes("gracias")){
        setAnimacion(animacionaesAlaska['regalo'])
      }
      else  if(mensaje.includes("envio")){
        setAnimacion(animacionaesAlaska['Lado'])
      }
      
      else  if(mensaje.includes("")){
        setAnimacion(animacionaesAlaska['Pensando'])
      }

      sonido.play().catch((error) => {
        console.error('Error al reproducir el sonido:', error);
      });
    } catch (error) {
      console.error('Error:', error);
      setRespuesta('💥 Error al conectarse con Gemini.');
    }
  };
  

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <img src={animacionAlaska} className='alaskaimg'/>
      <textarea
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        className="textoPregunta"
        placeholder="¿Qué le quieres preguntarle a Alaska?"
      />
      <button
        onClick={enviarPregunta}
        className="botonEnviar"
      >
        Preguntar
      </button>
      {respuesta && (
        <div className="respuesta">
          <strong></strong> {respuesta}
        </div>
      )}
    </div>
  );
};

export default AsistenteGemini;
