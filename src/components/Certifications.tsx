import "../styles/Certifications.css";

const Certifications = () => {
  const certifications = [
    {
      name: "Azure Fundamentals",
      image: "image3.png",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/IsabelaMenezes-6743/7ECB9F536DAD78F6?sharingId=175D76ADCCDE8472",
    },
    {
      name: "Microsoft 365 Fundamentals",
      image: "image.png",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/IsabelaMenezes-6743/E443990F8514C071?sharingId=175D76ADCCDE8472",
    },
    {
      name: "Security, Compliance, and Identity Fundamentals",
      image: "image2.png",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/IsabelaMenezes-6743/FF952CDA96A2431E?sharingId=175D76ADCCDE8472",
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <h2>Certificações</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <h3 className="certification-title">{cert.name}</h3>
            <div className="certification-card">
              <img
                src={cert.image}
                alt={cert.name}
                className="certification-image"
              />
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-button"
            >
              Verificar Credencial
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
