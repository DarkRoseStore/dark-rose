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

  return (
    <div className="newReleaseSection">
      <div className="container">
        <header className="newReleaseHeader">
          <h2 className="title">New Release Books</h2>
          <p className="subtitle">Some quality items</p>
        </header>
        <div className="booksGrid">
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
      </div>
    </div>
  );
};

export default NewReleaseBooks;
