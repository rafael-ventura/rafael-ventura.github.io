import { MotionConfig } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { Projects } from '@/sections/Projects';
import { Experience } from '@/sections/Experience';
import { Skills } from '@/sections/Skills';
import { About } from '@/sections/About';
import { Contact } from '@/sections/Contact';

export function App() {
  return (
    // reducedMotion="user" turns animations off for visitors who asked their OS for less motion.
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
