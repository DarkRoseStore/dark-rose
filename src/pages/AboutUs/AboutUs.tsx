import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./styles.css";

interface TeamMember {
  name: string;
  role: string;
  gmail: string;
  whatsapp: string;
  image: string;
}

const AboutUs: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const endpoint =
        "https://api.contentful.com/spaces/xodxu49ybtek/entries?content_type=equipe";

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
          throw new Error("Erro ao buscar dados do Contentful");
        }

        const data = await response.json();

        const members: TeamMember[] = data.items.map((item: any) => ({
          name: item.fields.name["en-US"],
          role: item.fields.role["en-US"],
          gmail: item.fields.gmail["en-US"],
          whatsapp: item.fields.whatsapp["en-US"],
          image: item.fields.image["en-US"],
        }));

        setTeamMembers(members);
      } catch (error) {
        console.error("Erro ao buscar dados da equipe:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="aboutContainer">
      <h2 className="aboutTitle">Quem Somos Nós 👭</h2>
      <p className="aboutDescription">
      Dark Rose: Desvendando a magia dentro da escuridão. Venha descobrir nosso mundo!
      </p>
      <p className="aboutDescription">
      Catálogo exclusivo com qualidade e preços acessíveis. Boa leitura! 🌹📚
      </p>
      <h3 className="teamTitle">Conheça Nossa Equipe</h3>
      <div className="teamGrid">
        {teamMembers.length > 0 ? (
          teamMembers.map((member, index) => (
            <div key={index} className="teamCard">
              <img
                src={member.image}
                alt={member.name}
                className="teamImage"
              />
              <h4 className="teamName">{member.name}</h4>
              <p className="teamRole">{member.role}</p>
              <div className="socialLinks">
                <a
                  href={member.gmail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialIcon gmailIcon"
                >
                  <SiGmail />
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
          ))
        ) : (
          <p>Carregando equipe...</p>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
