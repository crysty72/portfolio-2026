
const certifications = [
  {
    title: "Backend",
    institution: "Agencia Aprendizaje a lo Largo de la Vida",
    year: "2025",
  },
  {
    title: "Argentina Programa 4.0 — React JS",
    institution: "Argentina Programa 4.0",
    year: "2024",
  },
  {
    title: "Oracle Next Education — Alura Latam",
    institution: "Oracle / Alura Latam",
    year: "2024",
  },
  {
    title: "Google Actívate — Desarrollo Web I",
    institution: "Google Actívate",
    year: "2023",
  },
  {
    title: "Google Actívate — Desarrollo Web II",
    institution: "Google Actívate",
    year: "2023",
  },
  {
    title: "Iniciación a la Programación",
    institution: "Formación en programación",
    year: "2022",
  },
  {
    title: "Habilidades para la Empleabilidad",
    institution: "Formación para la empleabilidad",
    year: "2023",
  },
  {
    title: "Ciberseguridad",
    institution: "Formación en tecnología",
    year: "2025",
  },
  {
    title: "Experiencia IA",
    institution: "Formación en Inteligencia Artificial",
    year: "2025",
  },
  {
    title: "Habilidades Digitales para la Inclusión Laboral",
    institution: "Formación en competencias digitales",
    year: "2025",
  },
  {
    title: "Excel Básico",
    institution: "Formación complementaria",
    year: "2024",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="education-section"
    >
      <h2>Formación y certificaciones</h2>

      <p className="education-intro">
        Formación continua en desarrollo web, programación y
        tecnologías digitales, con especial interés en el
        desarrollo frontend y React.
      </p>

      <div className="education-grid">
        {certifications.map((certification) => (
          <article
            className="education-card"
            key={certification.title}
          >
            <div className="education-card-content">
              <h3>{certification.title}</h3>

              <p>{certification.institution}</p>
            </div>

            <span className="education-year">
              {certification.year}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

