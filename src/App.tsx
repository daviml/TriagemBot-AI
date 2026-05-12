/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Bot, MessageSquareWarning, Filter, BellRing,
  ChevronDown, Smartphone, ArrowRight, Check,
  Settings, Zap, PhoneCall, Sparkles, User, Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const AceleraAssistenteText = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-center font-display ${className}`}>
    <span className="text-gradient font-bold tracking-tight">Acelera</span>Assistente
  </span>
);

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
    <nav className="sticky top-0 z-50 bg-[#1A1025]/80 backdrop-blur-md border-b border-white/5 mx-4 sm:mx-8 lg:mx-auto max-w-7xl mt-4 rounded-2xl md:rounded-full px-2 shadow-2xl shadow-black/50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-violet-500/10 flex items-center justify-center border border-blue-500/30 shadow-inner">
              <Sparkles className="w-5 h-5 text-blue-400" />
            </div>
            <AceleraAssistenteText className="font-semibold text-xl text-white tracking-tight" />
          </div>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === link.id
                  ? 'bg-white/10 text-white shadow-lg border border-white/5'
                  : 'text-purple-200/60 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div>
            <a
              href="#testar"
              className="bg-gradient-primary hover:opacity-90 text-black px-4 sm:px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all shadow-lg shadow-primary-neon/25 whitespace-nowrap"
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none">
        <div className="absolute inset-0 bg-blue-900/20 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20 w-fit text-xs font-medium text-purple-300 mb-8 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CONHEÇA SUA NOVA RECEPCIONISTA DIGITAL</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6 text-white pt-2">
                Pare de perder vendas porque seu <span className="text-gradient">WhatsApp</span> demora para responder.
              </h1>

              <p className="text-lg sm:text-xl text-purple-100/70 mb-10 leading-relaxed max-w-2xl font-light">
                Conheça o AceleraAssistente: sua atendente virtual 100% personalizável. Ela atende em segundos, tira dúvidas sobre seus serviços e agenda compromissos diretamente no seu Google Calendar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-2">
                <a
                  href="#testar"
                  className="bg-gradient-primary hover:scale-[1.02] hover:shadow-primary-neon/40 text-black px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-xl shadow-primary-neon/20 flex items-center justify-center gap-2 group"
                >
                  Conhecer o AceleraAssistente na prática
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
              className="relative w-full bg-[#1A1025]/60 backdrop-blur-xl p-6 rounded-3xl border border-purple-500/20 shadow-2xl shadow-purple-900/50"
            >
              <div className="flex flex-col gap-5">
                {/* User Message 1 */}
                <div className="flex gap-3 items-end">
                  <div className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center flex-shrink-0 border border-white/5">
                    <User className="w-4 h-4 text-slate-300" />
                  </div>
                  <div className="bg-slate-800/80 border border-white/5 p-3 rounded-2xl rounded-bl-sm text-sm leading-relaxed text-slate-200 shadow-sm max-w-[85%]">
                    "Quero agendar um horário amanhã à tarde."
                  </div>
                </div>

                {/* AceleraAssistente Message 1 */}
                <div className="flex gap-3 items-end justify-end">
                  <div className="bg-gradient-to-br from-blue-950/60 to-purple-950/60 border border-blue-500/20 p-3 rounded-2xl rounded-br-sm text-sm leading-relaxed text-blue-50 shadow-sm max-w-[85%]">
                    "Olá! Tenho horários às 14h e 16h30. Qual prefere?"
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex-shrink-0 shadow-lg shadow-primary-neon/30 flex items-center justify-center font-bold text-black text-sm border border-white/20">
                    A
                  </div>
                </div>

                {/* User Message 2 */}
                <div className="flex gap-3 items-end">
                  <div className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center flex-shrink-0 border border-white/5">
                    <User className="w-4 h-4 text-slate-300" />
                  </div>
                  <div className="bg-slate-800/80 border border-white/5 p-3 rounded-2xl rounded-bl-sm text-sm leading-relaxed text-slate-200 shadow-sm max-w-[85%]">
                    "Às 14h, por favor."
                  </div>
                </div>

                {/* AceleraAssistente Message 2 */}
                <div className="flex gap-3 items-end justify-end">
                  <div className="bg-gradient-to-br from-blue-950/60 to-purple-950/60 border border-blue-500/20 p-3 rounded-2xl rounded-br-sm text-sm leading-relaxed text-blue-50 shadow-sm max-w-[85%]">
                    "Agendado! Já adicionei na agenda do Google da clínica. Posso ajudar com mais algo?"
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex-shrink-0 shadow-lg shadow-primary-neon/30 flex items-center justify-center font-bold text-black text-sm border border-white/20">
                    A
                  </div>
                </div>

                {/* Notification Card */}
                <div className="mt-2 p-3 bg-[#1A1025]/80 rounded-2xl border-l-4 border-violet-500 border-t border-r border-b border-white/5 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 flex items-start gap-3">
                    <div className="bg-violet-500/20 p-2 rounded-lg">
                      <Calendar className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                        <span className="text-lg">📅</span> Novo Agendamento: Maria
                      </p>
                      <p className="text-xs text-purple-200/60 mt-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Status: Salvo no Google Calendar.
                      </p>
                    </div>
                  </div>
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
      icon: <Calendar className="w-5 h-5 text-green-400" />,
      title: "Integração Google Agenda",
      description: "O AceleraAssistente tem acesso em tempo real à sua disponibilidade e salva os agendamentos direto no seu calendário."
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
            Chatbots tradicionais irritam seus clientes. <br className="hidden sm:block" />
            <span className="text-gradient">O AceleraAssistente é diferente.</span>
          </h2>
          <p className="text-base text-purple-100/60 leading-relaxed font-light">
            Totalmente moldável ao seu negócio, o AceleraAssistente usa linguagem natural para conversar, entender a real necessidade e filtrar curiosos, com a mesma educação de um humano.
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
              className="glass-card p-6 sm:p-8 border-2 border-white/10 hover:border-primary-cyan/40 transition-all duration-300 shadow-xl"
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
    { num: "03.", title: "Agendamos", desc: "A IA assume o atendimento, esclarece dúvidas e marca os horários direto na sua agenda." }
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
              className="flex flex-col text-center sm:text-left sm:items-start items-center glass-card p-6 border-2 border-white/10 shadow-xl"
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
          <h2 className="text-3xl font-bold text-white mb-4">Escolha o plano ideal para você</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto pt-4 lg:pt-0">
          {/* Card 1: Página Essencial */}
          <div className="glass-card flex flex-col p-8 border-2 border-white/5 hover:border-blue-500/30 transition-colors shadow-xl bg-[#1A1025]/40 h-full">
            <h3 className="text-2xl font-bold text-white mb-2">Página Essencial</h3>
            <p className="text-purple-300 text-sm font-medium mb-6">Apenas a vitrine digital do seu negócio.</p>

            <div className="mb-6 flex-1">
              <p className="text-sm font-bold text-white mb-4">O que está incluso:</p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-300 text-sm items-start">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Landing Page de alta conversão.</span>
                </li>
                <li className="flex gap-3 text-slate-300 text-sm items-start">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Design focado no seu negócio.</span>
                </li>
                <li className="flex gap-3 text-slate-300 text-sm items-start">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Otimizada para carregar rápido.</span>
                </li>
                <li className="flex gap-3 text-slate-300 text-sm items-start">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Botão direto para seu WhatsApp atual.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-slate-400 text-sm">Implantação:</span>
                <span className="text-white font-bold">R$ 497</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-extrabold text-white">R$ 99</span>
                <span className="text-slate-400 text-xs mb-1.5">/mês</span>
              </div>
            </div>

            <a
              href="#"
              className="block w-full text-center bg-transparent border border-blue-500 hover:bg-blue-500/10 text-blue-400 py-4 rounded-xl font-bold text-sm transition-all"
            >
              Quero meu site
            </a>
          </div>

          {/* Card 2: AceleraAssistente Essencial */}
          <div className="glass-card flex flex-col p-8 border-2 border-white/5 hover:border-blue-500/30 transition-colors shadow-xl bg-[#1A1025]/40 h-full">
            <h3 className="text-2xl font-bold text-white mb-2">AceleraAssistente Essencial</h3>
            <p className="text-purple-300 text-sm font-medium mb-6">A sua nova recepcionista no WhatsApp.</p>

            <div className="mb-6 flex-1">
              <p className="text-sm font-bold text-white mb-4">O que está incluso:</p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-300 text-sm items-start">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>IA de vendas humanizada.</span>
                </li>
                <li className="flex gap-3 text-slate-300 text-sm items-start">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Atendimento de dúvidas frequentes.</span>
                </li>
                <li className="flex gap-3 text-slate-300 text-sm items-start">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Integração simples via QR Code.</span>
                </li>
                <li className="flex gap-3 text-slate-300 text-sm items-start">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Sincronização com Google Calendar.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-slate-400 text-sm">Implantação:</span>
                <span className="text-white font-bold">R$ 697 </span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-extrabold text-white">R$ 197</span>
                <span className="text-slate-400 text-xs mb-1.5">/mês</span>
              </div>
            </div>

            <a
              href="#"
              className="block w-full text-center bg-transparent border border-blue-500 hover:bg-blue-500/10 text-blue-400 py-4 rounded-xl font-bold text-sm transition-all"
            >
              Quero o AceleraAssistente no meu WhatsApp
            </a>
          </div>

          {/* Card 3: AceleraAssistente 360º */}
          <div className="glass-card flex flex-col p-8 border-2 border-blue-500 hover:border-blue-400 transition-colors shadow-2xl shadow-blue-500/20 relative bg-[#1A1025]/80 h-full lg:scale-105">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-black text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wider shadow-lg shadow-primary-neon/20 whitespace-nowrap border border-white/10">
              Melhor Custo-Benefício
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 pt-2">AceleraAssistente 360º</h3>
            <p className="text-blue-300 text-sm font-medium mb-6">Atendimento no WhatsApp + Site focado em vendas.</p>

            <div className="mb-6 flex-1">
              <p className="text-sm font-bold text-white mb-4">O que está incluso:</p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-white text-sm font-semibold p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 items-start">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Tudo do AceleraAssistente Essencial +</span>
                </li>
                <li className="flex gap-3 text-white text-sm font-semibold p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 items-start">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Tudo da Página Essencial +</span>
                </li>
                <li className="flex gap-3 text-slate-300 text-sm items-start">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Otimização para receber anúncios (Google/Meta).</span>
                </li>
                <li className="flex gap-3 text-slate-300 text-sm items-start">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Setup prioritário.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-slate-400 text-sm">Implantação:</span>
                <span className="text-white font-bold">R$ 997 </span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-extrabold text-white">R$ 297 </span>
                <span className="text-slate-400 text-xs mb-1.5">/mês</span>
              </div>
            </div>

            <a
              href="#"
              className="block w-full text-center bg-gradient-primary hover:opacity-90 text-black py-4 rounded-full font-bold text-sm transition-all shadow-lg shadow-primary-neon/20"
            >
              Quero a Solução Completa
            </a>
          </div>
        </div>

        <div className="mt-16 text-center text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-center gap-3 max-w-3xl mx-auto glass p-6 rounded-2xl border border-white/5">
          <Zap className="w-6 h-6 text-blue-500 shrink-0" />
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
            <span className="font-bold text-sm text-white tracking-tight">AceleraAssistente</span>
            <p className="text-[10px] uppercase tracking-widest mt-1 text-slate-500">© {new Date().getFullYear()} AceleraAssistente</p>
            <p className="text-[10px] text-slate-500">Tecnologia para negócios locais</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold text-white">Pricing</p>
            <p className="text-[10px] text-slate-400">Planos de Automação e Sites</p>
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
