
import React, { useState, useRef } from 'react';
import emailjs from 'https://esm.sh/@emailjs/browser';
import Navbar from './components/Navbar';
import SectionWrapper from './components/SectionWrapper';
import meImage from './assets/me.jpeg';
import resumePdf from './assets/Muganza Ainda 09.02.2026 (EN).pdf';
import { CORE_VALUES, EXPERIENCE, TECH_STACK, LANGUAGES, INTERESTS, CASE_STUDIES } from './constants';
import { 
  Send, MapPin, Linkedin, Mail, Download, ExternalLink, ChevronDown, CheckCircle2, 
  Globe, ArrowRight, ShieldCheck, Zap, BarChart3, Target, Activity, LayoutGrid, 
  Shield, Workflow, TrendingUp, Languages as LanguageIcon, Briefcase, MessageSquare,
  Clock, Check, Facebook, Twitter, Instagram, Trophy, Dumbbell, Book, Waves,
  FileSpreadsheet, ClipboardCheck, Lock, Globe2, Landmark, Compass, Binary,
  Cpu, ZapOff, Network, Building2, Truck, Rocket, ShieldAlert, SearchCheck, History,
  ShieldPlus, Verified, Radio, Database, CloudCog, Map as MapIcon, Landmark as RegionIcon,
  Phone, AlertCircle, Loader2
} from 'lucide-react';

