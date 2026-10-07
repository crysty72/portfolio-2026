
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss, SiExpress } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 size={42} />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={42} />,
    },
    {
      name: "JavaScript",
      icon: <FaJs size={42} />,
    },
    {
      name: "React",
      icon: <FaReact size={42} />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={42} />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={42} />,
    },
    {
      name: "Express.js",
      icon: <SiExpress size={42} />,
    },
    {
      name: "Git",
      icon: <FaGitAlt size={42} />,
    },
    {
      name: "GitHub",
      icon: <FaGithub size={42} />,
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Tecnologías</h2>

      <p className="skills-intro">
        Tecnologías y herramientas que utilizo en mis proyectos
        de desarrollo web, con especial foco en el desarrollo
        frontend y React.
      </p>

      <div className="skills">
        {skills.map((skill) => (
          <div
            className="skill-card"
            key={skill.name}
            aria-label={`Tecnología: ${skill.name}`}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>

            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

