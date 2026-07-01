import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white">
      {/* Subtle Noise Texture for brutalist feel */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-screen"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-24 space-y-32 relative z-10">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        
        <footer className="pt-20 pb-10 border-t border-zinc-900/50 text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Rishit Rai. Crafted with intent.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
