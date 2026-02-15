import { 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  User, 
  Globe, 
  Brain, 
  MessageSquare, 
  Star,
  Cpu,
  Code2
} from 'lucide-react';
import { SKILLS } from "@/constants/skills";

const iconMap: Record<string, React.ElementType> = {
  "Layout": Layout,
  "Server": Server,
  "Database": Database,
  "Wrench": Wrench,
  "User": User,
  "Globe": Globe,
  "Brain": Brain,
  "MessageSquare": MessageSquare,
  "Star": Star,
  "Cpu": Cpu,
  "Code": Code2
};

export function Skills() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 bg-zinc-950 relative overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-4 mb-12 md:mb-16 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">
          Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Stack</span>
        </h2>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-light">
          Ferramentas modernas para soluções escaláveis.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SKILLS.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Layout;
            
            return (
              <div 
                key={index} 
                className="bg-zinc-900/20 border border-zinc-800/60 rounded-3xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-500 hover:bg-zinc-900/40 group backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-6 md:mb-8 border-b border-zinc-800/50 pb-4 md:pb-6">
                  <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400 group-hover:text-purple-300 transition-colors ring-1 ring-purple-500/20">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-100">{category.category}</h3>
                </div>

                <div className="flex flex-col gap-5 md:gap-6">
                  {category.groups.map((group, groupIndex) => (
                    <div key={groupIndex}>
                      <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3 pl-1">
                        {group.name}
                      </h4>

                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {group.items.map((skill, skillIndex) => (
                          <div 
                            key={skillIndex}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-950/50 border border-zinc-800/50 hover:border-purple-500/30 hover:bg-zinc-800 transition-all duration-300 cursor-default group/skill"
                          >
                            <i className={`${skill.iconClass} text-base md:text-lg text-zinc-500 group-hover/skill:text-white transition-colors`}></i>
                            <span className="text-sm font-medium text-zinc-400 group-hover/skill:text-zinc-200 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-900/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
    </section>
  )
}