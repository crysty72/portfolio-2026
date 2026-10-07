
export default function Navbar() {
  return (
    <nav className="navbar">

      <a
        href="#inicio"
        className="logo"
        aria-label="Ir al inicio"
      >
        Cristina Carrizo
      </a>

      <div className="menu">

        <a href="#inicio">
          Inicio
        </a>

        <a href="#about">
          Sobre mí
        </a>

        <a href="#skills">
          Skills
        </a>

        <a href="#education">
          Formación
        </a>

        <a href="#projects">
          Proyectos
        </a>

        <a href="#contact">
          Contacto
        </a>

        <a
          href="/cv/Cristina-Carrizo-CV-2026.pdf"
          download="Cristina-Carrizo-CV-2026.pdf"
          className="cv-link"
        >
          Descargar CV
        </a>

      </div>

    </nav>
  );
}

