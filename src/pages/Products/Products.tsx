import { useState, useEffect } from "react";

const Image = "https://placehold.co/600x400";

const products = [
  { id: 1, name: "Ipsum Dolor Si", image: Image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu." },
  { id: 2, name: "Livro 2", image: Image, description: "Descrição Livro" },
  { id: 3, name: "Livro 3", image: Image, description: "Descrição Livro" },
  { id: 4, name: "Livro 4", image: Image, description: "Descrição Livro" },
  { id: 5, name: "Livro 5", image: Image, description: "Descrição Livro" },
  { id: 6, name: "Livro 6", image: Image, description: "Descrição Livro" },
  { id: 7, name: "Livro 7", image: Image, description: "Descrição Livro" },
  { id: 8, name: "Livro 8", image: Image, description: "Descrição Livro" },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= products.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? products.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div id="produtos" className="w-full p-4 md:p-8 bg-black text-white">
      <div className="relative w-full h-auto rounded-lg p-4 md:p-8 flex items-center justify-between">
        <button
          className="bg-white/80 text-customBlue p-2 rounded-full hover:bg-white transition"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
          <img
            src={products[currentIndex].image}
            alt={products[currentIndex].name}
            className="w-full md:w-1/3 h-48 md:h-auto rounded-lg object-cover"
          />
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-semibold">{products[currentIndex].name}</h3>
            <p className="text-gray-300 mt-2 md:mt-4 text-sm md:text-base max-w-md">
              {products[currentIndex].description}
            </p>
            <button className="mt-4 md:mt-6 bg-[#A92929] py-2 px-6 md:py-3 md:px-8 rounded-lg hover:bg-opacity-90 transition">
              Ver Mais
            </button>
          </div>
        </div>
        <button
          className="bg-white/80 text-customBlue p-2 rounded-full hover:bg-white transition"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
      <div className="flex justify-center mt-4 md:mt-6 gap-2">
        {products.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Products;
