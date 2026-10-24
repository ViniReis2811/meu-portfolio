import Hero from '@/app/components/Hero';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}