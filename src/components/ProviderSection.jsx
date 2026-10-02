import React from 'react';
import { Building2, ShieldCheck, Globe, Network, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

export default function ProviderSection({ onOpenProviderModal }) {
  return (
    <section id="providers-section" className="py-24 relative bg-[#190a25] border-b border-[#321847]">
      <div className="section-container">
        
        <div className="border border-[#321847] bg-[#251236] p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#f15153]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#f15153]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#f15153]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#f15153]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#f15153] uppercase tracking-widest px-3 py-1 border border-[#f15153]/50 bg-[#f15153]/10">
                <Building2 className="w-3.5 h-3.5" />
                <span>FOR MEDICAL DEVICE MANUFACTURERS & RESEARCH LABS</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                SHOWCASE YOUR TECHNOLOGY TO INDIVIDUALS WHO NEED IT MOST.
              </h2>

              <p className="font-sans text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl">
                SYNORA bridges the divide between biomedical engineering breakthroughs and real human adoption. 
                Whether you develop next-generation bionic prosthetics, brain-computer interfaces, or motorized exoskeletons, 
                our platform provides direct clinical discovery without intermediary distortion.
              </p>

              {/* Provider Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f15153] flex-shrink-0" />
                  <span>Direct qualified patient & clinician discovery</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f15153] flex-shrink-0" />
                  <span>ISO 13485 / MDR accreditation badge</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f15153] flex-shrink-0" />
                  <span>Global clinical trial participant matching</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f15153] flex-shrink-0" />
                  <span>Standardized CAD & telemetry spec indexing</span>
                </div>
              </div>

              {/* CTA Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    cyberAudio.playClick();
                    onOpenProviderModal();
                  }}
                  onMouseEnter={() => cyberAudio.playHover()}
                  className="px-8 py-4 bg-[#f15153] hover:bg-[#ff686a] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(241,81,83,0.45)] cursor-pointer"
                >
                  <span>BECOME A VERIFIED PROVIDER</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Card / Telemetry Verification Box */}
            <div className="lg:col-span-5 bg-[#1a0a27]/95 border border-[#321847] p-6 space-y-6">
              <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-white/10">
                <span className="text-[#f15153] font-bold">PROVIDER PORTAL STATUS</span>
                <span className="text-emerald-400 font-bold">INDEXING ACTIVE</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-300">Global Clinical Hubs:</span>
                  <span className="text-white font-bold">38 Institutions</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-300">Vetted Technologies:</span>
                  <span className="text-white font-bold">142 Systems</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-300">Average Onboarding Time:</span>
                  <span className="text-[#f15153] font-bold">48 Hours</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-300">Compliance Standards:</span>
                  <span className="text-slate-200">FDA 510(k), CE MDR, PMDA</span>
                </div>
              </div>

              <div className="p-3 bg-[#f15153]/10 border border-[#f15153]/30 text-[11px] font-mono text-slate-200 leading-normal">
                "SYNORA doubled our clinical trial recruitment rate while reducing inappropriate referrals to near zero."
                <span className="block text-[#f15153] font-bold mt-1">— Dr. Martin Vane, Lead Biomechatronics, Aetheria Bionics</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
