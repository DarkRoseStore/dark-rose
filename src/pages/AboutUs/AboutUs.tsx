import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./styles.css";

interface TeamMember {
  name: string;
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
      Minhocas Voadoras: Dando asas às suas palavras, raízes aos seus sonhos!
      </p>
      <p className="aboutDescription">
      Catálogo exclusivo com qualidade e preços acessíveis. 📚
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
              <div className="socialLinks">
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
