import React from 'react';
import { ArrowUpRight, Search, Zap } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

export default function FinalCTA({ onExploreClick, onDiagnosticClick }) {
  return (
    <section className="py-28 relative bg-[#15071e] overflow-hidden border-b border-[#321847]">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#f15153]/[0.06] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute left-1/3 top-1/3 w-[500px] h-[300px] bg-[#321847]/[0.4] blur-[150px] pointer-events-none rounded-full" />

      <div className="section-container text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#f15153] uppercase tracking-widest px-3 py-1 border border-[#f15153]/50 bg-[#f15153]/10">
          <Zap className="w-3.5 h-3.5" />
          <span>HUMAN POTENTIAL UNBOUND</span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
          DISCOVER WHAT TECHNOLOGY <br />
          <span className="text-[#f15153]" style={{ textShadow: '0 0 25px rgba(241,81,83,0.45)' }}>
            CAN MAKE POSSIBLE.
          </span>
        </h2>

        <p className="font-sans text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you are exploring assistive bionics for yourself, a family member, or looking to 
          collaborate as a biomedical innovator, your journey begins with SYNORA.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button
            onClick={() => {
              cyberAudio.playClick();
              onExploreClick();
            }}
            onMouseEnter={() => cyberAudio.playHover()}
            className="px-8 py-4 bg-[#f15153] hover:bg-[#ff686a] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(241,81,83,0.45)] cursor-pointer"
          >
            <span>EXPLORE ALL TECHNOLOGIES</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              cyberAudio.playClick();
              onDiagnosticClick();
            }}
            onMouseEnter={() => cyberAudio.playHover()}
            className="px-8 py-4 border border-[#321847] hover:border-[#f15153] bg-[#321847] hover:bg-[#462263] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-[0_4px_20px_rgba(50,24,71,0.6)]"
          >
            <Search className="w-3.5 h-3.5 text-[#f15153]" />
            <span>FIND A SOLUTION (GUIDED)</span>
          </button>
        </div>

        <div className="pt-6 font-mono text-xs text-slate-400">
          // ZERO SPONSORED BIAS. FULLY INDEPENDENT CLINICAL VALIDATION.
        </div>

      </div>
    </section>
  );
}
