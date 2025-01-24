import { useState, useEffect } from "react";
import "./styles.css";

interface Book {
  id: string;
  title: string;
  author: string;
  price: string;
  image: string;
}

const NewReleaseBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [booksPerPage, setBooksPerPage] = useState(3); 
  const [assetsMap, setAssetsMap] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchAssets = async () => {
      const assetsEndpoint = "https://api.contentful.com/spaces/xodxu49ybtek/environments/master/assets"; 
      try {
        const response = await fetch(assetsEndpoint, {
          method: "GET",
          headers: {
            Authorization: "Bearer CFPAT-1YaQJxc06G9IZmTlndQd3o0l-rA_LJXJNSTLRrKWJjc",
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar assets");
        }

        const data = await response.json();
        const assetsMap: Record<string, string> = {};
        data.items.forEach((asset: any) => {
          const id = asset.sys.id;
          const imageUrl = asset.fields.file["en-US"].url; 
          assetsMap[id] = imageUrl;
        });
        setAssetsMap(assetsMap);
      } catch (error) {
        console.error("Erro ao buscar assets:", error);
      }
    };

    fetchAssets();
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      const endpoint =
        "https://api.contentful.com/spaces/xodxu49ybtek/entries?content_type=livros";
      try {
        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            Authorization:
              "Bearer CFPAT-1YaQJxc06G9IZmTlndQd3o0l-rA_LJXJNSTLRrKWJjc",
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar livros");
        }

        const data = await response.json();
        const fetchedBooks: Book[] = data.items.map((item: any) => ({
          id: item.sys.id,
          title: item.fields.title["en-US"],
          author: item.fields.author["en-US"],
          price: item.fields.price["en-US"],
          image: assetsMap[item.fields.image["en-US"].sys.id] || '', 
        }));
        setBooks(fetchedBooks);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };

    fetchBooks();
  }, [assetsMap]); 

  useEffect(() => {
    const updateBooksPerPage = () => {
      if (window.innerWidth <= 799) {
        setBooksPerPage(1); 
      } else if (window.innerWidth <= 1273) {
        setBooksPerPage(2); 
      } else {
        setBooksPerPage(3); 
      }
    };

    updateBooksPerPage();
    window.addEventListener("resize", updateBooksPerPage);

    return () => window.removeEventListener("resize", updateBooksPerPage);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + booksPerPage >= books.length ? 0 : prevIndex + booksPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - booksPerPage;
      return newIndex < 0 ? books.length - (books.length % booksPerPage || booksPerPage) : newIndex;
    });
  };

  const handleBookClick = (book: Book) => {
    const shopifyUrl = `https://sualoja.myshopify.com/products/${book.id}`; 
    window.open(shopifyUrl, "_blank");
  };

  const visibleBooks = books.slice(
    currentIndex,
    currentIndex + booksPerPage
  ).length
    ? books.slice(currentIndex, currentIndex + booksPerPage)
    : [...books.slice(currentIndex), ...books.slice(0, booksPerPage - (books.length - currentIndex))];

  return (
    <section className="newReleaseSection">
      <h2 className="pageTitle">Novos Lançamentos</h2>
      <div className="container">
        <div className="booksCarousel">
          <button className="navBooksButton" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="booksGrid">
            {visibleBooks.map((book) => (
              <div key={book.id} className="bookCard" onClick={() => handleBookClick(book)}>
                <img src={book.image} alt={book.title} className="bookImage" />
                <h3 className="bookTitle">{book.title}</h3>
                <p className="bookAuthor">{book.author}</p>
                <p className="bookPrice">{book.price}</p>
              </div>
            ))}
          </div>
          <button className="navBooksButton" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
        <div className="indicatorBooksContainer">
          {Array.from({ length: Math.ceil(books.length / booksPerPage) }).map(
            (_, index) => (
              <span
                key={index}
                className={`indicatorBooksDot ${
                  index === Math.floor(currentIndex / booksPerPage) ? "active" : ""
                }`}
              ></span>
            )
          )}
        </div>
        <div className="actionButtonWrapper">
          <a href="https://sualoja.myshopify.com/" target="_blank" rel="noopener noreferrer">
            <button className="actionButton">Ver Todos Nossos Livros</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewReleaseBooks;
