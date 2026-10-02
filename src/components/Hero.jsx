import React, { useState } from 'react';
import { ArrowUpRight, Search, Activity, Shield } from 'lucide-react';
import { useTextScramble } from '../hooks/useTextScramble';
import { ECOSYSTEM_STATS } from '../data/technologies';
import { cyberAudio } from '../utils/audio';

export default function Hero({ onExploreClick, onDiagnosticClick }) {
  const { displayText: heroSubtitle } = useTextScramble('HUMAN × TECHNOLOGY', true, 30);
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    {
      id: 1,
      top: '42%',
      left: '32%',
      label: 'MICRO-SERVO DRIVE',
      spec: '5x Independent Titanium Actuators // 12ms Latency',
      status: 'CALIBRATED',
    },
    {
      id: 2,
      top: '52%',
      left: '52%',
      label: 'NEURAL MYOELECTRIC CHIP',
      spec: 'Direct Surface EMG Decoding // Sub-8ms Sync',
      status: 'SIGNAL LOCKED',
    },
    {
      id: 3,
      top: '46%',
      left: '74%',
      label: 'OSSEOINTEGRATED SOCKET',
      spec: 'Aero-Carbon Chassis with Bio-Fluidic Seal',
      status: 'OPTIMAL',
    },
  ];

  return (
    <section id="hero" className="hero-wrapper">
      
      {/* Background Ambience and Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#f15153]/[0.06] blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] bg-[#321847]/[0.4] blur-[140px] pointer-events-none rounded-full" />

      <div className="hero-inner">
        <div className="hero-grid-layout">
          
          {/* Left Column: Core Identity & Dual Path Entry */}
          <div className="hero-content-col">
            
            {/* Top System Tag */}
            <div className="hero-tag-badge">
              <span className="w-2 h-2 rounded-full bg-[#f15153] animate-pulse" />
              <span>{heroSubtitle}</span>
              <span className="opacity-30">|</span>
              <span className="text-slate-300 font-normal">INDEX: 2026.4</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-main-title">
              EXTENDING <br />
              <span style={{ color: '#FFFFFF' }}>HUMAN</span>{' '}
              <span style={{ color: '#f15153', textShadow: '0 0 25px rgba(241,81,83,0.45)' }}>
                POSSIBILITY
              </span>
            </h1>

            {/* Concise Value Statement */}
            <p className="hero-description">
              SYNORA is the dedicated ecosystem connecting people seeking physical & neural augmentation 
              with verified bionic prosthetics, brain-computer interfaces, and assistive mobility technologies.
            </p>

            {/* Core Action Pathways */}
            <div className="hero-button-group">
              <button
                onClick={() => {
                  cyberAudio.playClick();
                  onExploreClick();
                }}
                onMouseEnter={() => cyberAudio.playHover()}
                className="btn-cyber-primary"
              >
                <span>EXPLORE TECHNOLOGIES</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  cyberAudio.playClick();
                  onDiagnosticClick();
                }}
                onMouseEnter={() => cyberAudio.playHover()}
                className="btn-cyber-secondary"
              >
                <Search className="w-4 h-4 text-[#f15153]" />
                <span>I NEED A SOLUTION (GUIDED)</span>
              </button>
            </div>

            {/* Micro Feature Bullet Points */}
            <div className="hero-features-list">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield className="w-4 h-4 text-[#f15153]" />
                <span style={{ color: '#FFFFFF' }}>ISO 13485 Verified Providers</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity className="w-4 h-4 text-[#f15153]" />
                <span style={{ color: '#FFFFFF' }}>Direct Clinical Matching</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visualizer with Cyber Telemetry */}
          <div className="hero-visual-col">
            <div className="relative mx-auto max-w-lg lg:max-w-none border border-[#321847] bg-[#251236] p-2 group overflow-hidden shadow-2xl">
              
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#f15153]" />
              <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#f15153]" />
              <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-[#f15153]" />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#f15153]" />

              {/* Laser Scanning Line Animation */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#f15153] to-transparent animate-scan-line pointer-events-none z-20 shadow-[0_0_15px_#f15153]" />

              {/* Main Photograph Asset */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0413]">
                <img
                  src="/assets/hero_bionic.jpg"
                  alt="SYNORA Human-Technology Bionic Augmentation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Cyber Schematic HUD Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#160822]/90 via-transparent to-black/30 pointer-events-none" />

                {/* Telemetry Corner Readout */}
                <div className="absolute top-3 left-3 bg-[#160822]/90 backdrop-blur-sm border border-[#f15153]/50 px-2.5 py-1 font-mono text-[10px] text-[#f15153] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f15153] animate-ping" />
                  <span>CAD SPEC: BIONIC_X9 // V4.1</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-[#160822]/90 backdrop-blur-sm border border-white/20 px-2.5 py-1 font-mono text-[10px] text-white">
                  BIO-SYNC: <strong className="text-[#f15153]">99.4%</strong>
                </div>

                {/* Interactive Hotspots */}
                {hotspots.map((spot) => (
                  <div
                    key={spot.id}
                    className="absolute z-30"
                    style={{ top: spot.top, left: spot.left }}
                  >
                    <button
                      onClick={() => {
                        cyberAudio.playClick();
                        setActiveHotspot(activeHotspot === spot.id ? null : spot.id);
                      }}
                      onMouseEnter={() => cyberAudio.playHover()}
                      className="relative w-6 h-6 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer"
                      title={spot.label}
                    >
                      <span className="absolute w-full h-full rounded-full bg-[#f15153]/30 animate-ping" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#f15153] border border-white shadow-[0_0_10px_#f15153]" />
                    </button>

                    {/* Popover Callout */}
                    {activeHotspot === spot.id && (
                      <div className="absolute left-6 top-0 -translate-y-1/2 w-60 p-3 bg-[#240e34]/95 border border-[#f15153] backdrop-blur-md shadow-2xl z-40 animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex items-center justify-between font-mono text-[9px] text-[#f15153] pb-1 border-b border-white/10">
                          <span>{spot.label}</span>
                          <span className="text-white font-bold">{spot.status}</span>
                        </div>
                        <p className="text-[11px] text-slate-200 pt-1.5 font-mono leading-tight">
                          {spot.spec}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Telemetry Caption */}
              <div className="px-3.5 py-2.5 bg-[#190a25]/95 flex items-center justify-between font-mono text-[10px] text-slate-300 border-t border-[#321847]">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <span className="text-[#f15153]">●</span> CLICK HOTSPOTS TO INSPECT SUBSYSTEMS
                </span>
                <span className="text-[#f15153] font-bold">INTERACTIVE SCHEMATIC</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Live Telemetry Bar */}
      <div className="hero-stats-bar">
        <div className="hero-stats-grid">
          {ECOSYSTEM_STATS.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-number">
                {stat.value}
              </div>
              <div className="stat-label">
                {stat.label}
              </div>
              <div className="stat-code">
                // {stat.code}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
