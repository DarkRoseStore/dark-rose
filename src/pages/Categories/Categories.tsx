import { useState, useEffect } from "react";
import "./styles.css";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Higher Education",
      image: "https://placehold.co/300x200",
    },
    {
      id: 2,
      title: "Management Books",
      image: "https://placehold.co/300x200",
    },
    {
      id: 3,
      title: "Engineering Books",
      image: "https://placehold.co/300x200",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= categories.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="categoriesSection">
      <div className="categoriesContainer">
        <header className="categoriesHeader">
          <p className="categoriesSubtitle">Categorias</p>
          <h2 className="categoriesTitle">Explore nossas Top Categorias</h2>
        </header>
        
        {/* Exibição em carrossel no mobile */}
        <div className="categoriesCarousel md:hidden">
          <button className="navButton" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="categoryCard">
            <img
              src={categories[currentIndex].image}
              alt={categories[currentIndex].title}
              className="categoryImage"
            />
            <h3 className="categoryTitle">{categories[currentIndex].title}</h3>
          </div>
          <button className="navButton" onClick={nextSlide}>
            &#10095;
          </button>
        </div>

        {/* Exibição em grade no desktop */}
        <div className="categoriesGrid hidden md:flex md:flex-wrap justify-center gap-6">
          {categories.map((category) => (
            <div key={category.id} className="categoryCard">
              <img
                src={category.image}
                alt={category.title}
                className="categoryImage"
              />
              <h3 className="categoryTitle">{category.title}</h3>
            </div>
          ))}
        </div>

        <div className="categoriesButtonContainer">
          <button className="categoriesButton">Ver Mais</button>
        </div>
        
        <div className="indicatorContainer md:hidden">
          {categories.map((_, index) => (
            <span
              key={index}
              className={`indicatorDot ${index === currentIndex ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
