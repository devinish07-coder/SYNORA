import React, { useState } from 'react';
import { X, Building2, CheckCircle2, Shield, UploadCloud } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

export default function ProviderModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    orgName: '',
    techType: 'bionics',
    stage: 'clinical_trial',
    email: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    cyberAudio.playClick();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#251236] border border-[#f15153]/60 shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_30px_rgba(241,81,83,0.3)] p-6 sm:p-8 space-y-6">
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#f15153]" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#f15153]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#f15153]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#f15153]" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#321847]">
          <div className="flex items-center gap-2.5">
            <Building2 className="w-5 h-5 text-[#f15153]" />
            <h3 className="font-display font-bold text-xl text-white">
              PROVIDER ONBOARDING APPLICATION
            </h3>
          </div>
          <button
            onClick={() => {
              cyberAudio.playClick();
              onClose();
            }}
            className="text-slate-300 hover:text-white p-1 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-emerald-500/10 border border-emerald-500/40 rounded-full flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display font-bold text-2xl text-white">
              APPLICATION TRANSMITTED
            </h4>
            <p className="font-sans text-sm text-slate-200 max-w-md mx-auto">
              Our clinical accreditation committee will inspect your technology's ISO/MDR documentation and respond to{' '}
              <strong className="text-[#f15153]">{formData.email}</strong> within 48 business hours.
            </p>
            <button
              onClick={() => {
                cyberAudio.playClick();
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#f15153] text-white font-mono text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              RETURN TO ECOSYSTEM
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <p className="font-sans text-xs text-slate-300">
              Apply to list your assistive or human-augmentation technology in the SYNORA global clinical repository.
            </p>

            <div>
              <label className="block text-slate-300 mb-1">
                INSTITUTION / MANUFACTURER / RESEARCH LAB NAME:
              </label>
              <input
                type="text"
                required
                value={formData.orgName}
                onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                placeholder="e.g., Zurich Bioneering AG"
                className="w-full bg-[#13091c] border border-white/20 px-3.5 py-2.5 text-white focus:border-[#f15153] outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 mb-1">
                  AUGMENTATION DOMAIN:
                </label>
                <select
                  value={formData.techType}
                  onChange={(e) => setFormData({ ...formData, techType: e.target.value })}
                  className="w-full bg-[#13091c] border border-white/20 px-3 py-2.5 text-white focus:border-[#f15153] outline-none"
                >
                  <option value="bionics">Bionic Limbs & Prosthetics</option>
                  <option value="neural">Neural BCI & Speech</option>
                  <option value="mobility">Powered Exoskeletons</option>
                  <option value="sensory">Sensory & Retinal Implants</option>
                  <option value="rehab">Neuro-Rehabilitation</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">
                  DEVELOPMENT / CLINICAL STAGE:
                </label>
                <select
                  value={formData.stage}
                  onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                  className="w-full bg-[#13091c] border border-white/20 px-3 py-2.5 text-white focus:border-[#f15153] outline-none"
                >
                  <option value="clinical_trial">Clinical Trials (Phase I-IV)</option>
                  <option value="commercial">Commercially Certified (CE/FDA)</option>
                  <option value="pilot">Hospital Pilot Deployment</option>
                  <option value="research">Advanced Pre-Clinical Research</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-300 mb-1">
                PRIMARY MEDICAL / TECHNICAL CONTACT EMAIL:
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="clinical-liaison@organization.com"
                className="w-full bg-[#13091c] border border-white/20 px-3.5 py-2.5 text-white focus:border-[#f15153] outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1">
                SUMMARY OF CLINICAL BENEFIT & TECHNICAL INNOVATION:
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Describe your device's core capability, patient population, and primary telemetry..."
                className="w-full bg-[#13091c] border border-white/20 px-3.5 py-2.5 text-white focus:border-[#f15153] outline-none font-sans"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-white/10">
              <span className="text-[10px] text-slate-400 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#f15153]" />
                ISO 13485 Standards Verification Enforced
              </span>
              <button
                type="submit"
                onMouseEnter={() => cyberAudio.playHover()}
                className="px-6 py-2.5 bg-[#f15153] text-white font-bold uppercase tracking-wider hover:bg-[#ff686a] transition-all cursor-pointer shadow-[0_0_15px_rgba(241,81,83,0.35)]"
              >
                TRANSMIT APPLICATION →
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
