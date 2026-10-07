
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Contacto desde portfolio - ${formData.nombre}`
    );

    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\n` +
      `Email: ${formData.email}\n\n` +
      `Mensaje:\n${formData.mensaje}`
    );

    window.location.href =
      `mailto:crysty3004@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">

      <h2>Contacto</h2>

      <p className="contact-intro">
        ¿Tenés una propuesta, proyecto o simplemente querés contactarme?
        Podés escribirme.
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Hablemos</h3>

          <p>
            Estoy interesada en oportunidades de trabajo remoto,
            proyectos frontend y nuevos desafíos para seguir creciendo
            como desarrolladora.
          </p>

          <div className="contact-links">

            <a
              href="mailto:crysty3004@gmail.com"
              className="contact-link"
            >
              Email
            </a>

            <a
              href="https://github.com/crysty72"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/cristina-noem%C3%AD-carrizo-4aa29249/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <form className="form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            aria-label="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="mensaje"
            placeholder="Mensaje"
            aria-label="Mensaje"
            rows="6"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-button">
            Enviar mensaje
          </button>

        </form>

      </div>

    </section>
  );
}

