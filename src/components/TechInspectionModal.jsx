import React, { useState } from 'react';
import { X, ShieldCheck, Cpu, Battery, Activity, ArrowRight, CheckCircle2, Sliders, ExternalLink } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

export default function TechInspectionModal({ tech, onClose }) {
  const [wireframeMode, setWireframeMode] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactEmail, setContactEmail] = useState('');

  if (!tech) return null;

  const handleInquiry = (e) => {
    e.preventDefault();
    cyberAudio.playClick();
    if (contactEmail.trim()) {
      setContactSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Box */}
      <div className="relative w-full max-w-4xl bg-[#1d0c2b] border border-[#f15153]/60 shadow-[0_0_50px_rgba(0,0,0,0.95),0_0_30px_rgba(241,81,83,0.3)] overflow-hidden my-8">
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#f15153]" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#f15153]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#f15153]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#f15153]" />

        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#321847] bg-[#251236]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#f15153] animate-ping" />
            <span className="font-mono text-xs text-[#f15153] tracking-wider uppercase font-bold">
              CAD SPECIFICATION INSPECTION // ID: {tech.id.toUpperCase()}
            </span>
          </div>

          <button
            onClick={() => {
              cyberAudio.playClick();
              onClose();
            }}
            onMouseEnter={() => cyberAudio.playHover()}
            className="p-1 text-slate-300 hover:text-white border border-white/10 hover:border-white/30 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Top Grid: Image + Quick Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Visualizer Area */}
            <div className="md:col-span-6 relative aspect-video sm:aspect-square bg-black border border-white/15 overflow-hidden group">
              <img
                src={tech.image}
                alt={tech.name}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  wireframeMode ? 'invert contrast-125' : ''
                }`}
              />

              {/* Wireframe CAD Overlay SVG */}
              {wireframeMode && (
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none stroke-[#f15153]/70"
                  viewBox="0 0 500 500"
                  fill="none"
                >
                  <circle cx="250" cy="250" r="180" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50" y1="250" x2="450" y2="250" strokeWidth="1" />
                  <line x1="250" y1="50" x2="250" y2="450" strokeWidth="1" />
                  <rect x="180" y="180" width="140" height="140" strokeWidth="1.5" stroke="#f15153" />
                  <text x="190" y="170" fill="#f15153" fontSize="10" fontFamily="monospace">ISO.CALIBRATED // SEC_01</text>
                </svg>
              )}

              {/* Overlay Toggle */}
              <button
                onClick={() => {
                  cyberAudio.playClick();
                  setWireframeMode(!wireframeMode);
                }}
                className="absolute bottom-3 left-3 bg-[#13091c]/90 backdrop-blur-sm border border-[#f15153]/50 text-white px-2.5 py-1 font-mono text-[10px] uppercase hover:bg-[#f15153] transition-colors cursor-pointer"
              >
                {wireframeMode ? 'NORMAL VIEW' : 'CAD WIREFRAME HUD'}
              </button>

              <div className="absolute top-3 right-3 bg-[#13091c]/90 font-mono text-[9px] text-emerald-400 px-2 py-0.5 border border-emerald-500/30 font-bold">
                ● {tech.clinicalStatus}
              </div>
            </div>

            {/* Title & Core Problem Addressed */}
            <div className="md:col-span-6 space-y-4">
              <div className="font-mono text-xs text-[#f15153] uppercase tracking-wider font-bold">
                {tech.categoryLabel}
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                {tech.name}
              </h2>
              <p className="font-sans text-sm text-slate-200 leading-relaxed">
                {tech.tagline}
              </p>

              <div className="p-4 bg-[#1b0d27] border border-white/10 space-y-1">
                <span className="font-mono text-[10px] text-[#f15153] uppercase tracking-widest block font-bold">
                  CLINICAL INDICATION & PURPOSE:
                </span>
                <p className="font-sans text-xs text-white">
                  {tech.problem}
                </p>
              </div>

              {/* Provider Info */}
              <div className="font-mono text-xs text-slate-300 space-y-1 pt-2">
                <div className="flex items-center justify-between">
                  <span>Engineered by:</span>
                  <strong className="text-white">{tech.provider.name}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Headquarters:</span>
                  <span className="text-slate-200">{tech.provider.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Accreditation:</span>
                  <span className="text-emerald-400 font-bold">{tech.provider.iso}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Description Paragraph */}
          <div className="space-y-2 border-t border-white/10 pt-6">
            <h4 className="font-mono text-xs text-[#f15153] uppercase tracking-wider font-bold">
              TECHNOLOGICAL ARCHITECTURE & SYSTEM SPECIFICATIONS
            </h4>
            <p className="font-sans text-sm text-slate-200 leading-relaxed">
              {tech.description}
            </p>
          </div>

          {/* Full Specifications Matrix Table */}
          <div className="border border-white/10 bg-[#1b0d27] p-4 space-y-3">
            <div className="font-mono text-xs text-slate-300 uppercase tracking-widest pb-2 border-b border-white/10">
              HARDWARE TELEMETRY PARAMETERS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
              {Object.entries(tech.specs).map(([key, value]) => (
                <div key={key} className="p-2.5 bg-[#251236]/60 border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </span>
                  <span className="text-white font-medium block">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Connect / Request Consultation Form */}
          <div className="p-6 bg-[#251236] border border-[#f15153]/40 space-y-4">
            <div>
              <h4 className="font-display font-bold text-lg text-white">
                REQUEST CLINICAL CONSULTATION OR PROVIDER CONTACT
              </h4>
              <p className="font-sans text-xs text-slate-300 mt-1">
                SYNORA routes patient and clinical inquiries directly to certified representatives at {tech.provider.name}.
              </p>
            </div>

            {contactSubmitted ? (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/40 font-mono text-xs text-emerald-300 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>
                  INQUIRY TRANSMITTED: A clinical coordinator from {tech.provider.name} will reach out to {contactEmail} within 24 operational hours.
                </span>
              </div>
            ) : (
              <form onSubmit={handleInquiry} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="Enter your contact email for clinical coordinator..."
                  className="flex-1 bg-[#13091c] border border-white/20 px-4 py-3 font-mono text-xs text-white focus:border-[#f15153] outline-none"
                />
                <button
                  type="submit"
                  onMouseEnter={() => cyberAudio.playHover()}
                  className="px-6 py-3 bg-[#f15153] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#ff686a] transition-all whitespace-nowrap cursor-pointer shadow-[0_0_15px_rgba(241,81,83,0.4)]"
                >
                  TRANSMIT REQUEST →
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#1b0d27] border-t border-white/10 flex items-center justify-between font-mono text-xs">
          <span className="text-slate-400">SYNORA REGISTRY // ISO 14971 MEDICAL COMPLIANT</span>
          <button
            onClick={() => {
              cyberAudio.playClick();
              onClose();
            }}
            className="text-slate-300 hover:text-white cursor-pointer"
          >
            CLOSE [ESC]
          </button>
        </div>

      </div>
    </div>
  );
}
