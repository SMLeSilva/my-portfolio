import { Github, Linkedin, Mail, Instagram, ArrowDown, Download, MessageCircle } from 'lucide-react';
import { USER_DATA } from "@/constants/user";
import { useMemo } from 'react';

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-center items-center bg-zinc-950 overflow-hidden py-20 md:py-0">
      <BackgroundStars />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-900/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10"></div>

      <div className="container px-4 mx-auto text-center z-10 space-y-8 flex-1 flex flex-col justify-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-purple-400 text-xs font-medium mb-6 animate-fade-in-up backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            {USER_DATA.location}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6">
            {USER_DATA.name.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
              {USER_DATA.name.split(' ')[1]}.
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto mb-6">
            {USER_DATA.title}
          </p>

          <p className="text-zinc-500 max-w-lg mx-auto leading-relaxed text-sm md:text-base mb-8">
            {USER_DATA.about}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3 bg-white text-zinc-950 font-bold rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Ver Projetos
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="/cv.pdf"
              download="Samuel_Rodrigues_da_Silva_CV.pdf"
              className="w-full sm:w-auto px-8 py-3 bg-zinc-900/50 text-white font-medium rounded-full border border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-500 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Download size={18} />
              Baixar CV
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center gap-4 z-20 px-4 flex-wrap mt-12 md:absolute md:bottom-10 md:mt-0">
        <SocialLink href={USER_DATA.social.github} icon={<Github size={20} />} label="GitHub" />
        <SocialLink href={USER_DATA.social.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
        <SocialLink href={USER_DATA.social.instagram} icon={<Instagram size={20} />} label="Instagram" />
        <SocialLink
          href={`https://wa.me/55${USER_DATA.phone.replace(/\D/g, '')}`}
          icon={<MessageCircle size={20} />}
          label="WhatsApp"
        />
        <SocialLink href={`mailto:${USER_DATA.email}`} icon={<Mail size={20} />} label="Email" />
      </div>
    </section>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="p-3 bg-zinc-900/50 border border-zinc-800/50 rounded-full text-zinc-400 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm shadow-lg"
    >
      {icon}
    </a>
  );
}

function BackgroundStars() {
  const stars = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes float-up {
            0% { transform: translateY(0px); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(-100px); opacity: 0; }
          }
        `}
      </style>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              animation: `float-up ${star.duration} linear infinite`,
              animationDelay: star.delay,
              boxShadow: `0 0 ${star.size} rgba(255, 255, 255, 0.8)`
            }}
          />
        ))}
      </div>
    </>
  );
}