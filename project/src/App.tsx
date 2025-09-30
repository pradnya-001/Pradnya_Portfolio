import { useState } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        <section id="home" className="min-h-screen">
          <Hero />
        </section>

        <section id="resume" className="min-h-screen bg-gray-50">
          <Resume />
        </section>

        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        <section id="skills" className="min-h-screen bg-gray-50">
          <Skills />
        </section>

        <section id="achievements" className="min-h-screen">
          <Achievements />
        </section>

        <section id="contact" className="min-h-screen bg-gray-50">
          <Contact />
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">© 2025 Engineering Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;