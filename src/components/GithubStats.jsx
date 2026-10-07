export default function GithubStats() {
  return (
    <section id="github" className="github-section">
      <h2>GitHub</h2>

      <p className="github-intro">
        Mi actividad y tecnologías más utilizadas en GitHub.
      </p>

      <div className="github-stats">
        <img
          src="https://github-readme-stats.vercel.app/api?username=crysty72&show_icons=true&theme=dark&hide_border=true"
          alt="Estadísticas de GitHub de Cristina Carrizo"
        />

        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=crysty72&layout=compact&theme=dark&hide_border=true"
          alt="Lenguajes más utilizados por Cristina Carrizo en GitHub"
        />
      </div>
    </section>
  );
}