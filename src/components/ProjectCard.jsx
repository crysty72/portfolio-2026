
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  image,
  github,
  demo,
  technologies = [],
  status,
}) {
  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <div className="project-image">
        {image ? (
          <img
            src={image}
            alt={`Captura del proyecto ${title}`}
            className="project-img-small"
          />
        ) : (
          <div className="project-placeholder">
            <span>{title}</span>
            <small>{status || "Proyecto en desarrollo"}</small>
          </div>
        )}

        <div className="overlay">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ver código de ${title} en GitHub`}
            >
              <FaGithub size={28} />
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ver demostración del proyecto ${title}`}
            >
              Ver proyecto
            </a>
          )}
        </div>
      </div>

      <div className="project-content">
        <div className="project-title">
          <h3>{title}</h3>

          {status && (
            <span className="project-status">
              {status}
            </span>
          )}
        </div>

        <p>{description}</p>

        {technologies.length > 0 && (
          <div className="tech-icons">
            {technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

