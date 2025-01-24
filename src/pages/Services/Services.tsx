import { useState } from "react";
import "./styles.css"; 

const Services = () => {
  const handleDownload = () => {
    // Substitua 'caminho/para/seu/arquivo.pdf' pelo caminho do seu PDF
    window.open('caminho/para/seu/arquivo.pdf', '_blank');
  };

  return (
    <div className="serviceContainer">
      <h1 className="serviceHeader">Catálogo de Serviços</h1>
      <h2 className="serviceSubHeader">Minhocas Voadoras - Serviços Literários</h2>
      <div className="serviceContent">
        <p className="text-lg text-left">
          Clique no botão abaixo para abrir o catálogo completo de serviços e preços em PDF.
        </p>
        <button className="downloadButton" onClick={handleDownload}>
          Baixar Catálogo
        </button>
      </div>

      {/* Rodapé */}
      <footer className="footer">
        <p>
          <strong>Informações Importantes:</strong> Todos os serviços são realizados mediante contrato.
          Formas de pagamento: Pix, Boleto Bancário, Cartão de Crédito (parcelamento sob consulta).
        </p>
        <p>
          <strong>Contato:</strong>
          📧 <a href="mailto:autorabadgal@gmail.com" className="footerLink">autorabadgal@gmail.com</a>
        </p>
      </footer>
    </div>
  );
};

export default Services;
