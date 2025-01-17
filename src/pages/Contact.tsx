import Background from '../assets/images/background_contact.png';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      className="bg-cover bg-center w-full h-[50vh] relative flex items-center justify-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Entre em contato com a gente 🌹</h1>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-5xl hover:text-pink-600 transition" />
          </a>
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-5xl hover:text-green-600 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
