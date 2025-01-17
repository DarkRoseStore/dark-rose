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

  return (
    <section className="w-full p-8 bg-black text-white">
      <div className="container mx-auto">
        <header className="mb-8 text-left">
          <p className="text-sm tracking-wider">Categorias</p>
          <h2 className="text-3xl font-bold">Explore nossas Top Categorias</h2>
        </header>
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category) => (
            <div key={category.id} className="text-center w-full sm:w-80 md:w-72 lg:w-96">
              <img
                src={category.image}
                alt={category.title}
                className="rounded-lg mb-4 object-cover w-full h-48"
              />
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-[#A92929] text-white py-3 px-8 rounded-lg shadow hover:bg-opacity-90 transition">
            Ver Mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
