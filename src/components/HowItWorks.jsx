import React, { useState } from 'react';
import { Search, Cpu, Users, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'DISCOVER BY CAPABILITY',
      subtitle: 'Identify Solutions Without Jargon',
      desc: 'Whether you know the technical terminology or simply want to describe a functional goal (such as restoring grip or independent walking), SYNORA parses biological requirements to reveal vetted hardware matches.',
      telemetry: 'PROTOCOL: INPUT_QUERY // NATURAL_LANGUAGE_PARSER',
      icon: Search,
    },
    {
      num: '02',
      title: 'INSPECT & UNDERSTAND',
      subtitle: 'Transparent Technical & Clinical Telemetry',
      desc: 'Access verified clinical trial phases, biocompatibility certifications, battery longevity, weight, and neural latency benchmarks before making any health decisions. No marketing fluff—only rigorous engineering data.',
      telemetry: 'PROTOCOL: CAD_VALIDATION // ISO_13485_VERIFIED',
      icon: Cpu,
    },
    {
      num: '03',
      title: 'CONNECT WITH PROVIDERS',
      subtitle: 'Direct Bridge to Innovators & Clinics',
      desc: 'SYNORA eliminates unnecessary middlemen. Once you identify the appropriate technology, connect directly with certified medical device providers, orthopedic surgeons, and clinical trial coordinators.',
      telemetry: 'PROTOCOL: SECURE_ROUTING // CLINICAL_LIAISON',
      icon: Users,
    },
  ];

  return (
    <section id="how-it-works-section" className="py-24 relative bg-[#220e33] border-b border-[#321847]">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#f15153] uppercase tracking-widest px-3 py-1 border border-[#f15153]/50 bg-[#f15153]/10">
            <span>THE SYNORA ECOSYSTEM PROTOCOL</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            HOW SYNORA ACCELERATES CONNECTION
          </h2>
          <p className="font-sans text-slate-200 text-sm sm:text-base">
            From initial functional diagnosis to physical clinical deployment in three transparent stages.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => {
                  cyberAudio.playClick();
                  setActiveStep(idx);
                }}
                onMouseEnter={() => cyberAudio.playHover()}
                className={`p-8 border transition-all cursor-pointer relative flex flex-col justify-between ${
                  isActive
                    ? 'border-[#f15153] bg-[#f15153]/[0.12] shadow-[0_0_20px_rgba(241,81,83,0.35)]'
                    : 'border-[#321847] bg-[#251236] hover:border-[#f15153]/50'
                }`}
              >
                {/* Top Corner Bracket */}
                <div className="absolute top-0 right-0 p-3 font-mono text-2xl font-black text-white/20">
                  {step.num}
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 border border-[#f15153]/50 bg-[#f15153]/15 flex items-center justify-center text-[#f15153]">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="font-mono text-xs text-[#f15153] tracking-wider uppercase mb-1 font-bold">
                      {step.subtitle}
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">
                      {step.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 font-mono text-[10px] text-slate-500">
                  {step.telemetry}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
