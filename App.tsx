
import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  ShieldCheck, 
  TrendingUp, 
  User, 
  MessageSquare, 
  ChevronRight, 
  Layout, 
  Palette, 
  Megaphone,
  Briefcase,
  Award,
  CheckCircle2,
  X,
  Sparkles
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- Componentes de Interface ---

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-50 border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gold flex items-center justify-center text-black">
          <Scale size={20} />
        </div>
        <span className="serif text-xl font-bold tracking-tight text-white uppercase">L&A Advogados</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
        <a href="#experiencia" className="hover:text-gold transition-colors">Experiência</a>
        <a href="#atuacao" className="hover:text-gold transition-colors">Atuação</a>
        <a href="#autoridade" className="hover:text-gold transition-colors">Autoridade</a>
      </div>
      <button className="bg-white text-black px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-gold transition-all">
        Agendar Consulta
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 bg-black overflow-hidden">
    {/* Background Decorative Element with low opacity for Dark Mode */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-navy hidden lg:block opacity-40">
      <div className="absolute inset-0 opacity-30 grayscale bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2070')] bg-cover"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-gold"></div>
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px]">Advocacia de Elite</span>
        </div>
        <h1 className="text-5xl md:text-7xl leading-[1.1] text-white mb-8">
          Sua autoridade jurídica merece uma <span className="serif italic text-gold">vitrine à altura.</span>
        </h1>
        <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
          Estrategistas jurídicos dedicados à proteção patrimonial e ao sucesso corporativo. Onde a tradição encontra a inovação digital de luxo.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="bg-gold text-black px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-white transition-all shadow-[0_0_30px_rgba(197,160,89,0.3)] flex items-center gap-4 group">
            Consultar Especialista <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
    
    {/* Gradient subtle overlay */}
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
  </section>
);

