import { useState, useEffect } from "react";
import "./styles.css";

const Image = "https://placehold.co/600x400";

const products = [
  { id: 1, name: "Ipsum Dolor Si 1", image: Image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu." },
  { id: 2, name: "Ipsum Dolor Si 2", image: Image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu." },
  { id: 3, name: "Ipsum Dolor Si 3", image: Image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu." },
  { id: 4, name: "Ipsum Dolor Si 4", image: Image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu." },
  { id: 5, name: "Ipsum Dolor Si 5", image: Image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu." },
  { id: 6, name: "Ipsum Dolor Si 6", image: Image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu." },
  { id: 7, name: "Ipsum Dolor Si 7", image: Image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu." },
  { id: 8, name: "Ipsum Dolor Si 8", image: Image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu." },
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
    <div className="productsSection">
      <div className="productsContainer">
        <button className="navButton" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="productContent">
          <img
            src={products[currentIndex].image}
            alt={products[currentIndex].name}
            className="productImage"
          />
          <div className="productDetails">
            <h3 className="productName">{products[currentIndex].name}</h3>
            <p className="productDescription">
              {products[currentIndex].description}
            </p>
            <button className="viewMoreButton">
              Ver Mais
            </button>
          </div>
        </div>
        <button className="navButton" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="indicatorContainer">
        {products.map((_, index) => (
          <span
            key={index}
            className={`indicatorDot ${
              index === currentIndex ? "active" : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Products;
