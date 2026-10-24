import { Mail, MessageCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Contact() {
  const contactLinks = [
    {
      id: 'email',
      label: 'vinireis2811@gmail.com',
      href: 'mailto:vinireis2811@gmail.com',
      icon: Mail,
      hoverBorder: 'hover:border-indigo-500/50',
      iconColor: 'text-indigo-400',
    },
    {
      id: 'whatsapp',
      label: '+55 (15) 99244-8078',
      href: '',
      icon: MessageCircle,
      hoverBorder: 'hover:border-emerald-500/50',
      iconColor: 'text-emerald-400',
    },
    {
      id: 'github',
      label: 'github.com/ViniReis2811',
      href: 'https://github.com/ViniReis2811',
      icon: FaGithub,
      hoverBorder: 'hover:border-gray-500/50',
      iconColor: 'text-gray-300',
    },
  ];

  return (
    <section id="contato" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800/60">
      <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
        Contato
      </h2>
      <p className="text-gray-400 text-sm mb-8">
        Sinta-se à vontade para entrar em contato através de qualquer um dos canais abaixo.
      </p>

      {/* Lista de Cards com Ícones */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {contactLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`p-4 rounded-xl bg-gray-900/50 border border-gray-800 ${item.hoverBorder} hover:bg-gray-900 transition-all duration-200 flex items-center gap-3 group`}
            >
              <div className={`p-2 rounded-lg bg-gray-800/60 ${item.iconColor} group-hover:scale-110 transition-transform`}>
                <Icon size={20} />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors truncate">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}