const ProblemSection = () => (
  <section id="experiencia" className="py-32 bg-black border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000" 
              alt="Ambiente Profissional Dark" 
              className="grayscale brightness-75 shadow-2xl border border-white/10"
            />
            <div className="absolute -bottom-10 -right-10 bg-gold p-10 hidden md:block shadow-2xl">
              <p className="text-black font-bold text-4xl mb-1">20+</p>
              <p className="text-black/70 text-[10px] uppercase tracking-widest font-bold">Anos de Histórico</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl text-white mb-8 serif">
            No silêncio da noite, quem <span className="italic text-gold">protege seus ativos?</span>
          </h2>
          <div className="space-y-8">
            <p className="text-slate-400 leading-relaxed">
              No mercado de alto ticket, clientes não procuram apenas advogados; eles buscam segurança e exclusividade. Um site que não transmite prestígio é uma barreira invisível para seus honorários.
            </p>
            <ul className="space-y-6">
              {[
                { title: "Presença Executiva", desc: "Posicionamento digital que reflete o peso da sua assinatura." },
                { title: "Privacidade e Rigor", desc: "Comunicação sóbria que respeita o sigilo e a seriedade dos seus casos." },
                { title: "Imponibilidade Digital", desc: "Transmita a robustez de uma grande banca, mesmo em uma estrutura boutique." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 text-gold"><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="atuacao" className="py-32 bg-[#05070a]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Especialidades de Alta Complexidade</span>
        <h2 className="text-4xl text-white serif italic">Soluções Sob Medida</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <ShieldCheck />, title: "Blindagem de Ativos", desc: "Estruturação internacional e nacional para proteção definitiva de patrimônio familiar." },
          { icon: <Award />, title: "Contencioso Estratégico", desc: "Defesa técnica em tribunais superiores com foco em precedentes cruciais." },
          { icon: <TrendingUp />, title: "M&A e Reestruturações", desc: "Suporte completo para operações societárias que definem o futuro de grandes empresas." }
        ].map((item, i) => (
          <div key={i} className="bg-black p-12 border border-white/5 hover:border-gold/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-14 h-14 bg-white/5 flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-black transition-all">
              {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 28 })}
            </div>
            <h3 className="text-xl font-bold text-white mb-4 serif uppercase tracking-tight">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
            <div className="h-[2px] w-8 bg-gold group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AuthoritySection = () => (
  <section id="autoridade" className="py-32 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-5 gap-16 items-center">
        <div className="lg:col-span-2">
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
              alt="Advogado Sócio Black" 
              className="grayscale brightness-90 shadow-2xl border border-white/10 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 border-[15px] border-gold/10 pointer-events-none group-hover:border-gold/20 transition-all"></div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Liderança Técnica</span>
          <h2 className="text-5xl text-white serif mb-8">Dr. Ricardo Vasconcellos <span className="text-xl block text-gold/60 font-sans uppercase tracking-[0.2em] mt-2 italic">Senior Partner | OAB/RS 00.000</span></h2>
          <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-6 italic text-lg leading-relaxed border-l-2 border-gold/30 pl-8">
            <p>"Na alta advocacia, a discrição é tão valiosa quanto a eloquência. Atuamos onde o Direito encontra a estratégia pura, entregando não apenas vitórias, mas tranquilidade institucional."</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Expertise</p>
              <p className="text-sm text-white font-bold">Direito Corporativo Transnacional</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Premiações</p>
              <p className="text-sm text-white font-bold">Chambers Brazil - Band 1 (2022-2024)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EthicsSection = () => (
  <section className="py-24 bg-[#0A0D14] text-white text-center border-y border-white/5 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03]">
      <Scale size={400} />
    </div>
    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <div className="flex justify-center mb-8">
        <div className="p-4 bg-gold/10 rounded-full">
          <Award className="text-gold" size={40} />
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-6 serif italic text-gold">Soberania Ética</h2>
      <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
        Operamos sob os mais rígidos padrões do Provimento 205/2021 do Conselho Federal da OAB. Nossa comunicação é estritamente informativa, focada na difusão de conhecimento jurídico e na preservação da dignidade da profissão.
      </p>
      <div className="flex items-center justify-center gap-4">
        <div className="h-[1px] w-12 bg-white/10"></div>
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-bold">Informação Jurídica Certificada</span>
        <div className="h-[1px] w-12 bg-white/10"></div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black pt-32 pb-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-navy border border-white/5 p-16 text-center mb-24 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent"></div>
        <h3 className="text-4xl text-white serif italic mb-8 relative z-10">Seu futuro jurídico começa aqui.</h3>
        <button className="bg-gold text-black px-12 py-5 text-xs font-bold uppercase tracking-[0.4em] hover:bg-white transition-all relative z-10 flex items-center gap-3 mx-auto">
          Solicitar Agendamento <ChevronRight size={18} />
        </button>
      </div>
      
      <div className="grid md:grid-cols-4 gap-12 mb-20 text-sm">
        <div className="md:col-span-2">
           <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gold flex items-center justify-center text-black">
              <Scale size={16} />
            </div>
            <span className="serif text-lg font-bold tracking-tight text-white uppercase">L&A Advogados</span>
          </div>
          <p className="text-slate-500 max-w-xs leading-relaxed">
            Uma boutique jurídica focada em soluções transnacionais e proteção de ativos de alta complexidade.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white uppercase tracking-widest mb-6 text-[11px]">Sede Pelotas</h4>
          <p className="text-slate-500 leading-relaxed">
            Corporate Plaza, 14º Andar<br />
            Av. Dom Joaquim, 500<br />
            Três Vendas
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white uppercase tracking-widest mb-6 text-[11px]">Central de Atendimento</h4>
          <p className="text-slate-500 flex items-center gap-3 mb-2"><MessageSquare size={14} className="text-gold" /> +55 53 98765-4321</p>
          <p className="text-slate-500 flex items-center gap-3"><User size={14} className="text-gold" /> juridico@lavogados.adv.br</p>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-slate-600 uppercase tracking-widest">© 2024 Vasconcellos & Associados - Todos os direitos reservados</p>
        <div className="flex gap-8 text-[9px] uppercase tracking-widest text-slate-500 font-bold">
          <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Painel de Estratégia ---

const StrategyOverlay = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [aiPitch, setAiPitch] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateAIPitch = async () => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: 'Atue como um estrategista de vendas de luxo. Gere 3 argumentos curtos e fatais para vender esta landing page "Black & Gold" para um advogado de elite. Foque em status, exclusividade e na psicologia do Dark Mode no mercado premium.',
      });
      setAiPitch(response.text || "Erro ao processar.");
    } catch (error) {
      setAiPitch("Falha ao carregar estratégia.");
    } finally {
      setIsGenerating(false);
    }
  };

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6 overflow-y-auto">
      <div className="max-w-4xl w-full bg-[#0B0F1A] border border-white/10 rounded-none shadow-[0_0_100px_rgba(0,0,0,0.8)] relative p-12">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors">
          <X size={24} />
        </button>
        
        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
          <div className="w-12 h-12 bg-gold flex items-center justify-center text-black">
             <Briefcase size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white serif uppercase tracking-tighter">Versão Black: <span className="text-gold italic">Dark Luxury Strategy</span></h2>
            <p className="text-xs text-slate-500 uppercase tracking-widest">Por que vender esta estética para advogados High-Ticket</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <section>
              <h3 className="flex items-center gap-2 text-gold font-bold uppercase text-[11px] tracking-widest mb-4">
                <Palette size={16} /> A Psicologia do Dark Mode
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                No luxo, o preto representa o que é <strong>proibido, seleto e eterno</strong>. Enquanto sites claros são "comerciais", sites dark são "galerias de arte". Para um advogado, isso comunica que ele não é apenas mais um, mas o <strong>guardião de segredos valiosos</strong>.
              </p>
            </section>
            
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="flex items-center gap-2 text-gold font-bold uppercase text-[11px] tracking-widest">
                  <Megaphone size={16} /> Pitch de Elite (IA)
                </h3>
                <button 
                  onClick={generateAIPitch}
                  disabled={isGenerating}
                  className="flex items-center gap-1.5 bg-gold text-black text-[9px] uppercase tracking-widest px-3 py-1.5 hover:bg-white transition-all disabled:opacity-50 font-bold"
                >
                  <Sparkles size={12} /> {isGenerating ? 'Calculando...' : 'Gerar Argumentos de Luxo'}
                </button>
              </div>
              
              {aiPitch ? (
                <div className="bg-black/50 p-5 border-l-2 border-gold text-sm text-slate-300 leading-relaxed italic whitespace-pre-line animate-in fade-in zoom-in duration-500">
                  {aiPitch}
                </div>
              ) : (
                <div className="bg-black/30 p-5 border border-white/5 rounded text-[11px] text-slate-500 uppercase tracking-widest text-center">
                  Clique para gerar o discurso de venda premium
                </div>
              )}
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-white/5 p-6 border border-white/10">
              <h3 className="flex items-center gap-2 text-gold font-bold uppercase text-[11px] tracking-widest mb-4">
                <Layout size={16} /> Elementos de Conversão Dark
              </h3>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex gap-2"><span>•</span> <span>Botões com "Glow" sutil convidam ao clique de forma hipnótica.</span></li>
                <li className="flex gap-2"><span>•</span> <span>O contraste Gold/Black guia o olho diretamente para a autoridade do advogado.</span></li>
                <li className="flex gap-2"><span>•</span> <span>Reduz a fadiga ocular, mantendo o cliente mais tempo na página.</span></li>
              </ul>
            </section>
            
            <div className="bg-gold/5 p-6 border-l-4 border-gold">
              <h4 className="text-gold font-bold text-xs uppercase mb-2">Insight do Consultor</h4>
              <p className="text-xs text-slate-400 leading-relaxed italic">
                "Doutor, sites brancos são para quem quer ser encontrado. Sites pretos são para quem quer ser escolhido. Qual a sua posição hoje?"
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={onClose}
            className="border border-white/10 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Visualizar Landing Page Black
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [showStrategy, setShowStrategy] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowStrategy(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold selection:text-black">
      <Navbar />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <AuthoritySection />
      <EthicsSection />
      <Footer />

      {/* Botão Flutuante do Consultor em Estilo Gold */}
      <button 
        onClick={() => setShowStrategy(true)}
        className="fixed bottom-8 right-8 z-50 bg-gold text-black w-14 h-14 rounded-full shadow-[0_0_20px_rgba(197,160,89,0.5)] flex items-center justify-center hover:scale-110 transition-all group"
      >
        <Briefcase size={24} />
        <span className="absolute right-full mr-4 bg-white text-black text-[10px] uppercase tracking-[0.2em] py-2 px-4 rounded-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-bold">
          Configuração do Estrategista
        </span>
      </button>

      <StrategyOverlay isOpen={showStrategy} onClose={() => setShowStrategy(false)} />
    </div>
  );
}
