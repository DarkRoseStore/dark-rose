import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./styles.css";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Ana Paula Mendes",
      role: "Proprietária",
      bio: "Apaixonada por literatura e sempre pronta para ajudar você a encontrar o livro perfeito.",
      instagram: "https://instagram.com/anapaulamendes",
      whatsapp: "https://wa.me/5521987654321",
      image: "https://placehold.co/400x600",
    },
    {
      name: "Julia Souza",
      role: "Assistente",
      bio: "Entusiasta de leitura, sempre atualizada com os últimos lançamentos e clássicos.",
      instagram: "https://instagram.com/juliasouza",
      whatsapp: "https://wa.me/5521987654322",
      image: "https://placehold.co/400x600",
    },
  ];

  return (
    <div className="aboutContainer">
      <h2 className="aboutTitle">Quem Somos Nós 👭</h2>
      <p className="aboutDescription">
        A Livraria Dark Rose é um espaço dedicado ao amor pelos livros e pela leitura.
        Localizada no coração do Rio de Janeiro, nossa equipe apaixonada está sempre pronta para ajudar você a encontrar sua próxima leitura favorita.
      </p>
      <p className="aboutDescription">
        Nossa missão é promover a cultura e a literatura, oferecendo um ambiente acolhedor e inspirador para todos os leitores.
        Desde lançamentos até clássicos, temos um pouco de tudo para todos os gostos.
      </p>
      <h3 className="teamTitle">Conheça Nossa Equipe</h3>
      <div className="teamGrid">
        {teamMembers.map((member, index) => (
          <div key={index} className="teamCard">
            <img
              src={member.image}
              alt={member.name}
              className="teamImage"
            />
            <h4 className="teamName">{member.name}</h4>
            <p className="teamRole">{member.role}</p>
            <p className="teamBio">{member.bio}</p>
            <div className="socialLinks">
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon instagramIcon"
              >
                <FaInstagram />
              </a>
              <a
                href={member.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon whatsappIcon"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
