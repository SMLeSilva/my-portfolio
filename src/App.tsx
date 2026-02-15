import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Skills } from "@/components/Skills"
import { Experience } from "@/components/Experience"
import { Education } from "@/components/Education"
import { Projects } from "@/components/Projects"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-purple-500/30">
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <Hero />
        <Skills />
        <Experience />
        <Education /> 
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App