import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from "@/constants/education";

export function Education() {
  return (
    <section id="education" className="w-full py-16 md:py-24 bg-zinc-950 relative scroll-mt-28">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Formação <span className="text-zinc-500">Acadêmica</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {EDUCATION.map((edu, index) => (
            <div 
              key={index}
              className="group relative bg-zinc-900/20 border border-zinc-800/60 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300 hover:bg-zinc-900/40"
            >
              <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4 relative z-10">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-zinc-100 group-hover:text-purple-300 transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-purple-400 font-medium mt-1">
                    {edu.degree}
                  </p>
                </div>
                
                <span className={`text-xs px-2 py-1.5 rounded-full border flex items-center gap-1.5 shrink-0 ${
                  edu.status === "Em andamento" 
                    ? "bg-purple-500/10 border-purple-500/20 text-purple-300"
                    : "bg-zinc-800/50 border-zinc-700 text-zinc-400"
                }`}>
                  {edu.status === "Concluído" ? <CheckCircle2 size={12} /> : <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>}
                  {edu.period}
                </span>
              </div>

              <p className="text-sm md:text-base text-zinc-500 leading-relaxed relative z-10">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}