import { useState, useEffect } from "react";
import "./styles.css";

interface News {
  id: string;
  title: string;
  image: string;
  content: string;
}

const News = () => {
  const [news, setNews] = useState<News[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [assetsMap, setAssetsMap] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchAssets = async () => {
      const assetsEndpoint = "https://api.contentful.com/spaces/xodxu49ybtek/environments/master/assets"; // Use o ambiente correto
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
          const imageUrl = asset.fields.file["en-US"].url; // Ajuste conforme a estrutura do seu JSON
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
    const fetchNews = async () => {
      const endpoint =
        "https://api.contentful.com/spaces/xodxu49ybtek/entries?content_type=noticias"; 
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
          throw new Error("Erro ao buscar notícias");
        }

        const data = await response.json();
        const fetchedNews: News[] = data.items.map((item: any) => ({
          id: item.sys.id,
          title: item.fields.title["en-US"],
          image: assetsMap[item.fields.image["en-US"].sys.id] || '', // Pega a URL do asset
          content: item.fields.content["en-US"],
        }));

        setNews(fetchedNews);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchNews();
  }, [assetsMap]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= news.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? news.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (

      <section className="newsSection">
      <h2 className="pageTitle">Últimas Notícias</h2>
        <div className="newsContainer">
          <button className="navButton" onClick={prevSlide}>
            &#10094;
          </button>
          {news.length > 0 ? (
            <div className="newsContent">
              <img
                src={news[currentIndex].image}
                alt={news[currentIndex].title}
                className="newsImage"
              />
              <div className="newsDetails">
                <h3 className="newsTitle">{news[currentIndex].title}</h3>
                <p className="newsContent">{news[currentIndex].content}</p>
              </div>
            </div>
          ) : (
            <p>Carregando notícias...</p>
          )}
          <button className="navButton" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
        <div className="indicatorContainer">
          {news.map((_, index) => (
            <span
              key={index}
              className={`indicatorDot ${
                index === currentIndex ? "active" : ""
              }`}
            ></span>
          ))}
        </div>
      </section>

  );
};

export default News;
