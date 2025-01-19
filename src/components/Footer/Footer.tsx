import "./styles.css";
import MRG from '../../assets/images/mrg.png';

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <p className="footerText">
          &copy; 2025 - Dark Rose. Todos os direitos reservados.
        </p>
        <p className="cnpjText">CNPJ: 58.779.070/0001-70</p>
        <img
          src={MRG}
          alt="Garantia de Qualidade"
          className="qualityImage"
        />
      </div>
    </footer>
  );
};

export default Footer;
