import ProductCard from "./ProductCard";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Tienda.css"


const Tienda = () => {
  const [productos, setProductos] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [carrito, setCarrito] = useState(() => {
    const almacenado = localStorage.getItem("carrito");
    return almacenado ? JSON.parse(almacenado) : [];
  });

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);


  useEffect(() => {
    // Asegúrate que el backend esté corriendo
    axios.get('https://alaskashop-backend.onrender.com/api/productos')
  .then(response => setProductos(response.data))
  .catch(error => console.error('Error al obtener productos:', error));
  }, []);
  
  const agregarAlCarrito = (producto) => {
    setCarrito(prev => {
      const existe = prev.find(p => p._id === producto._id);
      if (existe) {
        return prev.map(p =>
          p._id === producto._id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Nuestros Productos</h2>
      <button
        className="fixed top-5 right-5 bg-blue-500 text-white px-4 py-2 rounded z-50"
        onClick={() => setMostrarCarrito(!mostrarCarrito)}
      >
        🛒 Ver Carrito ({carrito.length})
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {productos.map((p, i) => (
          <ProductCard key={i} {...p} onAddToCart={() => agregarAlCarrito(p)} />
        ))}
      </div>
      

      {mostrarCarrito && (
  <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-40 p-6 overflow-y-auto border-l-2 border-gray-200 flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-bold mb-4">🛒 Tu Carrito</h3>
      {carrito.length === 0 ? (
        <p className="text-gray-500">Está vacío 😢</p>
      ) : (
        <ul className="space-y-2">
          {carrito.map(item => (
            <li key={item._id} className="border-b pb-2">
              <p className="font-semibold">{item.nombre}</p>
              <p className="text-sm text-gray-600">Cantidad: {item.cantidad}</p>
              <p className="text-sm">Subtotal: ${item.cantidad * item.precio}</p>
            </li>
          ))}
        </ul>
      )}
    </div>

    {carrito.length > 0 && (
      <div className="mt-4">
        <p className="text-lg font-semibold mb-2">Total: ${calcularTotal()}</p>
        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mb-2"
          onClick={() => alert("Aquí iría el proceso de pago 🐶")}
        >
          Ir a pagar
        </button>
        <button
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={() => {
            setCarrito([]);
            localStorage.removeItem("carrito");
          }}
        >
          Vaciar carrito
        </button>
      </div>
    )}
  </div>
)}


    </div>
  );
};

export default Tienda;