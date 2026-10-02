import React from 'react';
import { ShieldCheck, Heart, Terminal } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

export default function Footer({ onExploreClick, onDiagnosticClick, onOpenProviderModal }) {
  return (
    <footer className="bg-[#120619] border-t-2 border-[#321847] text-slate-300 font-sans text-xs pt-16 pb-12">
      <div className="section-container">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#321847]">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#f15153]/60 bg-[#f15153]/15 flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-[#f15153]">SY</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-lg tracking-wider text-white">
                  SYNORA
                </span>
                <span className="block font-mono text-[8px] tracking-widest text-[#f15153] uppercase">
                  HUMAN × TECHNOLOGY
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-slate-300 leading-relaxed max-w-sm">
              The premier marketplace connecting individuals with clinical-grade assistive bionics, 
              neural interfaces, and biomechanical augmentation technologies.
            </p>

            <div className="pt-2 font-mono text-[10px] text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-white">GLOBAL CLINICAL NETWORK: 38 HUBS CONNECTED</span>
              </div>
              <div>ISO 13485 & CE MDR ACCREDITED DIRECTORY</div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 font-mono text-xs">
            
            {/* Column 1: Registry */}
            <div className="space-y-3">
              <div className="text-white font-bold tracking-wider uppercase text-[11px] pb-1 border-b border-white/10">
                01 // REPOSITORY
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <button
                    onClick={() => {
                      cyberAudio.playClick();
                      onExploreClick();
                    }}
                    className="hover:text-[#f15153] transition-colors cursor-pointer text-left"
                  >
                    Bionic Prosthetics
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      cyberAudio.playClick();
                      onExploreClick();
                    }}
                    className="hover:text-[#f15153] transition-colors cursor-pointer text-left"
                  >
                    Neural Interfaces (BCI)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      cyberAudio.playClick();
                      onExploreClick();
                    }}
                    className="hover:text-[#f15153] transition-colors cursor-pointer text-left"
                  >
                    Powered Exoskeletons
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      cyberAudio.playClick();
                      onExploreClick();
                    }}
                    className="hover:text-[#f15153] transition-colors cursor-pointer text-left"
                  >
                    Sensory Retinal Implants
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Platform */}
            <div className="space-y-3">
              <div className="text-white font-bold tracking-wider uppercase text-[11px] pb-1 border-b border-white/10">
                02 // DISCOVERY
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <button
                    onClick={() => {
                      cyberAudio.playClick();
                      onDiagnosticClick();
                    }}
                    className="hover:text-[#f15153] transition-colors cursor-pointer text-left"
                  >
                    Neural Diagnostic Matcher
                  </button>
                </li>
                <li>
                  <a href="#human-tech-section" className="hover:text-[#f15153] transition-colors">
                    Human × Tech Visualizer
                  </a>
                </li>
                <li>
                  <a href="#how-it-works-section" className="hover:text-[#f15153] transition-colors">
                    Clinical Protocols
                  </a>
                </li>
                <li>
                  <a href="#hero" className="hover:text-[#f15153] transition-colors">
                    Hardware Specifications
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Providers */}
            <div className="space-y-3">
              <div className="text-white font-bold tracking-wider uppercase text-[11px] pb-1 border-b border-white/10">
                03 // PROVIDERS
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <button
                    onClick={() => {
                      cyberAudio.playClick();
                      onOpenProviderModal();
                    }}
                    className="hover:text-[#f15153] transition-colors cursor-pointer text-left"
                  >
                    Become a Provider
                  </button>
                </li>
                <li>
                  <span className="text-slate-400">Clinical Hub Registry</span>
                </li>
                <li>
                  <span className="text-slate-400">ISO Standards Matrix</span>
                </li>
                <li>
                  <span className="text-slate-400">API Telemetry Docs</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} SYNORA ECOSYSTEM. ALL CLINICAL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-300 flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-[#f15153]" />
              <span>TERMINAL: LATENCY 4ms</span>
            </span>
            <span className="text-slate-300">ACCESSIBILITY: WCAG 2.1 AAA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
