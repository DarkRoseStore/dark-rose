import { useState } from "react";
import "./styles.css"; 

const services = [
  {
    id: 1,
    title: "Serviços Editoriais",
    details: [
      "Diagramação: R$ 3,00 por capítulo | R$ 1,00 por página",
      "Ghostwriter: R$ 9,00 por capítulo | R$ 3,00 por página",
      "Leitura Sensível, Beta e Crítica: R$ 4,00 por capítulo | R$ 2,00 por página",
      "Revisão: Mínimo: R$ 2,00 por capítulo | R$ 1,00 por página",
      "Organização de LC (Leitura Coletiva): R$ 35,00",
      "Sinopse: Simples: R$ 20,00 | Complexa: R$ 35,00",
    ],
  },
  {
    id: 2,
    title: "Serviços de Design Gráfico & Ilustração",
    details: [
      "Banners: R$ 4,00 cada",
      "Poster: 1 Personagem: Simples R$ 50,00 | Detalhado R$ 55,00",
      "Capas: Papel para digital: R$ 160,00",
      "Brindes Personalizados: Preço: R$ 3,00 a R$ 40,00",
    ],
  },
  {
    id: 3,
    title: "Marketing & Divulgação Literária",
    details: [
      "Postagens em Redes Sociais: 1 Semana: R$ 7,50 (+ R$ 5,00 Stories)",
      "Divulgação em Grupos: Simples: R$ 30,00",
    ],
  },
  {
    id: 4,
    title: "Registro & Formalização de Obras",
    details: [
      "Registro de Obra: R$ 75,00",
      "ISBN: R$ 35,00",
      "Ficha Catalográfica: R$ 73,00",
    ],
  },
  {
    id: 5,
    title: "Serviços Extras",
    details: [
      "Dublagem: R$ 1,20 por minuto",
      "Criação de Plot: R$ 20,00",
      "Helper (Apoio na Escrita): R$ 6,00",
    ],
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextService = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= services.length ? 0 : prevIndex + 1
    );
  };

  const prevService = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="serviceContainer">
      <h1 className="serviceHeader">Catálogo de Serviços</h1>
      <h2 className="serviceSubHeader">Editora Dark Rose</h2>

      <div className="flex items-center justify-between mb-4">
        <button className="navButton" onClick={prevService}>
          &#10094;
        </button>
        <div className="serviceContent">
          <h3 className="text-2xl font-semibold text-left">{services[currentIndex].title}</h3>
          <ul className="list-disc list-inside mt-2 text-left">
            {services[currentIndex].details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        <button className="navButton" onClick={nextService}>
          &#10095;
        </button>
      </div>

      <div className="indicatorContainer">
        {services.map((_, index) => (
          <span
            key={index}
            className={`indicatorDot ${index === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>

      <footer className="footer">
        <p>
          <strong>Informações Importantes:</strong> Todos os serviços são realizados mediante contrato.
          Formas de pagamento: Pix, Boleto Bancário, Cartão de Crédito (parcelamento sob consulta).
        </p>
        <p>
          <strong>Contato:</strong>
          📧 <a href="mailto:bissoliray@gmail.com" className="footerLink">bissoliray@gmail.com</a>
          📧 <a href="mailto:autorabadgal@gmail.com" className="footerLink">autorabadgal@gmail.com</a>
        </p>
      </footer>
    </div>
  );
};

export default Services;
