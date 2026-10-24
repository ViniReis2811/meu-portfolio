export default function About() {
  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'PostgreSQL',
    'Git & GitHub',
    'UI/UX Design',
  ];

  return (
    <section id="sobre" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800/60">
      <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
        Sobre Mim
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Texto descritivo */}
        <div className="md:col-span-2 space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
          <p>
            Sou um desenvolvedor apaixonado por criar soluções elegantes e funcionais para a web. 
            Gosto de transformar problemas complexos em interfaces simples e intuitivas.
          </p>
          <p>
            Com foco em boas práticas de código, performance e acessibilidade, busco sempre 
            me manter atualizado com as melhores tecnologias do ecossistema JavaScript/TypeScript e React.
          </p>
        </div>

        {/* Tech Stack / Habilidades */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium bg-gray-900 border border-gray-800 rounded-md text-gray-300 hover:border-indigo-500/50 hover:text-indigo-400 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}