import ProductCard from "./ProductCard";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Tienda = () => {
  const [productos, setProductos] = useState([]);


  useEffect(() => {
    // Asegúrate que el backend esté corriendo
    axios.get('https://alaskashop-backend.onrender.com/api/productos')
  .then(response => setProductos(response.data))
  .catch(error => console.error('Error al obtener productos:', error));
  }, []);
  console.log(productos)
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Nuestros Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productos.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Tienda;