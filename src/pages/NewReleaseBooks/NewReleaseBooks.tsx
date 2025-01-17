import { useState, useEffect } from "react";
import "./styles.css";

const NewReleaseBooks = () => {
  const books = [
    {
      id: 1,
      title: "Simple Way Of Peace Life.",
      author: "Armor Ramsay",
      price: "$40.00",
      image: "https://placehold.co/300x450",
    },
    {
      id: 2,
      title: "Great Travel At Desert.",
      author: "Sanchiti Howdy",
      price: "$38.00",
      image: "https://placehold.co/300x450",
    },
    {
      id: 3,
      title: "The Lady Beauty Scarlett.",
      author: "Arthur Doyle",
      price: "$45.00",
      image: "https://placehold.co/300x450",
    },
    {
      id: 4,
      title: "Once Upon A Time.",
      author: "Kilen Marry",
      price: "$35.00",
      image: "https://placehold.co/300x450",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= books.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? books.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="newReleaseSection">
      <div className="container">
        <header className="newReleaseHeader">
          <h2 className="title">New Release Books</h2>
          <p className="subtitle">Some quality items</p>
        </header>
        
        {/* Exibição em carrossel no mobile */}
        <div className="booksCarousel md:hidden">
          <button className="navButton" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="bookCard">
            <img
              src={books[currentIndex].image}
              alt={books[currentIndex].title}
              className="bookImage"
            />
            <h3 className="bookTitle">{books[currentIndex].title}</h3>
            <p className="bookAuthor">{books[currentIndex].author}</p>
            <p className="bookPrice">{books[currentIndex].price}</p>
          </div>
          <button className="navButton" onClick={nextSlide}>
            &#10095;
          </button>
        </div>

        {/* Exibição em grade no desktop */}
        <div className="booksGrid hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div key={book.id} className="bookCard">
              <img
                src={book.image}
                alt={book.title}
                className="bookImage"
              />
              <h3 className="bookTitle">{book.title}</h3>
              <p className="bookAuthor">{book.author}</p>
              <p className="bookPrice">{book.price}</p>
            </div>
          ))}
        </div>

        <div className="actionButtonWrapper">
          <button className="actionButton">
            Ver Todos Produtos →
          </button>
        </div>

        <div className="indicatorContainer md:hidden">
          {books.map((_, index) => (
            <span
              key={index}
              className={`indicatorDot ${index === currentIndex ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewReleaseBooks;
