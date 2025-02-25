import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1 className="about-title">Sobre Mim</h1>
      <div className="about-content">
        <p>
          Sou estagiária Full-Stack Developer na Avanade, com formação em
          andamento em Tecnólogo de Análise e Desenvolvimento de Sistemas pela
          Anhembi. Ao longo da minha trajetória, busco constantemente aplicar e
          expandir meus conhecimentos em tecnologias de desenvolvimento, tanto
          no front-end quanto no back-end. Possuo certificações reconhecidas
          pela Microsoft, incluindo:{" "}
          <b className="highlight">
            {" "}
            Microsoft Certified: Azure Fundamentals, Microsoft Certified:
            Security, Compliance, and Identity Fundamentals e Microsoft 365
            Certified: Fundamentals.
          </b>{" "}
          Essas certificações reforçam meu compromisso com o aprendizado
          contínuo, buscando sempre a excelência técnica nas soluções que
          desenvolvo. Além disso, concluí bootcamps oferecidos pela DIO, em
          parceria com empresas renomadas como a NTT DATA e Sysvision. Os
          bootcamps abordaram temas essenciais como{" "}
          <b className="highlight">
            {" "}
            Engenharia de Dados com Python e Data Analytics com Power BI{" "}
          </b>
          , que me proporcionaram uma formação prática e aprofundada nessas
          áreas, complementando minha experiência no desenvolvimento de
          software. Minhas principais habilidades incluem{" "}
          <b className="highlight">
            {" "}
            React, JavaScript, Node.js, Python e Java{" "}
          </b>
          . Embora minha experiência com algumas dessas tecnologias ainda esteja
          em fase de crescimento, estou sempre buscando novos desafios por meio
          de projetos práticos, que me impulsionam a evoluir constantemente como
          desenvolvedora. Esses projetos têm sido fundamentais para aprimorar
          minhas competências em diversas áreas da programação, contribuindo
          para minha evolução como profissional.
        </p>
      </div>
    </section>
  );
};

export default About;
