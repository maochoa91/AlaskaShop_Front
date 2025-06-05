import imagenes from "./ImagenesProductos"
import "./productCard.css"
const ProductCard = ({ nombre, precio, imagen,descripcion,onAddToCart  }) => {
    return (
      <div className="bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition-transform">
        <h3 className="text-lg font-semibold mt-2">{nombre}</h3>
        <img src={imagenes[imagen]} alt={nombre} className="imagenProducto" />
        <p className="text-indigo-600 font-bold">${precio}</p>
        <h3 className="text-lg font-semibold mt-2">{descripcion}</h3>
        <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
          onClick={onAddToCart}
        >
        🛒 
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  