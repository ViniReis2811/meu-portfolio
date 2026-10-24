'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-gray-800/60 bg-[#090d16] py-8 mt-20">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center text-center gap-4 text-sm text-gray-500">
        <p>© {year ?? '2026'} Vinicius Gonçalves Reis. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}