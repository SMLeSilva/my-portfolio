import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCES } from "@/constants/experience";

export function Experience() {
  return (
    <section id="experience" className="w-full py-16 md:py-20 bg-zinc-950 relative overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Minha <span className="text-purple-500">Jornada</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
            Experiências profissionais focadas em gerar valor e resolver problemas complexos.
          </p>
        </div>

        <div className="relative space-y-8 md:space-y-12">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 -translate-x-1/2"></div>

          {EXPERIENCES.map((job, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-zinc-950 -translate-x-1/2 mt-1.5 shadow-[0_0_10px_rgba(168,85,247,0.5)] z-20"></div>

              <div className="flex-1 hidden md:block"></div>

              <div className="flex-1 pl-12 md:pl-0">
                <div className="bg-zinc-900/40 border border-zinc-800/60 p-6 rounded-2xl hover:border-purple-500/30 transition-all duration-300 hover:bg-zinc-900/60 group relative">
                  <div className={`hidden md:block absolute top-6 w-3 h-3 bg-zinc-800/60 border-l border-t border-zinc-700 rotate-45 ${
                    index % 2 === 0 ? "-left-[7px] border-r-0 border-b-0" : "-right-[7px] border-l-0 border-t-0 bg-zinc-900/60 rotate-[225deg]"
                  }`}></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                      <Briefcase size={18} className="text-purple-500 shrink-0" />
                      {job.role}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500 flex items-center gap-1 bg-zinc-950/50 px-2 py-1 rounded w-fit">
                      <Calendar size={12} />
                      {job.period}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-purple-400 mb-4 uppercase tracking-wider">
                    {job.company}
                  </h4>

                  <ul className="space-y-3">
                    {job.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                        <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-purple-500/50 shrink-0"></span>
                        <span>
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}