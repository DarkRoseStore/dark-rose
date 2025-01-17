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
    <div className="w-full p-8 bg-black">
      <div className="container mx-auto">
        <header className="mb-8 text-center text-white">
          <h2 className="text-3xl font-bold">New Release Books</h2>
          <p className="text-sm uppercase tracking-wider mt-2">Some quality items</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div key={book.id} className="flex flex-col items-center text-center">
              <img
                src={book.image}
                alt={book.title}
                className="rounded-lg mb-4 object-cover w-full h-64"
              />
              <h3 className="text-xl font-semibold text-white mb-1">{book.title}</h3>
              <p className="text-gray-400">{book.author}</p>
              <p className="text-lg font-bold text-white">{book.price}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-[#A92929] text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition">
            Ver Todos Produtos →
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewReleaseBooks;
