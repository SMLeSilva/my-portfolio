import { useState } from "react"
import { USER_DATA } from "@/constants/user"
import { Github, Linkedin, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Início", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experiência", href: "#experience" },
    { name: "Educação", href: "#education" },
    { name: "Projetos", href: "#projects" }
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md transition-all">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between relative">
        <a href="#home" className="text-2xl font-black tracking-tighter text-white hover:opacity-80 transition-opacity z-20">
          SR<span className="text-purple-500">.</span>
        </a>
        
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <NavLink href="#home">Início</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experiência</NavLink>
          <NavLink href="#education">Educação</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
        </nav>

        <div className="flex items-center gap-4 z-20">
          <div className="hidden sm:flex items-center gap-3 border-r border-zinc-800 pr-4 mr-1">
            <a 
              href={USER_DATA.social.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href={USER_DATA.social.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <a 
            href="#contact"
            className="hidden sm:block px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-full transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
          >
            Vamos Conversar
          </a>

          <button 
            className="lg:hidden text-zinc-400 hover:text-white transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden absolute top-20 left-0 w-full bg-zinc-950 border-b border-zinc-800 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-8 h-full bg-zinc-950">
              <nav className="flex flex-col gap-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <MobileNavLink href={item.href} onClick={() => setIsOpen(false)}>
                      {item.name}
                    </MobileNavLink>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-6 pt-8 border-t border-zinc-800/50"
              >
                <div className="flex items-center gap-6 justify-center">
                  <a 
                    href={USER_DATA.social.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-4 bg-zinc-900 rounded-2xl text-zinc-400 hover:text-white transition-all"
                  >
                    <Github size={28} />
                  </a>
                  <a 
                    href={USER_DATA.social.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-4 bg-zinc-900 rounded-2xl text-zinc-400 hover:text-white transition-all"
                  >
                    <Linkedin size={28} />
                  </a>
                </div>
                
                <a 
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-5 bg-purple-600 hover:bg-purple-500 text-white text-center font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] active:scale-95"
                >
                  Vamos Conversar
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="text-2xl font-semibold text-zinc-300 hover:text-white hover:pl-4 transition-all duration-300 block py-3"
    >
      {children}
    </a>
  )
}