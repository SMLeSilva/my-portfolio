import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Instagram, Mail, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { USER_DATA } from "@/constants/user";

export function Footer() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="w-full bg-zinc-950 border-t border-zinc-800 py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-16">
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-2xl font-bold tracking-tighter text-white">
              {USER_DATA.name.split(' ')[0]} <span className="text-purple-500">{USER_DATA.name.split(' ')[1]}.</span>
            </div>

            <p className="text-zinc-400 max-w-sm leading-relaxed">
              Vamos construir algo incrível juntos? Estou sempre aberto a novas oportunidades e parcerias.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <SocialLink href={USER_DATA.social.github} icon={<Github size={18} />} />
              <SocialLink href={USER_DATA.social.linkedin} icon={<Linkedin size={18} />} />
              <SocialLink href={USER_DATA.social.instagram} icon={<Instagram size={18} />} />
              <SocialLink
                href={`https://wa.me/55${USER_DATA.phone.replace(/\D/g, '')}`}
                icon={<MessageCircle size={20} />}
              />
              <SocialLink href={`mailto:${USER_DATA.email}`} icon={<Mail size={18} />} />
            </div>

            <div className="pt-8 space-y-2 text-sm text-zinc-500">
              <p>{USER_DATA.email}</p>
              <p>{USER_DATA.location}</p>
            </div>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800 p-6 md:p-8 rounded-3xl backdrop-blur-sm relative group">
            <div className="absolute inset-0 rounded-3xl border border-purple-500/0 group-hover:border-purple-500/20 transition-all duration-500 pointer-events-none"></div>

            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              Envie uma mensagem <span className="text-purple-500">.</span>
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Seu nome"
                  required
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Seu e-mail"
                  required
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <textarea
                name="message"
                placeholder="Como posso te ajudar?"
                rows={4}
                required
                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="w-full bg-purple-600 hover:bg-purple-500 disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 group/btn"
              >
                {status === 'sending' ? (
                  'Enviando...'
                ) : status === 'success' ? (
                  <>
                    Enviado com sucesso <CheckCircle size={18} />
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              
              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={18} />
                    <div className="space-y-2">
                      <p className="text-red-300 text-sm font-medium">
                        Não foi possível enviar automaticamente.
                      </p>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        Pode haver uma instabilidade temporária. Por favor, envie sua mensagem diretamente para meu e-mail:
                      </p>
                      <a 
                        href={`mailto:${USER_DATA.email}`} 
                        className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1.5 transition-colors"
                      >
                        <Mail size={14} />
                        {USER_DATA.email}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-zinc-600 text-sm">
            © 2026 {USER_DATA.name}. Todos os direitos reservados.
          </p>
          <p className="text-zinc-700 text-xs">
            Feito com React, Tailwind & <span className="text-purple-900">Café</span>.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:scale-110 transition-all border border-zinc-800 hover:border-zinc-700"
    >
      {icon}
    </a>
  )
}