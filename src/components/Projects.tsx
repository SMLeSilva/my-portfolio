import { Github, ExternalLink, Folder } from 'lucide-react';
import { PROJECTS } from "@/constants/projects";

export function Projects() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-zinc-950 relative overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Folder size={12} />
            Portfólio Selecionado
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6">
            Projetos <span className="text-zinc-600">&</span> <span className="text-purple-500">Resultados</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl">
            Uma coleção de soluções desenvolvidas com foco em arquitetura, performance e experiência do usuário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-zinc-900/30 border border-zinc-800 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)] flex flex-col"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-zinc-900 border-b border-zinc-800 shrink-0">
                {project.image ? (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60"></div>
                  </>
                ) : (
                  <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                    <Folder className="text-zinc-700" size={48} />
                  </div>
                )}
                <div className="absolute inset-0 bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 shrink-0">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 bg-zinc-800 text-zinc-400 rounded-full hover:bg-white hover:text-zinc-950 transition-all"
                        title="Ver Código"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 bg-zinc-800 text-zinc-400 rounded-full hover:bg-purple-500 hover:text-white transition-all"
                        title="Ver Projeto Online"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm md:text-base text-zinc-400 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a 
            href="https://github.com/SMLeSilva" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm md:text-base text-zinc-400 hover:text-white transition-colors border-b border-zinc-800 hover:border-white pb-1"
          >
            Ver todos os repositórios no GitHub <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}