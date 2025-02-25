import "../styles/Skills.css";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaCss3Alt,
  FaJava,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <FaJs />, bgColor: "#FFF" },
    { name: "React", icon: <FaReact />, bgColor: "#FFF" },
    { name: "Node.js", icon: <FaNodeJs />, bgColor: "#FFF" },
    { name: "Python", icon: <FaPython />, bgColor: "#FFF" },
    { name: "CSS", icon: <FaCss3Alt />, bgColor: "#FFF" },
    { name: "Java", icon: <FaJava />, bgColor: "#FFF" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="tech">Tecnologias</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-box"
            style={{ backgroundColor: skill.bgColor }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
