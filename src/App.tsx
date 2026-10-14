import { ThemeProvider } from '@/context/ThemeContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Philosophy } from '@/components/Philosophy';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { Footer } from '@/components/Footer';
import { ThemePickerModal } from '@/components/ThemePickerModal';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-theme-bg text-theme-text font-sans selection:bg-theme-accent/30 selection:text-theme-text transition-colors duration-300">
        <Header />
        
        <main className="flex-1 flex flex-col w-full">
          <Hero />
          <Philosophy />
          <Projects />
          <Experience />
          <Education />
          <Skills />
        </main>

        <Footer />
        <ThemePickerModal />
      </div>
    </ThemeProvider>
  );
}

export default App;