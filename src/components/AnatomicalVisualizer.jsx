import React, { useState } from 'react';
import { Cpu, Zap, Activity, ShieldCheck, Layers, Eye, RefreshCw } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

export default function AnatomicalVisualizer() {
  const [activeLayer, setActiveLayer] = useState('augmented'); // 'biological', 'augmented', 'synergy'
  const [wireframeActive, setWireframeActive] = useState(false);

  const layerData = {
    biological: {
      title: '01 // BIOLOGICAL BASELINE',
      headline: 'The Intrinsic Human Nervous Framework',
      metrics: [
        { label: 'Neural Propagation Speed', value: '45 - 80 m/s', code: 'BIO.AXON' },
        { label: 'Fatigue Tolerance Threshold', value: '3.4 Hours Sustained', code: 'BIO.LACTATE' },
        { label: 'Tactile Receptive Density', value: '17,000 Meissner Units', code: 'BIO.DERMAL' },
      ],
      desc: 'The human neuromotor system possesses extraordinary adaptability and cognitive intentionality, but remains vulnerable to trauma, neurological degeneration, and mechanical exhaustion.',
      statusColor: 'text-amber-400',
      statusBorder: 'border-amber-400/40',
      badge: 'BIOMECHANICAL LIMITATION',
    },
    augmented: {
      title: '02 // CYBERNETIC INTEGRATION',
      headline: 'Titanium-Osseointegrated Architecture',
      metrics: [
        { label: 'Micro-Actuator Latency', value: '< 12 ms Decoupled', code: 'CYBER.ACTUATE' },
        { label: 'Structural Tensile Strength', value: '980 MPa Grade 5 Ti', code: 'CYBER.CHASSIS' },
        { label: 'Haptic Sensory Resolution', value: '64 Multipolar Channels', code: 'CYBER.TRANSDUCE' },
      ],
      desc: 'High-strength titanium and ultra-lightweight carbon fiber integrate with residual bone and peripheral nerve endings, translating subconscious neural impulses into precise kinetic mechanical movement.',
      statusColor: 'text-[#f15153]',
      statusBorder: 'border-[#f15153]/50',
      badge: 'CLINICALLY CERTIFIED RESTORATION',
    },
    synergy: {
      title: '03 // SYNAPTIC SYNERGY OVERDRIVE',
      headline: 'Closed-Loop Bio-Digital Symphony',
      metrics: [
        { label: 'Bidirectional Neural Stream', value: '1.4 Gbps Telemetry', code: 'SYNORA.BUS' },
        { label: 'Bio-Integration Index', value: '99.8% Zero Rejection', code: 'SYNORA.CELL' },
        { label: 'Adaptive Kinematic AI', value: 'Real-time EMG Calibration', code: 'SYNORA.EDGE' },
      ],
      desc: 'The boundary between organism and apparatus dissolves. Technology becomes an effortless extension of human will, restoring natural freedom of movement and sensory awareness.',
      statusColor: 'text-emerald-400',
      statusBorder: 'border-emerald-400/40',
      badge: 'MAXIMUM HUMAN POTENTIAL',
    },
  };

  const current = layerData[activeLayer];

  return (
    <section id="human-tech-section" className="py-24 relative bg-[#210d32] border-b border-[#321847] overflow-hidden">
      
      {/* Background Cyber Ambient */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-[600px] h-[500px] bg-[#f15153]/[0.05] blur-[150px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[400px] bg-[#321847]/[0.4] blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        
        {/* Section Philosophy Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#f15153] uppercase tracking-widest px-3 py-1 border border-[#f15153]/50 bg-[#f15153]/10 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>BRAND PHILOSOPHY // HUMAN × TECHNOLOGY</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            TECHNOLOGY SHOULD NOT REPLACE HUMANITY. <br />
            <span className="text-[#f15153]">IT EXTENDS WHAT IS POSSIBLE.</span>
          </h2>
          <p className="font-sans text-slate-200 text-sm sm:text-base mt-4 max-w-2xl leading-relaxed">
            SYNORA believes true cyborg technology is human-centered: restoring lost sovereignty, 
            amplifying biological potential, and giving individuals their agency back.
          </p>
        </div>

        {/* Visualizer Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Diagram Display */}
          <div className="lg:col-span-7">
            <div className="border border-[#321847] bg-[#251236] p-4 relative overflow-hidden group shadow-2xl">
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#f15153]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#f15153]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#f15153]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#f15153]" />

              {/* Top Controls Toolbar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 font-mono text-xs">
                <span className="text-[#f15153] flex items-center gap-2 font-bold">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>TELEM_STREAM: RUNNING // MODE_{activeLayer.toUpperCase()}</span>
                </span>
                
                <button
                  onClick={() => {
                    cyberAudio.playClick();
                    setWireframeActive(!wireframeActive);
                  }}
                  onMouseEnter={() => cyberAudio.playHover()}
                  className={`px-2.5 py-1 border flex items-center gap-1.5 transition-all text-[11px] cursor-pointer ${
                    wireframeActive
                      ? 'border-[#f15153] bg-[#f15153]/20 text-white font-bold'
                      : 'border-white/20 text-slate-300 hover:text-white'
                  }`}
                >
                  <Eye className="w-3 h-3 text-[#f15153]" />
                  <span>{wireframeActive ? 'CAD MESH ON' : 'CAD MESH OFF'}</span>
                </button>
              </div>

              {/* Main Image Visualizer with Dynamic Filtering */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src="/assets/anatomical_cyber.jpg"
                  alt="Anatomical Cybernetic Visualizer"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    activeLayer === 'biological'
                      ? 'sepia-[0.3] contrast-95 brightness-90'
                      : activeLayer === 'synergy'
                      ? 'contrast-110 saturate-125'
                      : 'contrast-105'
                  }`}
                />

                {/* Optional High-Tech SVG Wireframe CAD Overlay */}
                {wireframeActive && (
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none stroke-[#f15153]/70"
                    viewBox="0 0 800 500"
                    fill="none"
                  >
                    <path d="M50 450 L750 450" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M100 400 L700 400" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M150 350 L650 350" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="280" cy="220" r="45" strokeWidth="1.5" stroke="#f15153" />
                    <circle cx="480" cy="280" r="55" strokeWidth="1.5" stroke="#f15153" />
                    <line x1="280" y1="220" x2="480" y2="280" strokeWidth="1" strokeDasharray="2 2" />
                    <text x="290" y="215" fill="#f15153" fontSize="10" fontFamily="monospace">JOINT.T1 // SERVO</text>
                    <text x="490" y="275" fill="#f15153" fontSize="10" fontFamily="monospace">CARPUS.AXIS // EMG</text>
                  </svg>
                )}

                {/* Dynamic Telemetry HUD Overlay */}
                <div className="absolute bottom-4 left-4 bg-[#13091c]/90 backdrop-blur-md border border-white/15 p-3 max-w-xs font-mono text-[10px] space-y-1">
                  <div className="text-[#f15153] font-bold flex items-center justify-between">
                    <span>{current.badge}</span>
                    <span>99.4% SYNC</span>
                  </div>
                  <div className="text-white">
                    Sensing: 64 Channel Transduction
                  </div>
                  <div className="text-slate-300">
                    Kinematic Model: NeuroSynora v4.8
                  </div>
                </div>

                {/* Laser scan line effect */}
                <div className="absolute inset-x-0 h-0.5 bg-[#f15153] animate-scan-line pointer-events-none opacity-80" />
              </div>

              {/* Bottom Mode Selector Buttons */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                {[
                  { key: 'biological', label: '1. BIOLOGICAL' },
                  { key: 'augmented', label: '2. CYBERNETIC' },
                  { key: 'synergy', label: '3. OVERDRIVE' },
                ].map((mode) => (
                  <button
                    key={mode.key}
                    onClick={() => {
                      cyberAudio.playClick();
                      setActiveLayer(mode.key);
                    }}
                    onMouseEnter={() => cyberAudio.playHover()}
                    className={`py-2 px-2 text-center font-mono text-xs tracking-wider border transition-all cursor-pointer ${
                      activeLayer === mode.key
                        ? 'border-[#f15153] bg-[#f15153] text-white font-bold shadow-[0_0_12px_rgba(241,81,83,0.45)]'
                        : 'border-[#321847] bg-[#321847] text-white hover:border-[#f15153]/50'
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Layer Telemetry Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 border bg-[#251236] ${current.statusBorder} relative shadow-xl`}>
              
              <div className="font-mono text-xs tracking-widest text-[#f15153] uppercase mb-2 font-bold">
                {current.title}
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-3">
                {current.headline}
              </h3>

              <p className="font-sans text-sm text-slate-200 leading-relaxed mb-6">
                {current.desc}
              </p>

              {/* Dynamic Real-Time Metrics */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                {current.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center justify-between font-mono text-xs">
                    <div>
                      <span className="text-slate-300 block">{metric.label}</span>
                      <span className="text-[10px] text-slate-400">// {metric.code}</span>
                    </div>
                    <span className={`font-bold text-sm ${current.statusColor}`}>
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Status Verification Badge */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">Clinical Verification:</span>
                <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ISO 13485 ACCREDITED</span>
                </span>
              </div>
            </div>

            {/* Quick interactive fact */}
            <div className="p-4 bg-[#321847] border border-[#321847] font-mono text-xs text-slate-300 flex items-center gap-3">
              <RefreshCw className="w-4 h-4 text-[#f15153] flex-shrink-0 animate-spin" style={{ animationDuration: '8s' }} />
              <span>
                SYNORA indexes active clinical trials across North America, Europe, and Asia-Pacific.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
