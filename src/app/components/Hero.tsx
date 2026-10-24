import Image from 'next/image';
import { MapPin, GraduationCap, Languages } from 'lucide-react';

export default function Hero() {
  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'MongoDB',
    'Git & GitHub',
    'React Native',
  ];

  return (
    <section id="sobre" className="max-w-4xl mx-auto px-6 pt-12 pb-16">
      {/* Badge de Disponibilidade */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium w-fit mb-8">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Disponível para contratação
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Coluna 1: Foto, Nome, Cargo e Fatos Rápidos */}
        <div className="md:col-span-1 flex flex-col items-start">
          {/* Espaço para a Foto de Perfil */}
          <div className="relative w-50 h-50 rounded-2xl overflow-hidden border-2 border-gray-800 bg-gray-900 mb-5 shadow-xl">
            {/* Se você tiver uma foto na pasta public/ (ex: public/foto.jpg), troque o src abaixo por "/foto.jpg" */}
            <Image
              src="/minha-foto.jpeg"
              alt="Sua Foto de Perfil"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-2xl font-bold text-white tracking-tight">
            Vinicius Gonçalves Reis
          </h1>
          <p className="text-sm font-medium text-indigo-400 mt-1 mb-6">
            Desenvolvedor Fullstack e Multiplataforma
          </p>

          {/* Cartão de Fatos Rápidos (Local, Formação, Idiomas) */}
          <div className="w-full space-y-3 pt-4 border-t border-gray-800/60 text-xs text-gray-400">
            <div className="flex items-center gap-2.5">
              <MapPin size={16} className="text-gray-500 shrink-0" />
              <span>Sorocaba, SP</span>
            </div>

            <div className="flex items-center gap-2.5">
              <GraduationCap size={16} className="text-gray-500 shrink-0" />
              <span>Desenvolvimento de Software Multiplataforma</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Languages size={16} className="text-gray-500 shrink-0" />
              <span>Português (Nativo), Inglês (Fluente)</span>
            </div>
          </div>
        </div>

        {/* Coluna 2: Biografia e Tech Stack */}
        <div className="md:col-span-2 space-y-8">
          {/* Biografia */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              Sobre Mim
            </h2>
            <div className="space-y-3 text-gray-400 text-sm sm:text-base leading-relaxed">
              <p>
                Sou um desenvolvedor focado em criar soluções web e mobile modernas, escaláveis e com ótima experiência de uso. 
              </p>
              <p>Atualmente estou cursando Desenvolvimento de Software Multiplataforma na Fatec Benedicto Pagliato, o que me permite ter uma visão ampla do desenvolvimento de aplicações em diferentes plataformas.</p>
              <p>
                Tenho facilidade para aprender novas tecnologias e integrar ecossistemas tanto no front-end quanto no back-end, sempre priorizando código limpo e boas práticas.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Tech Stack & Ferramentas
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium bg-gray-900 border border-gray-800 rounded-lg text-gray-300 hover:border-indigo-500/50 hover:text-indigo-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}