const App: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [downloadHovered, setDownloadHovered] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Honeypot check
    const formData = new FormData(formRef.current);
    if (formData.get('website')) {
      // If honeypot is filled, silently ignore
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // NOTE: User to fill in these credentials
      const SERVICE_ID = 'YOUR_SERVICE_ID';
      const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
      const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      setIsSubmitted(true);
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError('An error occurred while transmitting your request. Please try again or contact me directly via LinkedIn.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTechIcon = (category: string) => {
    switch (category) {
      case 'Financial Administration': return <FileSpreadsheet className="w-5 h-5 text-emerald" />;
      case 'Project Coordination': return <Workflow className="w-5 h-5 text-emerald" />;
      case 'Information Security': return <Lock className="w-5 h-5 text-emerald" />;
      case 'Global Partnerships': return <Globe2 className="w-5 h-5 text-emerald" />;
      default: return <Zap className="w-5 h-5 text-emerald" />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-emerald selection:text-white bg-off-white font-body text-slate">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center bg-navy pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald/[0.03] -skew-x-12 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            <div className="animate-fade-in space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3">
                  <span className="h-[2px] w-6 bg-emerald"></span>
                  <p className="text-emerald font-black text-[10px] uppercase tracking-[0.4em]">Operations Consultant</p>
                </div>
                
                <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight text-white max-w-xl">
                  Optimizing the <br /> 
                  Infrastructure of <span className="text-emerald italic text-shadow-glow">Success.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-lg">
                  I am your <span className="text-white font-semibold">Strategic Operations Partner</span>, managing the complexities of your business so you can focus on scaling. From financial governance to global project synchronization, I provide the foundation for excellence.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 items-center pt-2">
                <a href="#experience" className="group px-8 py-4 bg-emerald text-navy font-bold uppercase text-[10px] tracking-widest transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-lg shadow-emerald/20 flex items-center gap-3">
                  View Strategic Impact <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="text-white/40 hover:text-white transition-colors font-black uppercase text-[9px] tracking-[0.3em] flex items-center gap-3">
                  Request Briefing <div className="w-6 h-[1px] bg-white/10"></div>
                </a>
              </div>

              <div className="pt-10 grid grid-cols-3 gap-6 border-t border-white/5 max-w-md">
                {[
                  { label: 'Integrity', val: 'Audit-Ready' },
                  { label: 'Language', val: 'FR / EN / SW' },
                  { label: 'Velocity', val: 'Lean Ops' },
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-[8px] font-black uppercase tracking-widest text-emerald/50">{stat.label}</p>
                    <p className="text-white/80 font-bold text-[11px] uppercase tracking-tight">{stat.val}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2 flex justify-center">
              <div className="relative group w-full max-w-sm">
                <div className="absolute -top-4 -left-4 z-20 bg-white p-4 shadow-xl border-l-4 border-emerald animate-float-slow hidden sm:block">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-emerald" size={18} />
                    <span className="text-[10px] font-black uppercase text-navy tracking-widest">Accuracy Expert</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 z-20 bg-navy border border-white/10 p-4 shadow-xl animate-float-delayed hidden sm:block">
                  <div className="flex items-center gap-3">
                    <Globe className="text-emerald" size={18} />
                    <span className="text-[10px] font-black uppercase text-white tracking-widest">Global Support</span>
                  </div>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden border border-white/5 bg-navy shadow-2xl">
                  <img 
                    src={meImage} 
                    alt="Mike Muganza" 
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover grayscale brightness-90 contrast-110 hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 backdrop-blur-md bg-white/5 border border-white/10">
                     <p className="text-white/80 text-[11px] font-light leading-snug italic">
                       "Precision is not an act, but a standard."
                     </p>
                  </div>
                </div>
                <div className="absolute -inset-4 border border-white/5 -z-10 translate-x-2 translate-y-2 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
           <span className="text-[7px] font-black uppercase tracking-[0.8em] text-white/20 animate-pulse">Scroll Down</span>
           <div className="w-[1px] h-8 bg-gradient-to-b from-emerald/40 to-transparent"></div>
        </div>
      </section>

      {/* Operational Pillars */}
      <SectionWrapper id="services" title="Operational Pillars" className="bg-white py-32">
        <div className="mb-20 grid lg:grid-cols-[1fr_auto_1fr] items-center gap-12">
           <p className="text-slate/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
             I concentrate on three strategic domains to ensure your operations are consistently <span className="text-navy font-semibold underline decoration-emerald/30 decoration-2 underline-offset-4">audit-resilient</span> and <span className="text-navy font-semibold underline decoration-emerald/30 decoration-2 underline-offset-4">optimized for scale</span>.
           </p>
           <div className="hidden lg:block w-px h-12 bg-navy/10"></div>
           <div className="flex gap-8 items-center">
              <div className="flex flex-col">
                 <span className="text-emerald font-black text-3xl heading-font leading-none">03</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-navy/30">Strategic Areas</span>
              </div>
              <div className="flex flex-col">
                 <span className="text-navy font-black text-3xl heading-font leading-none">High</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-navy/30">Impact</span>
              </div>
           </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-navy/5 border border-navy/5 shadow-sm">
          {CORE_VALUES.map((val, idx) => (
            <div key={idx} className="group relative bg-white p-10 lg:p-14 flex flex-col transition-all duration-500 hover:bg-off-white">
              <div className="mb-10">
                <div className="w-12 h-12 bg-navy flex items-center justify-center text-emerald mb-6 rounded-sm shadow-lg group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h3 className="heading-font text-xl font-black uppercase text-navy tracking-tight group-hover:text-emerald transition-colors">
                  {val.title}
                </h3>
              </div>
              <div className="flex-1 mb-10">
                <p className="text-slate/70 text-sm font-light leading-relaxed">
                  {val.description}
                </p>
              </div>
              <div className="pt-8 border-t border-navy/5">
                 <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-navy/30">
                    <span>Target</span>
                    <span className="text-navy font-black tracking-tight">{val.outcome || 'Peak Performance'}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Who I Partner With */}
      <SectionWrapper id="partners" title="Who I Partner With" className="bg-off-white py-32">
        <div className="grid lg:grid-cols-12 grid-rows-2 gap-6 h-auto lg:h-[600px]">
          {/* Main Card: International NGOs */}
          <div className="lg:col-span-8 lg:row-span-2 group relative bg-white border border-navy/5 overflow-hidden flex flex-col shadow-sm transition-all duration-500 hover:shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
              <Landmark size={200} />
            </div>
            <div className="p-10 lg:p-16 relative z-10 flex-1 flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-navy flex items-center justify-center text-emerald rounded-sm group-hover:rotate-6 transition-transform">
                  <Landmark size={32} />
                </div>
                <div>
                  <h3 className="heading-font text-2xl lg:text-3xl font-black uppercase text-navy tracking-tight">International NGOs</h3>
                  <p className="text-emerald font-black text-[10px] uppercase tracking-[0.4em]">Grant Compliance & Donor Relations</p>
                </div>
              </div>
              <div className="max-w-2xl space-y-6">
                <p className="text-slate/60 text-lg font-light leading-relaxed">
                  I support global humanitarian missions by ensuring every donor cent is accounted for. My trilingual capability enables seamless correspondence between field offices and headquarters.
                </p>
                <div className="grid md:grid-cols-2 gap-6 pt-6">
                  {[
                    { label: 'Fiscal Rigor', desc: 'Meticulous grant tracking for zero leakage.' },
                    { label: 'Multilingual Support', desc: 'Liaison in English, French, and Swahili.' }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 w-1 h-full bg-emerald/20"></div>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-navy mb-1">{feat.label}</p>
                        <p className="text-slate/50 text-[11px] font-medium leading-tight">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-auto h-2 w-full bg-off-white overflow-hidden">
               <div className="h-full bg-emerald w-0 group-hover:w-full transition-all duration-[2000ms] ease-out"></div>
            </div>
          </div>

          {/* Side Card 1: Tech Startups */}
          <div className="lg:col-span-4 lg:row-span-1 group relative bg-navy text-white p-10 flex flex-col justify-between overflow-hidden border border-white/5 transition-all duration-500 hover:bg-navy/95">
            <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:rotate-12 transition-transform">
              <Rocket size={120} />
            </div>
            <div>
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-emerald mb-6">
                <Rocket size={20} />
              </div>
              <h3 className="heading-font text-xl font-black uppercase tracking-tight mb-2">Tech Startups</h3>
              <p className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-4">Systems Architecture</p>
              <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                Building the remote ops infrastructure that powers scaling companies.
              </p>
            </div>
            <div className="flex items-center gap-3 text-emerald/60">
              <Radio size={12} className="animate-pulse" />
              <span className="text-[8px] font-black uppercase tracking-widest">Growth Enabled</span>
            </div>
          </div>

          {/* Side Card 2: Logistics */}
          <div className="lg:col-span-4 lg:row-span-1 group relative bg-white p-10 flex flex-col justify-between overflow-hidden border border-navy/5 transition-all duration-500 hover:border-emerald/30">
            <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:scale-110 transition-transform">
              <Building2 size={120} />
            </div>
            <div>
              <div className="w-12 h-12 bg-off-white flex items-center justify-center text-navy group-hover:text-emerald transition-colors mb-6">
                <Building2 size={20} />
              </div>
              <h3 className="heading-font text-xl font-black uppercase tracking-tight mb-2 text-navy">Construction</h3>
              <p className="text-emerald font-black text-[9px] uppercase tracking-widest mb-4">Field-to-Finance</p>
              <p className="text-slate/60 text-sm font-light leading-relaxed">
                Coordinating technical on-site ops with back-office accounting rigor.
              </p>
            </div>
            <div className="flex items-center gap-3 text-navy/20">
              <Verified size={12} />
              <span className="text-[8px] font-black uppercase tracking-widest">Operational Sync</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Audit-Ready Standard */}
      <section className="relative py-32 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald/50 to-transparent"></div>
        
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="w-full h-[30vh] bg-gradient-to-b from-emerald/0 via-emerald/[0.03] to-emerald/0 absolute top-[-30vh] animate-[scan_8s_linear_infinite]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Shield Visual */}
            <div className="lg:w-1/3 w-full relative group">
              <div className="relative aspect-square max-w-[320px] mx-auto flex items-center justify-center border border-white/5 bg-white/[0.02] backdrop-blur-xl">
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-emerald"></div>
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-emerald"></div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-emerald"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-emerald"></div>

                <div className="flex flex-col items-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-emerald/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
                    <ShieldCheck size={80} className="text-emerald relative z-10 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                  </div>
                  <div className="text-center space-y-1">
                    <div className="flex items-center gap-2 justify-center mb-2">
                      <div className="w-2 h-2 bg-emerald rounded-full animate-ping"></div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald">System Secure</span>
                    </div>
                    <p className="heading-font text-3xl font-black uppercase tracking-widest text-white leading-none">100%</p>
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/30">Verification Protocol</p>
                  </div>
                </div>

                <div className="absolute inset-4 border border-dashed border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
              </div>
            </div>

            {/* Value Statement */}
            <div className="lg:w-2/3 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-4 py-2 px-4 bg-emerald/5 border border-emerald/20">
                  <ShieldPlus size={16} className="text-emerald" />
                  <span className="text-emerald font-black text-[10px] uppercase tracking-[0.4em]">Audit-Ready Standard</span>
                </div>
                <h3 className="heading-font text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tighter">
                  "I don't just organize files; <br /> I build <span className="text-emerald italic">defense.</span>"
                </h3>
                <p className="text-white/50 text-xl font-light leading-relaxed max-w-2xl italic border-l-2 border-white/10 pl-8">
                  My systems ensure that whether it’s a tax review, a donor audit, or a project post-mortem, every receipt, contract, and communication is <span className="text-white font-semibold">100% verifiable</span> and <span className="text-emerald font-semibold">instantly retrievable.</span>
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
                {[
                  { title: 'Total Verifiability', icon: <SearchCheck size={20} />, desc: 'Immutable proof for every corporate transaction.' },
                  { title: 'Instant Retrieval', icon: <CloudCog size={20} />, desc: 'High-speed cloud archival for rapid institutional recall.' },
                  { title: 'Strategic Shield', icon: <Shield size={20} />, desc: 'Pre-emptive risk management for institutional security.' }
                ].map((point, idx) => (
                  <div key={idx} className="p-8 group hover:bg-white/[0.03] transition-all duration-300">
                    <div className="text-emerald mb-4 group-hover:scale-110 transition-transform origin-left">{point.icon}</div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-white group-hover:text-emerald transition-colors mb-2">{point.title}</h4>
                    <p className="text-white/30 text-[11px] font-medium leading-relaxed">{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Impact */}
      <SectionWrapper id="experience" title="Professional Impact" dark className="py-32 overflow-visible">
        <div className="relative pt-8">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block"></div>
          <div className="space-y-32">
            {EXPERIENCE.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative group">
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-navy border border-emerald rounded-full -translate-x-1/2 z-10 group-hover:scale-150 transition-transform hidden md:block"></div>
                  <div className={`grid md:grid-cols-2 gap-8 md:gap-24 items-start ${isEven ? '' : 'md:flex-row-reverse'}`}>
                    <div className={`${isEven ? 'md:text-right' : 'md:order-2 md:text-left'} pl-8 md:pl-0`}>
                      <span className="inline-block text-emerald font-black text-[10px] tracking-[0.4em] uppercase mb-4 py-1 px-3 border border-emerald/20">
                        {exp.period}
                      </span>
                      <h3 className="heading-font text-2xl md:text-4xl font-black uppercase tracking-tight mb-2 text-white">
                        {exp.role}
                      </h3>
                      <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-[11px] mb-6">{exp.company}</p>
                    </div>
                    <div className={`${isEven ? 'md:order-2' : 'md:order-1'} relative`}>
                      <div className="space-y-4">
                        {exp.description.map((bullet, bIdx) => (
                          <div key={bIdx} className="relative pl-6 py-3 border-l border-white/5 hover:border-emerald transition-all duration-300">
                            <p className="text-white/60 leading-relaxed font-light text-base">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Proven Outcomes */}
      <SectionWrapper id="case-studies" title="Proven Outcomes" className="bg-white py-32">
        <div className="space-y-32">
          {CASE_STUDIES.map((study, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="relative group overflow-hidden border border-navy/5 shadow-sm">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                  <div className="lg:w-1/2 relative min-h-[450px] overflow-hidden bg-navy/5">
                    <img 
                      src={study.image} 
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 z-10" 
                      alt={study.title} 
                    />
                    <div className="absolute inset-0 bg-navy/20 z-20 transition-opacity group-hover:opacity-0"></div>
                  </div>
                  <div className="lg:w-1/2 p-10 md:p-14 bg-white flex flex-col justify-center">
                    <div className="mb-4">
                       <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald">{study.category}</span>
                    </div>
                    <h3 className="heading-font text-3xl font-black uppercase mb-8 text-navy tracking-tight">
                      {study.title}
                    </h3>
                    <div className="space-y-6 mb-10">
                      <div className="relative pl-4 border-l-2 border-emerald/20">
                        <p className="text-[8px] font-black uppercase tracking-widest text-emerald mb-1">Challenge</p>
                        <p className="text-slate/70 text-sm font-light leading-relaxed italic">"{study.problem}"</p>
                      </div>
                      <div className="relative pl-4 border-l-2 border-navy/10">
                        <p className="text-[8px] font-black uppercase tracking-widest text-navy mb-1">Strategic Response</p>
                        <p className="text-slate text-sm font-medium leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                    
                    {/* DATA CALLOUTS - VISUAL WEIGHT INCREASED */}
                    <div className="grid grid-cols-2 gap-4">
                       {study.metrics.map((metric, mIdx) => (
                         <div key={mIdx} className="bg-navy p-10 flex flex-col justify-center items-center text-center border-b-8 border-emerald group-hover:translate-y-[-8px] transition-transform duration-500 shadow-xl shadow-navy/20">
                            <p className="text-white/40 text-[8px] font-black uppercase tracking-[0.4em] mb-4">{metric.label}</p>
                            <p className="text-5xl md:text-6xl font-black text-emerald heading-font leading-none tracking-tighter">{metric.value}</p>
                         </div>
                       ))}
                       <div className={`${study.metrics.length === 1 ? 'col-span-1' : 'col-span-2'} bg-off-white p-8 border border-navy/5 flex items-center`}>
                          <div className="flex-1">
                             <p className="text-navy/30 text-[8px] font-black uppercase tracking-[0.3em] mb-2">Final Operational Result</p>
                             <p className="text-navy text-sm font-medium leading-relaxed">{study.result}</p>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Systems Architecture */}
      <SectionWrapper id="tech" title="Systems Architecture" className="bg-off-white py-32">
        <div className="mb-16 max-w-xl">
           <p className="text-slate/60 text-lg font-light leading-relaxed">
             I leverage enterprise-grade technologies to maintain the highest standards of financial integrity and project velocity.
           </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECH_STACK.map((tech, idx) => (
            <div key={idx} className="bg-white p-8 flex flex-col border border-navy/5 hover:border-emerald transition-all duration-300 group">
              <div className="mb-8">
                <div className="mb-4 p-3 inline-block bg-off-white text-navy group-hover:bg-navy group-hover:text-emerald transition-colors rounded-sm">
                  {getTechIcon(tech.category)}
                </div>
                <h3 className="heading-font text-base font-black uppercase text-navy tracking-tight">
                  {tech.category}
                </h3>
              </div>
              <div className="space-y-2 mb-8 flex-1">
                {tech.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex items-center gap-2 group/item">
                    <div className="w-1 h-[1px] bg-emerald"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate/80">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-navy/5">
                <p className="text-slate/70 text-[11px] font-medium leading-relaxed italic">
                  {tech.advantage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Borderless Liaison */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-2/5 space-y-8">
              <div className="inline-flex items-center gap-3">
                <div className="w-8 h-[1px] bg-emerald"></div>
                <span className="text-emerald font-black text-[10px] uppercase tracking-[0.5em]">Linguistic Edge</span>
              </div>
              <h2 className="heading-font text-4xl lg:text-5xl font-black uppercase text-white leading-tight">
                Borderless <br /> <span className="text-emerald">Liaison.</span>
              </h2>
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm">
                Communication is the primary vehicle for <span className="text-white font-medium">market access</span>. I act as your cultural and technical architect across three major global regions.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/5">
                <div>
                  <p className="text-emerald font-black text-2xl heading-font mb-1">03</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/30">Native/Fluent</p>
                </div>
                <div>
                  <p className="text-emerald font-black text-2xl heading-font mb-1">24/7</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/30">Synchronization</p>
                </div>
              </div>
            </div>

            {/* Language Cards with Watermarks */}
            <div className="lg:w-3/5 w-full space-y-4">
              {LANGUAGES.map((lang, idx) => (
                <div key={idx} className="group relative flex flex-col md:flex-row items-center gap-6 p-8 bg-white/[0.02] border border-white/5 transition-all duration-500 hover:bg-white/[0.04] hover:border-emerald/30 overflow-hidden">
                  <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                     {lang.name === 'French' ? <RegionIcon size={180} /> : lang.name === 'English' ? <Globe size={180} /> : <MapIcon size={180} />}
                  </div>

                  <div className="shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center heading-font text-2xl font-black text-white group-hover:text-emerald transition-colors">
                      {lang.name.charAt(0)}
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald rounded-full border-2 border-navy"></div>
                  </div>

                  <div className="flex-1 space-y-2 text-center md:text-left relative z-10">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                      <h3 className="heading-font text-xl font-bold uppercase text-white tracking-tight">{lang.name}</h3>
                      <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/40 text-[8px] font-black uppercase tracking-widest rounded-sm">
                        {lang.level}
                      </span>
                    </div>
                    <p className="text-white/50 text-[11px] font-medium uppercase tracking-widest">{lang.description}</p>
                    <div className="inline-flex items-center gap-2 mt-2 px-2 py-1 bg-emerald/10 border border-emerald/20 rounded-sm">
                       <Globe size={10} className="text-emerald" />
                       <span className="text-[8px] font-black uppercase tracking-widest text-emerald">{lang.geographicReach}</span>
                    </div>
                  </div>

                  <div className="shrink-0 md:w-48 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-white/5 md:pl-6 text-center md:text-left relative z-10">
                    <p className="text-[8px] font-black uppercase text-emerald/60 tracking-widest mb-1">Strategic Utility</p>
                    <p className="text-white/80 text-[10px] font-bold uppercase tracking-tight">
                      {lang.name === 'French' ? 'European Liaison' : 
                       lang.name === 'English' ? 'Global Strategy' : 
                       'Regional Logistics'}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[1px] bg-emerald/10 w-full">
                    <div 
                      className="h-full bg-emerald transition-all duration-1000 group-hover:w-full"
                      style={{ width: lang.level === 'Native' ? '100%' : '85%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Engagement (Contact) */}
      <SectionWrapper id="contact" title="Strategic Engagement" className="bg-off-white py-48 overflow-hidden">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-0 shadow-2xl border border-navy/5 overflow-hidden bg-white">
          <div className="bg-navy p-10 lg:p-20 text-white relative">
            <div className="relative z-10">
              <h3 className="heading-font text-3xl font-black uppercase mb-8 tracking-tight leading-tight">
                Enhance your <br /> <span className="text-emerald italic">Operational Capacity.</span>
              </h3>
              <p className="text-white/50 text-base font-light leading-relaxed mb-12 max-w-xs">
                I am ready to integrate with your team. Specify your requirements and let's engineer a solution.
              </p>
              <div className="space-y-10">
                {[
                  { icon: <Mail size={16} />, label: 'Email', value: 'mikemuganza@gmail.com', href: 'mailto:mikemuganza@gmail.com' },
                  { icon: <Linkedin size={16} />, label: 'Linkedin', value: '@muganza-ainda-271a05275', href: 'https://www.linkedin.com/in/muganza-ainda-271a05275' },
                  { icon: <MapPin size={16} />, label: 'Base', value: 'Kampala, Uganda', href: null },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 group">
                    <div className="p-4 bg-white/5 border border-white/10 text-emerald group-hover:bg-emerald group-hover:text-navy transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target={item.label === 'Linkedin' ? "_blank" : undefined} rel="noopener noreferrer" className="text-white text-sm font-bold tracking-tight hover:text-emerald transition-colors underline decoration-white/10 underline-offset-8">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-bold tracking-tight">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-10 lg:p-20 flex flex-col justify-center bg-white relative">
            {!isSubmitted ? (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
                {/* Honeypot field */}
                <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-navy">Professional Name</label>
                    <input required name="user_name" type="text" className="w-full bg-off-white border-b-2 border-navy/5 py-4 px-5 text-sm text-navy focus:outline-none focus:border-emerald transition-all placeholder:text-navy/20" placeholder="Full Name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-navy">Corporate Email</label>
                    <input required name="user_email" type="email" className="w-full bg-off-white border-b-2 border-navy/5 py-4 px-5 text-sm text-navy focus:outline-none focus:border-emerald transition-all placeholder:text-navy/20" placeholder="Email Address" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy">Phone Number <span className="text-navy/30 font-light lowercase">(Optional)</span></label>
                  <div className="relative">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-navy/20">
                      <Phone size={14} />
                    </div>
                    <input name="user_phone" type="tel" className="w-full bg-off-white border-b-2 border-navy/5 py-4 pl-12 pr-5 text-sm text-navy focus:outline-none focus:border-emerald transition-all placeholder:text-navy/20" placeholder="+256 ..." />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy">Operational Requirements</label>
                  <textarea required name="message" rows={4} className="w-full bg-off-white border-b-2 border-navy/5 py-4 px-5 text-sm text-navy focus:outline-none focus:border-emerald transition-all resize-none placeholder:text-navy/20" placeholder="Detail your project or support needs..."></textarea>
                </div>

                {submitError && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 text-red-600 border border-red-100 animate-fade-in">
                    <AlertCircle size={18} />
                    <p className="text-xs font-medium">{submitError}</p>
                  </div>
                )}

                <button 
                  disabled={isSubmitting} 
                  className="group relative w-full py-5 bg-navy text-white font-black uppercase tracking-[0.2em] text-[11px] transition-all overflow-hidden flex items-center justify-center gap-4 hover:bg-emerald hover:text-navy shadow-2xl shadow-navy/10 hover:shadow-emerald/20 disabled:bg-navy/50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Transmitting Dossier...
                    </>
                  ) : (
                    <>
                      Initialize Engagement
                      <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-20 animate-fade-in">
                <div className="w-24 h-24 bg-emerald/10 text-emerald flex items-center justify-center mx-auto mb-10 rounded-full animate-float-slow">
                   <Check size={48} />
                </div>
                <h3 className="heading-font text-3xl font-black uppercase text-navy mb-6 tracking-tight">Transmission Successful.</h3>
                <p className="text-slate/60 text-base font-light leading-relaxed max-w-sm mx-auto mb-12">
                  Your inquiry has been successfully transmitted through the secure channel. I will review the technical requirements and respond within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="px-12 py-4 border-2 border-navy text-navy font-black uppercase tracking-widest text-[10px] hover:bg-navy hover:text-white transition-all shadow-lg active:scale-95"
                >
                  Return to Dashboard
                </button>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="bg-navy pt-24 pb-12 px-6 md:px-12 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1 space-y-6">
              <a href="#" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white flex items-center justify-center text-navy font-black text-xl heading-font">M</div>
                <span className="heading-font text-sm font-black text-white tracking-[0.2em] uppercase">Muganza<span className="text-emerald italic">.</span></span>
              </a>
              <p className="text-white/40 text-[11px] font-light leading-relaxed">Strategic operations architecture and financial governance for the modern enterprise.</p>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/muganza-ainda-271a05275' },
                  { icon: <Mail size={16} />, href: 'mailto:mikemuganza@gmail.com' }
                ].map((social, i) => (
                  <a key={i} href={social.href} target={social.href.startsWith('http') ? "_blank" : undefined} className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/30 hover:text-emerald hover:border-emerald transition-all group/icon">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="heading-font text-[9px] font-black uppercase text-emerald tracking-widest mb-6">Expertise</h4>
              <ul className="space-y-3">
                {[{ name: 'Operational Pillars', href: '#services' }, { name: 'Impact History', href: '#experience' }, { name: 'Direct Inquiry', href: '#contact' }].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/50 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="heading-font text-[9px] font-black uppercase text-emerald tracking-widest mb-6">Operations Base</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-white/20" />
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Kampala, Uganda</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={14} className="text-white/20" />
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Global Availability</p>
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] p-6 border border-white/5">
              <h4 className="heading-font text-[9px] font-black uppercase text-white tracking-widest mb-4">Credentials</h4>
              <p className="text-white/40 text-[9px] font-medium leading-relaxed mb-6 uppercase tracking-widest">Access my full professional profile and trilingual dossier.</p>
              <a
                href={resumePdf}
                download="Muganza-Ainda-Resume.pdf"
                onMouseEnter={() => setDownloadHovered(true)}
                onMouseLeave={() => setDownloadHovered(false)}
                className="w-full py-3 border border-emerald text-emerald font-black uppercase tracking-widest text-[8px] hover:bg-emerald hover:text-navy transition-all flex items-center justify-center gap-2 overflow-hidden relative"
                title="Get the full technical breakdown"
              >
                <span className={`transition-transform duration-300 ${downloadHovered ? '-translate-y-12' : 'translate-y-0'}`}>Download Briefing</span>
                <span className={`absolute transition-transform duration-300 ${downloadHovered ? 'translate-y-0' : 'translate-y-12'}`}>Get Technical Dossier</span>
                {!downloadHovered && <Download size={12} />}
              </a>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 text-center md:text-left">
            <p className="text-white/10 text-[8px] font-black uppercase tracking-[0.5em]">Mike Muganza &copy; {new Date().getFullYear()} — Strategic Operations & Governance</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
