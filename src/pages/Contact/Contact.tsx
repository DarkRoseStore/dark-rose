import "./styles.css";
import Background from "../../assets/images/background_contact.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="contactSection"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="contactContent">
        <h1 className="contactTitle">Entre em contato com a gente 🌹</h1>
        <div className="contactIcons">
          <a
            href="https://www.instagram.com/minhocasvoadoras1/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/5521992118888"
            target="_blank"
            rel="noopener noreferrer"
            className="icon whatsapp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
