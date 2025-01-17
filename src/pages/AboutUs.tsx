import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

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
    <div className="w-full h-auto bg-black p-10 text-center">
      <h2 className="text-4xl font-bold mb-8 text-white">Quem Somos Nós 👭</h2>
      <p className="text-lg mb-4 text-white">
        A Livraria Dark Rose é um espaço dedicado ao amor pelos livros e pela leitura. 
        Localizada no coração do Rio de Janeiro, nossa equipe apaixonada está sempre pronta para ajudar você a encontrar sua próxima leitura favorita.
      </p>
      <p className="text-lg mb-4 text-white">
        Nossa missão é promover a cultura e a literatura, oferecendo um ambiente acolhedor e inspirador para todos os leitores. 
        Desde lançamentos até clássicos, temos um pouco de tudo para todos os gostos.
      </p>
      <h3 className="text-2xl pt-10 font-semibold mb-6 text-white">Conheça Nossa Equipe</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-lg mb-4 object-cover w-40 h-60"
            />
            <h4 className="text-xl font-bold text-white">{member.name}</h4>
            <p className="text-white">{member.role}</p>
            <p className="text-white mt-2">{member.bio}</p>
            <div className="flex justify-center items-center mt-4 space-x-4">
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href={member.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 text-2xl"
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
