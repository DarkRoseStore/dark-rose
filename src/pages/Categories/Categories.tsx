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

  return (
    <section className="categoriesSection">
      <div className="categoriesContainer">
        <header className="categoriesHeader">
          <p className="categoriesSubtitle">Categorias</p>
          <h2 className="categoriesTitle">Explore nossas Top Categorias</h2>
        </header>
        <div className="categoriesGrid">
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
      </div>
    </section>
  );
};

export default Categories;
