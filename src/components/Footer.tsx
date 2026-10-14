import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { USER_DATA } from '@/constants/user';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Send, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle, 
  ArrowUp, 
  Gauge, 
  Sparkles,
  MapPin
} from 'lucide-react';

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
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="contact" 
      className="bg-theme-bg transition-colors duration-300 relative overflow-hidden pt-20 pb-12"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-theme-border">
          
          {/* Left Column: Direct info & context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-theme-accent font-semibold">
                // 07. Contato Direto
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-theme-text tracking-tight">
                Vamos construir algo juntos?
              </h2>
              <p className="text-theme-muted text-base leading-relaxed">
                Aberto a propostas de desenvolvimento backend, liderança técnica de squads, consultorias de arquitetura ou projetos desafiadores.
              </p>
            </div>

            {/* Quick Contact Points */}
            <div className="space-y-3 pt-2 text-sm font-mono text-theme-muted">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-theme-accent" />
                <a 
                  href={`mailto:${USER_DATA.email}`} 
                  className="hover:text-theme-text hover:underline transition-colors"
                >
                  {USER_DATA.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-theme-accent" />
                <a 
                  href={`https://wa.me/55${USER_DATA.phone.replace(/\D/g, '')}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-theme-text hover:underline transition-colors"
                >
                  WhatsApp: (19) 99183-2991
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-theme-accent" />
                <span>{USER_DATA.location} · Brasil (GMT-3)</span>
              </div>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href={USER_DATA.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-theme-border bg-theme-surface text-theme-muted hover:text-theme-text hover:border-theme-accent transition-all"
                aria-label="GitHub de Samuel"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={USER_DATA.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-theme-border bg-theme-surface text-theme-muted hover:text-theme-text hover:border-theme-accent transition-all"
                aria-label="LinkedIn de Samuel"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={USER_DATA.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-theme-border bg-theme-surface text-theme-muted hover:text-theme-text hover:border-theme-accent transition-all"
                aria-label="Instagram de Samuel"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-theme-surface border border-theme-border shadow-xl relative group">
              <h3 className="font-display font-bold text-xl text-theme-text mb-6">
                Envie uma Mensagem Direta
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-theme-muted mb-1.5">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Ex: Carlos Silva"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-theme-bg border border-theme-border text-theme-text placeholder:text-theme-muted/50 focus:outline-none focus:border-theme-accent transition-colors text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-theme-muted mb-1.5">
                      Seu E-mail
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="exemplo@empresa.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-theme-bg border border-theme-border text-theme-text placeholder:text-theme-muted/50 focus:outline-none focus:border-theme-accent transition-colors text-sm font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-theme-muted mb-1.5">
                    Mensagem / Projeto
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Conte sobre sua ideia, vaga ou projeto técnico..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-theme-bg border border-theme-border text-theme-text placeholder:text-theme-muted/50 focus:outline-none focus:border-theme-accent transition-colors text-sm font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className="w-full py-3.5 px-6 rounded-xl bg-theme-accent text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-md active:scale-98 disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <span>Enviando mensagem...</span>
                  ) : status === 'success' ? (
                    <>
                      <span>Mensagem enviada com sucesso!</span>
                      <CheckCircle className="w-4 h-4 text-emerald-300" />
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensagem</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs space-y-2">
                    <div className="flex items-center gap-2 font-bold">
                      <AlertCircle className="w-4 h-4 text-rose-400" />
                      <span>Instabilidade temporária no envio automático</span>
                    </div>
                    <p>
                      Por favor, envie diretamente para:{' '}
                      <a href={`mailto:${USER_DATA.email}`} className="underline text-white font-mono">
                        {USER_DATA.email}
                      </a>
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Speedlify / Quality Scorecard - Max Böck signature badge */}
        <div className="py-12 border-b border-theme-border/70 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-theme-surface border border-theme-border text-emerald-400">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-sm text-theme-text flex items-center gap-2">
                <span>Speedlify Web Vitals</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  100% Score
                </span>
              </div>
              <p className="text-xs text-theme-muted font-mono">
                Construído com zero bloatware, SEO semântico e máxima pontuação de acessibilidade.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-theme-border bg-theme-surface hover:border-theme-accent text-xs font-mono text-theme-text transition-all self-end sm:self-auto"
            title="Voltar ao início da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-theme-accent" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-theme-muted">
          <div>
            © 2026 {USER_DATA.name} · Limeira, SP
          </div>

          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-theme-accent" />
            <span>Design fusion inspirado em Max Böck & Ian Dunkerley</span>
          </div>

          <div className="text-[11px] opacity-75">
            Dica: pressione <kbd className="px-1.5 py-0.5 rounded bg-theme-surface border border-theme-border text-theme-text font-bold">T</kbd> para trocar o tema
          </div>
        </div>

      </div>
    </footer>
  );
}