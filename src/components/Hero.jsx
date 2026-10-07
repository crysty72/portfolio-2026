
export default function Hero() {
  return (
    <section id="inicio" className="hero">

      <p className="hero-greeting">
        Hola, soy
      </p>

      <h1>
        Cristina Carrizo
      </h1>

      <h2>
        Frontend Developer Junior
      </h2>

      <p className="hero-description">
        Desarrollo interfaces web modernas, responsivas y accesibles
        utilizando JavaScript, React, HTML, CSS y Tailwind CSS.
      </p>

      <p className="hero-focus">
        Busco oportunidades de trabajo remoto para seguir creciendo
        como desarrolladora y aportar en proyectos web reales.
      </p>

      <div className="hero-buttons">

        <a
          href="#projects"
          className="btn"
        >
          Ver mis proyectos
        </a>

        <a
          href="#contact"
          className="btn-outline"
        >
          Contactarme
        </a>

       <a
  href="/cv/Cristina_N_Carrizo_CV_2026.pdf"
  download="Cristina_N_Carrizo_CV_2026.pdf"
  className="btn"
>
  Descargar CV
</a>
      </div>

    </section>
  );
}

