import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, ChevronRight } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

export default function Navbar({ soundEnabled, setSoundEnabled, onOpenProviderModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const next = cyberAudio.toggle();
    setSoundEnabled(next);
  };

  const handleNavClick = (id) => {
    cyberAudio.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
            onMouseEnter={() => cyberAudio.playHover()}
          >
            <div style={{
              width: '38px',
              height: '38px',
              border: '1px solid rgba(241, 81, 83, 0.6)',
              backgroundColor: 'rgba(241, 81, 83, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <span className="font-mono" style={{ fontSize: '12px', fontWeight: 'bold', color: '#f15153' }}>SY</span>
              <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '6px', height: '6px', backgroundColor: '#f15153' }} />
              <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '6px', height: '6px', backgroundColor: '#f15153' }} />
            </div>
            <div>
              <span className="font-display" style={{ fontWeight: 900, fontSize: '20px', letterSpacing: '0.05em', color: '#FFFFFF', display: 'block', lineHeight: 1.1 }}>
                SYNORA
              </span>
              <span className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.14em', color: '#f15153', textTransform: 'uppercase', display: 'block' }}>
                HUMAN × TECH
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex" style={{ alignItems: 'center', gap: '28px' }}>
          <button
            onClick={() => handleNavClick('discovery-section')}
            className="font-mono text-slate-300 hover:text-[#f15153] transition-colors cursor-pointer"
            style={{ fontSize: '12px', background: 'none', border: 'none', padding: '6px 0', letterSpacing: '0.06em' }}
            onMouseEnter={() => cyberAudio.playHover()}
          >
            01 // DISCOVER
          </button>
          <button
            onClick={() => handleNavClick('human-tech-section')}
            className="font-mono text-slate-300 hover:text-[#f15153] transition-colors cursor-pointer"
            style={{ fontSize: '12px', background: 'none', border: 'none', padding: '6px 0', letterSpacing: '0.06em' }}
            onMouseEnter={() => cyberAudio.playHover()}
          >
            02 // HUMAN × TECH
          </button>
          <button
            onClick={() => handleNavClick('catalog-section')}
            className="font-mono text-slate-300 hover:text-[#f15153] transition-colors cursor-pointer"
            style={{ fontSize: '12px', background: 'none', border: 'none', padding: '6px 0', letterSpacing: '0.06em' }}
            onMouseEnter={() => cyberAudio.playHover()}
          >
            03 // TECHNOLOGIES
          </button>
          <button
            onClick={() => handleNavClick('how-it-works-section')}
            className="font-mono text-slate-300 hover:text-[#f15153] transition-colors cursor-pointer"
            style={{ fontSize: '12px', background: 'none', border: 'none', padding: '6px 0', letterSpacing: '0.06em' }}
            onMouseEnter={() => cyberAudio.playHover()}
          >
            04 // ECOSYSTEM
          </button>
          <button
            onClick={() => handleNavClick('providers-section')}
            className="font-mono text-slate-300 hover:text-[#f15153] transition-colors cursor-pointer"
            style={{ fontSize: '12px', background: 'none', border: 'none', padding: '6px 0', letterSpacing: '0.06em' }}
            onMouseEnter={() => cyberAudio.playHover()}
          >
            05 // PROVIDERS
          </button>
        </nav>

        {/* Right CTA & Sound Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
          
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            aria-label="Toggle Cyber Sound Synthesizer"
            className="font-mono"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 12px',
              border: soundEnabled ? '1px solid rgba(241, 81, 83, 0.6)' : '1px solid rgba(255, 255, 255, 0.15)',
              backgroundColor: soundEnabled ? 'rgba(241, 81, 83, 0.14)' : 'rgba(255, 255, 255, 0.03)',
              color: soundEnabled ? '#f15153' : '#94A3B8',
              fontSize: '11px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            title={soundEnabled ? 'Cybernetic Audio: Active' : 'Enable Tactile Audio'}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#f15153]" />
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '14px' }}>
                  <div className="w-[2px] bg-[#f15153] eq-bar-1" />
                  <div className="w-[2px] bg-[#f15153] eq-bar-2" />
                  <div className="w-[2px] bg-[#f15153] eq-bar-3" />
                  <div className="w-[2px] bg-[#f15153] eq-bar-4" />
                </div>
                <span className="hidden sm:inline" style={{ fontSize: '10px' }}>SOUND ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline" style={{ fontSize: '10px' }}>SOUND OFF</span>
              </>
            )}
          </button>

          {/* Become Provider Primary Action */}
          <button
            onClick={() => {
              cyberAudio.playClick();
              onOpenProviderModal();
            }}
            onMouseEnter={() => cyberAudio.playHover()}
            className="hidden sm:flex font-mono"
            style={{
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              backgroundColor: '#f15153',
              color: '#FFFFFF',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 15px rgba(241, 81, 83, 0.4)',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            <span>BECOME PROVIDER</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => {
              cyberAudio.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden"
            style={{
              padding: '8px',
              color: '#CBD5E1',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backgroundColor: 'transparent',
              cursor: 'pointer'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          right: 0,
          backgroundColor: '#1b0d27',
          borderBottom: '1px solid rgba(241, 81, 83, 0.4)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          fontFamily: 'var(--font-mono)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
        }}>
          <div style={{ fontSize: '10px', color: '#f15153', letterSpacing: '0.12em', paddingBottom: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            // SYNORA NAVIGATION MATRIX
          </div>
          <button
            onClick={() => handleNavClick('discovery-section')}
            style={{ background: 'none', border: 'none', color: '#E2E8F0', textAlign: 'left', padding: '8px 0', fontSize: '13px', cursor: 'pointer' }}
          >
            01 // DISCOVER PATH
          </button>
          <button
            onClick={() => handleNavClick('human-tech-section')}
            style={{ background: 'none', border: 'none', color: '#E2E8F0', textAlign: 'left', padding: '8px 0', fontSize: '13px', cursor: 'pointer' }}
          >
            02 // HUMAN × TECHNOLOGY
          </button>
          <button
            onClick={() => handleNavClick('catalog-section')}
            style={{ background: 'none', border: 'none', color: '#E2E8F0', textAlign: 'left', padding: '8px 0', fontSize: '13px', cursor: 'pointer' }}
          >
            03 // FEATURED TECHNOLOGIES
          </button>
          <button
            onClick={() => handleNavClick('how-it-works-section')}
            style={{ background: 'none', border: 'none', color: '#E2E8F0', textAlign: 'left', padding: '8px 0', fontSize: '13px', cursor: 'pointer' }}
          >
            04 // HOW IT WORKS
          </button>
          <button
            onClick={() => handleNavClick('providers-section')}
            style={{ background: 'none', border: 'none', color: '#E2E8F0', textAlign: 'left', padding: '8px 0', fontSize: '13px', cursor: 'pointer' }}
          >
            05 // FOR PROVIDERS
          </button>

          <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProviderModal();
              }}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#f15153',
                color: '#FFFFFF',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: '11px',
                letterSpacing: '0.08em',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              BECOME A PROVIDER →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
