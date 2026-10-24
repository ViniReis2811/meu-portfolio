import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[090d16]/80 backdrop-blur-md border-b border-gray-800/60">
            <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo / Nome */}
                <Link
                    href="/"
                    className="text-lg font-semibold tracking-tight text-white hover:text-gray-300 transition-colors"
                >
                    Vinicius Gonçalves Reis
                </Link>
                
                {/* Links de Navegação */}
                <ul className="flex items-center gap-6 text-sm text-gray-400">
                <li>
                    <Link href="#sobre" className="hover:text-white transition-colors">
                    Sobre
                    </Link>
                </li>
                <li>
                    <Link href="#projetos" className="hover:text-white transition-colors">
                    Projetos
                    </Link>
                </li>
                <li>
                    <Link href="#contato" className="hover:text-white transition-colors">
                    Contato
                    </Link>
                </li>
                </ul>
            </nav>
        </header>
    );
}