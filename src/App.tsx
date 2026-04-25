/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Bot, MessageSquareWarning, Filter, BellRing,
  ChevronDown, Smartphone, ArrowRight, Check,
  Settings, Zap, PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-green-whatsapp/30 selection:text-white pb-12 scroll-smooth">
      <Navbar />
      <main className="flex flex-col gap-6">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -20% 0px" }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'A Solução', href: '#solucao', id: 'solucao' },
    { name: 'Como Funciona', href: '#como-funciona', id: 'como-funciona' },
    { name: 'Preços', href: '#precos', id: 'precos' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-navy border-b border-white/10 mx-4 sm:mx-8 lg:mx-auto max-w-7xl mt-4 rounded-2xl md:rounded-full px-2 shadow-2xl shadow-black/50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-purple/20 to-transparent flex items-center justify-center border border-primary-purple/30 shadow-inner">
              <Bot className="w-6 h-6 text-primary-cyan" />
            </div>
            <span className="font-bold text-xl text-white tracking-tight">Acelera<span className="text-gradient">Bot</span></span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === link.id
                  ? 'bg-white/15 text-white shadow-lg border border-white/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div>
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20testar%20a%20IA."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-primary hover:opacity-90 text-white px-3 sm:px-5 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all shadow-lg shadow-primary-cyan/20 whitespace-nowrap"
            >
              Testar Agora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="text-white overflow-hidden relative pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Decorative gradient from design */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-green-whatsapp/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 w-fit text-xs font-semibold text-primary-cyan mb-6">
                • IA + SITE: O ECOSSISTEMA COMPLETO DE CAPTAÇÃO
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white pt-2">
                Pare de perder vendas porque seu <span className="text-gradient">WhatsApp demora</span> para responder.
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl">
                Um assistente de IA que atende em 5 segundos, responde dúvidas e entrega leads prontos direto no seu celular. 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-2">
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Quero%20testar%20o%20AceleraBot."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-xl shadow-primary-cyan/20 flex items-center justify-center gap-2 group"
                >
                  Testar a IA na Prática agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>


            </motion.div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full glass-card p-6 border border-white/10"
            >
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-start">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0" />
                  <div className="bg-slate-800/80 border border-white/5 p-3 rounded-2xl rounded-tl-none text-xs sm:text-sm leading-relaxed text-slate-200 shadow-sm">
                    "Oi! Quero saber se vocês fazem revisão em Onix 2022 e quanto custa?"
                  </div>
                </div>

                <div className="flex gap-2 items-start justify-end">
                  <div className="bg-green-whatsapp/20 border border-green-500/30 p-3 rounded-2xl rounded-tr-none text-xs sm:text-sm leading-relaxed text-green-100/90 shadow-sm text-right">
                    "Olá! Fazemos sim. A revisão completa para esse modelo inclui limpeza dos bicos, troca de velas, troca de óleo. O valor é 350. Gostaria de agendar um horário?"
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-purple to-primary-cyan flex-shrink-0 shadow-lg shadow-primary-cyan/30 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="mt-4 p-4 bg-white/5 rounded-2xl border-l-4 border-primary-cyan glass shadow-2xl backdrop-blur-md">
                  <p className="text-[10px] uppercase font-bold text-primary-cyan mb-1">Notificação de Lead Hot 🔥</p>
                  <p className="text-sm font-semibold text-white">Novo Cliente: João | Carro: Vectra 97</p>
                  <p className="text-xs text-slate-400 italic mt-1">Status: Pronto para fechar Orçamento.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <MessageSquareWarning className="w-5 h-5 text-green-400" />,
      title: "Respostas Inteligentes",
      description: "A IA entende áudios e textos informais como um humano faria, sem menus chatos."
    },
    {
      icon: <Filter className="w-5 h-5 text-green-400" />,
      title: "Qualificação de Leads",
      description: "Faz as perguntas certas (modelo, serviço, urgência) antes de notificar você."
    },
    {
      icon: <BellRing className="w-5 h-5 text-green-400" />,
      title: "Handoff Perfeito",
      description: "Foque em fechar negócios. Você só assume quando o cliente já passou pela triagem."
    }
  ];

  return (
    <section id="solucao" className="py-16 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Chatbots tradicionais irritam seus clientes. <span className="text-gradient">Nós somos diferentes.</span>
          </h2>
          <p className="text-base text-slate-400">
            A AceleraBot usa a linguagem natural para conversar, entender a real necessidade e filtrar curiosos de compradores de verdade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-green-whatsapp/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan"></span>
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { num: "01.", title: "Conectamos", desc: "Conectamos nosso sistema ao número do seu WhatsApp sem burocracia." },
    { num: "02.", title: "Treinamos", desc: "Enviamos para a IA o cérebro da sua empresa com horários e serviços." },
    { num: "03.", title: "Triamos", desc: "A IA assume o primeiro atendimento e você recebe os leads mastigados." }
  ];

  return (
    <section id="como-funciona" className="py-20 border-y border-white/5 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Como Funciona</h2>
          <p className="text-sm text-slate-400">Um processo simples, que não atrapalha a sua operação.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col text-center sm:text-left sm:items-start items-center glass p-6 rounded-2xl border border-white/5"
            >
              <span className="text-3xl font-black text-white/60 mb-4">{step.num}</span>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="precos" className="py-20 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Escolha o nível de automação para o seu negócio</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto pt-4 md:pt-0">
          {/* Card 1: Plano Motor */}
          <div className="glass-card flex flex-col p-8 border-2 border-white/30 bg-slate-900/40 hover:border-white/50 transition-colors shadow-xl relative order-2 md:order-1 mt-4 md:mt-0">
            <h3 className="text-2xl font-bold text-white mb-2">Plano Motor</h3>
            <p className="text-primary-cyan text-sm font-medium mb-6">A Inteligência no seu WhatsApp</p>

            <p className="text-sm text-slate-300 mb-6 bg-white/5 p-4 rounded-xl">
              <strong className="text-white">Público-alvo:</strong> Ideal para quem já tem site ou presença forte no Instagram.
            </p>

            <div className="mb-6 flex-1">
              <p className="text-sm font-bold text-white mb-4">O que está incluso:</p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-300 text-sm">
                  <Check className="w-5 h-5 text-primary-cyan shrink-0 mt-0.5" />
                  <span>Configuração do Assistente de IA no seu número atual.</span>
                </li>
                <li className="flex gap-3 text-slate-300 text-sm">
                  <Check className="w-5 h-5 text-primary-cyan shrink-0 mt-0.5" />
                  <span>Treinamento da IA com os dados da sua empresa (horários, serviços, preços).</span>
                </li>
                <li className="flex gap-3 text-slate-300 text-sm">
                  <Check className="w-5 h-5 text-primary-cyan shrink-0 mt-0.5" />
                  <span>Fluxo de qualificação personalizada (triagem de leads).</span>
                </li>
                <li className="flex gap-3 text-slate-300 text-sm">
                  <Check className="w-5 h-5 text-primary-cyan shrink-0 mt-0.5" />
                  <span>Respostas automáticas para FAQs.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-slate-400 text-sm">Setup:</span>
                <span className="text-white font-bold">R$ 997</span>
                <span className="text-slate-500 text-xs">(Pagamento único)</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-slate-400 text-sm mb-1">Manutenção:</span>
                <span className="text-3xl font-extrabold text-white">R$ 297</span>
                <span className="text-slate-400 text-xs mb-1.5">/mês</span>
              </div>
            </div>

            <a
              href="#"
              className="block w-full text-center bg-white/5 hover:bg-white/10 text-white border border-white/10 py-4 rounded-xl font-bold text-sm transition-all"
            >
              Quero apenas o AceleraBot
            </a>
          </div>

          {/* Card 2: Plano Ecossistema Completo */}
          <div className="glass-card flex flex-col p-8 border-2 border-primary-cyan/60 hover:border-primary-cyan transition-colors shadow-2xl shadow-primary-cyan/20 relative bg-slate-900/60 order-1 md:order-2">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wider shadow-lg shadow-primary-cyan/20 whitespace-nowrap border border-white/10">
              Mais Popular
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 pt-2">Ecossistema Completo</h3>
            <p className="text-primary-cyan text-sm font-medium mb-6">O Funil de Vendas Definitivo</p>

            <p className="text-sm text-slate-300 mb-6 bg-white/5 p-4 rounded-xl border border-primary-cyan/10">
              <strong className="text-white">Público-alvo:</strong> Perfeito para quem quer captar novos clientes via anúncios e precisa de um site que vende.
            </p>

            <div className="mb-6 flex-1">
              <p className="text-sm font-bold text-white mb-4">O que está incluso:</p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-white text-sm font-semibold p-3 bg-white/5 rounded-lg border border-white/5">
                  <Check className="w-5 h-5 text-primary-cyan shrink-0 mt-0.5" />
                  <span>TUDO do Plano Motor, e mais:</span>
                </li>
                <li className="flex gap-3 text-slate-300 text-sm">
                  <Check className="w-5 h-5 text-primary-cyan shrink-0 mt-0.5" />
                  <span>Criação de Landing Page de Alta Conversão otimizada para Ads.</span>
                </li>
                <li className="flex gap-3 text-slate-300 text-sm">
                  <Check className="w-5 h-5 text-primary-cyan shrink-0 mt-0.5" />
                  <span>Hospedagem inclusa (Você não se preocupa com servidores).</span>
                </li>
                <li className="flex gap-3 text-slate-300 text-sm">
                  <Check className="w-5 h-5 text-primary-cyan shrink-0 mt-0.5" />
                  <span>Botão de IA Flutuante (Integração nativa entre site e o seu assistente).</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-slate-400 text-sm">Setup:</span>
                <span className="text-primary-cyan font-bold">R$ 1.997</span>
                <span className="text-slate-500 text-xs">(Pagamento único)</span>
              </div>
              <div className="flex items-end gap-2 flex-wrap sm:flex-nowrap">
                <span className="text-slate-400 text-sm mb-1">Manutenção:</span>
                <span className="text-3xl font-extrabold text-white">R$ 397</span>
                <span className="text-slate-400 text-xs mb-1.5 whitespace-nowrap">/mês <span className="hidden sm:inline">(IA + Hospedagem)</span></span>
              </div>
              <div className="text-slate-400 text-xs sm:hidden mt-2">(IA + Hospedagem do Site)</div>
            </div>

            <a
              href="#"
              className="block w-full text-center bg-gradient-primary hover:opacity-90 text-white py-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-primary-cyan/20"
            >
              Quero o Ecossistema Completo
            </a>
          </div>
        </div>

        <div className="mt-16 text-center text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-center gap-3 max-w-3xl mx-auto glass p-6 rounded-2xl border border-white/5">
          <Zap className="w-6 h-6 text-green-whatsapp shrink-0" />
          <p className="leading-relaxed"><strong>Sem fidelidade:</strong> cancele quando quiser. <br className="sm:hidden" /> Custos de API da OpenAI já inclusos nos planos.</p>
        </div>

      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    { question: "Preciso de um celular exclusivo?", answer: "Não, usamos o número que você já possui. A integração conecta nosso sistema à sua conta existente." },
    { question: "E se a IA não souber responder?", answer: "Ela é programada para ser honesta. Se a pergunta for complexa, ela avisa educadamente que um humano vai assumir o atendimento." },
    { question: "Tem fidelidade?", answer: "Não. O cancelamento pode ser feito a qualquer momento sem multas." }
  ];

  return (
    <section className="py-16 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white text-center mb-10">Perguntas Frequentes</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass rounded-xl overflow-hidden hover:border-white/20 transition-colors border border-white/5">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full px-6 py-5 flex items-center justify-between font-semibold text-white text-sm text-left focus:outline-none">
        <span>{question}</span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
            <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Footer() {
  return (
    <footer className="glass border-t border-white/10 text-slate-400 py-8 mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-2xl">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <span className="font-bold text-sm text-white tracking-tight">Acelera<span className="text-gradient">Bot</span></span>
            <p className="text-[10px] uppercase tracking-widest mt-1 text-slate-500">© {new Date().getFullYear()} AceleraBot</p>
            <p className="text-[10px] text-slate-500">Tecnologia para negócios locais</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold text-white">Pricing</p>
            <p className="text-[10px] text-slate-400">Único: R$ 997 | Mensal: R$ 297</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold text-white">Legal</p>
            <a href="#" className="text-[10px] text-slate-400 hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="text-[10px] text-slate-400 hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
