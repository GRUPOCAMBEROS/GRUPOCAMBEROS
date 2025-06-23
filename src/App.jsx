import { useState } from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Lámpara de techo LED",
    price: 1200,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Foco inteligente RGB",
    price: 350,
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Tira LED flexible",
    price: 480,
    image: "https://via.placeholder.com/300x200",
  },
];

export default function LandingPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="font-sans">
      {/* INICIO */}
      <section className="bg-black text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Grupo Camberos</h1>
        <p className="text-lg mb-6">Luz que transforma tus espacios</p>
        <button className="text-black bg-white px-4 py-2 rounded-xl font-medium">
          Explora nuestros productos
        </button>
      </section>

      {/* NOSOTROS */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">¿Quiénes somos?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Somos una empresa mexicana especializada en ofrecer artículos de iluminación de alta calidad, innovadores y con eficiencia energética. Nuestro compromiso es brindarte luz para tus espacios, con estilo y funcionalidad.
        </p>
      </section>

      {/* PRODUCTOS */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-xl p-4 shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600 mb-2">${product.price} MXN</p>
              <button
                onClick={() => addToCart(product)}
                className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-xl mt-2"
              >
                <ShoppingCart className="w-4 h-4" /> Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
        <p className="mb-6">¿Tienes dudas o necesitas una cotización? Contáctanos.</p>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 rounded-xl border"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 rounded-xl border"
          />
          <input
            type="tel"
            placeholder="Número de teléfono celular"
            className="w-full p-3 rounded-xl border"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full p-3 rounded-xl border"
            rows="4"
          ></textarea>
          <button type="submit" className="bg-black text-white w-full px-4 py-2 rounded-xl">
            Enviar mensaje
          </button>
        </form>
      </section>
    </div>
  );
}
