// Definição da estrutura de cada projeto
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  deployUrl: string;
}

export default function Projects() {
  // Lista de projetos de exemplo (você pode editar depois)
  const projects: Project[] = [
    {
      id: '1',
      title: 'ONGLink',
      description:
        'Aplicação web para conectar ONGs a voluntários, com sistema de cadastro, visualização de perfis, verificação de autenticidade e feed de postagens.',
      tags: ['Next.js', 'TypeScript', 'CSS', 'MongoDB'],
      githubUrl: 'https://github.com/Onglink/Onglink_Frontend',
      deployUrl: 'https://onglink.vercel.app',
    },
    {
      id: '2',
      title: 'Gerenciador de Tarefas & Produtividade',
      description:
        'Ferramenta estilo Kanban para organização pessoal com persistência de dados local e relatórios de métricas.',
      tags: ['React', 'Tailwind CSS', 'Zustand'],
      githubUrl: 'https://github.com',
      deployUrl: 'https://vercel.com',
    },
    {
      id: '3',
      title: 'Dashboard de Finanças Pessoais',
      description:
        'Painel analítico para controle financeiro, exibição de gráficos interativos e categorização automática de despesas.',
      tags: ['Next.js', 'Recharts', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      deployUrl: 'https://vercel.com',
    },
    {
      id: '4',
      title: 'Plataforma E-commerce Minimalista',
      description:
        'Aplicação web completa para comércio eletrônico com carrinho de compras, integração de pagamentos e painel administrativo.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      githubUrl: 'https://github.com',
      deployUrl: 'https://vercel.com',
    },
  ];

  return (
    <section id="projetos" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Projetos em Destaque
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Alguns dos trabalhos e aplicações que desenvolvi recentemente.
          </p>
        </div>
      </div>

      {/* Grid de Cards de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-200"
          >
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {project.description}
              </p>

              {/* Badges de Tecnologias */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-gray-400 bg-gray-800/60 px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links do Projeto */}
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-800/40 text-xs font-medium">
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
              >
                Acessar ↗
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}