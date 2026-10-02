import React, { useState } from 'react';
import { Search, Compass, Activity, ArrowRight, CheckCircle2, Sliders, Sparkles, Filter } from 'lucide-react';
import { DIAGNOSTIC_CHALLENGES, TECHNOLOGIES } from '../data/technologies';
import { cyberAudio } from '../utils/audio';

export default function DualDiscovery({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onSelectTech,
}) {
  const [activeTab, setActiveTab] = useState('solution'); // 'solution' (Path B) or 'search' (Path A)
  const [selectedChallenge, setSelectedChallenge] = useState(DIAGNOSTIC_CHALLENGES[0].id);
  const [isScanning, setIsScanning] = useState(false);

  const activeChallengeData = DIAGNOSTIC_CHALLENGES.find((c) => c.id === selectedChallenge);

  // Matched technologies for Path B
  const matchedTechnologies = TECHNOLOGIES.filter((t) =>
    activeChallengeData ? activeChallengeData.recommendedIds.includes(t.id) : true
  );

  const handleRunScan = () => {
    cyberAudio.playScan();
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      cyberAudio.playClick();
    }, 850);
  };

  return (
    <section id="discovery-section" className="py-24 relative bg-[#190a24] border-b border-[#321847]">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#f15153] uppercase tracking-widest px-3 py-1 border border-[#f15153]/50 bg-[#f15153]/10">
            <Compass className="w-3.5 h-3.5" />
            <span>TWO ENTRY PROTOCOLS // CORE UX</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            HOW DO YOU WANT TO START?
          </h2>
          <p className="font-sans text-slate-200 text-sm sm:text-base">
            You do not need to know the engineering name of a technology. Start either by describing 
            your functional objective or browsing the verified clinical index directly.
          </p>
        </div>

        {/* Path Mode Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="grid grid-cols-2 max-w-xl w-full p-1 bg-[#251236] border border-[#321847]">
            <button
              onClick={() => {
                cyberAudio.playClick();
                setActiveTab('solution');
              }}
              onMouseEnter={() => cyberAudio.playHover()}
              className={`py-3 px-4 font-mono text-xs tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'solution'
                  ? 'bg-[#f15153] text-white font-bold shadow-[0_0_15px_rgba(241,81,83,0.45)]'
                  : 'bg-[#321847] text-white hover:text-[#f15153]'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>PATH B: I NEED A SOLUTION</span>
            </button>

            <button
              onClick={() => {
                cyberAudio.playClick();
                setActiveTab('search');
              }}
              onMouseEnter={() => cyberAudio.playHover()}
              className={`py-3 px-4 font-mono text-xs tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'search'
                  ? 'bg-[#f15153] text-white font-bold shadow-[0_0_15px_rgba(241,81,83,0.45)]'
                  : 'bg-[#321847] text-white hover:text-[#f15153]'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>PATH A: I KNOW WHAT I NEED</span>
            </button>
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="border border-[#321847] bg-[#251236] p-6 sm:p-10 relative overflow-hidden">
          
          {/* Subtle Corner Brackets */}
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#f15153]" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#f15153]" />
          <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#f15153]" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#f15153]" />

          {/* PATH B: I NEED A SOLUTION (Interactive Diagnostic Matcher) */}
          {activeTab === 'solution' && (
            <div className="space-y-8">
              <div className="border-b border-white/[0.08] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    NEURAL CLINICAL DIAGNOSTIC MATCHER
                  </h3>
                  <p className="font-sans text-xs text-slate-300 mt-1">
                    Describe your functional barrier or desired augmentation to reveal targeted assistive devices.
                  </p>
                </div>
                <div className="font-mono text-[11px] text-[#f15153] bg-[#f15153]/10 px-3 py-1 border border-[#f15153]/35 self-start md:self-auto">
                  // ALGORITHM: BIO-CAPABILITY v2.8
                </div>
              </div>

              {/* Step 1: Select Functional Need */}
              <div>
                <label className="block font-mono text-xs text-[#f15153] uppercase tracking-wider mb-3 font-bold">
                  01 // SELECT PRIMARY REHABILITATION OR AUGMENTATION GOAL:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {DIAGNOSTIC_CHALLENGES.map((challenge) => {
                    const isSelected = selectedChallenge === challenge.id;
                    return (
                      <button
                        key={challenge.id}
                        onClick={() => {
                          cyberAudio.playClick();
                          setSelectedChallenge(challenge.id);
                          handleRunScan();
                        }}
                        onMouseEnter={() => cyberAudio.playHover()}
                        className={`text-left p-4 border transition-all relative ${
                          isSelected
                            ? 'border-[#f15153] bg-[#f15153]/15 shadow-[0_0_15px_rgba(241,81,83,0.25)]'
                            : 'border-white/10 bg-[#251236]/60 hover:border-white/25'
                        }`}
                      >
                        <div className="font-mono text-[9px] text-[#f15153] uppercase tracking-widest mb-1">
                          {challenge.tag}
                        </div>
                        <div className="font-sans font-bold text-sm text-white mb-1">
                          {challenge.label}
                        </div>
                        <div className="font-sans text-xs text-slate-300 leading-snug">
                          {challenge.subtitle}
                        </div>
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#f15153]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Scan Status & Action Trigger */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleRunScan}
                    disabled={isScanning}
                    onMouseEnter={() => cyberAudio.playHover()}
                    className="px-5 py-2.5 bg-[#f15153] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#ff686a] transition-all disabled:opacity-50"
                  >
                    {isScanning ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>PROCESSING CLINICAL FIT...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>REFRESH COMPATIBILITY SCAN</span>
                      </>
                    )}
                  </button>
                  <span className="font-mono text-xs text-slate-300 hidden sm:inline">
                    Target: <strong className="text-white">{activeChallengeData?.label}</strong>
                  </span>
                </div>

                <div className="font-mono text-xs text-[#f15153] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{matchedTechnologies.length} VERIFIED TECHNOLOGIES FOUND</span>
                </div>
              </div>

              {/* Matched Product Output Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {matchedTechnologies.map((tech) => (
                  <div
                    key={tech.id}
                    onClick={() => {
                      cyberAudio.playClick();
                      onSelectTech(tech);
                    }}
                    onMouseEnter={() => cyberAudio.playHover()}
                    className="matched-tech-card group"
                  >
                    <div className="matched-tech-thumb">
                      <img
                        src={tech.image}
                        alt={tech.name}
                        loading="lazy"
                      />
                      <div className="absolute top-1.5 left-1.5 bg-[#0d0413]/90 font-mono text-[9px] text-[#f15153] px-1.5 py-0.5 border border-[#f15153]/40 font-bold">
                        CLINICAL FIT: 99%
                      </div>
                    </div>

                    <div className="matched-tech-body">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] text-[#f15153] uppercase tracking-wider font-semibold">
                          {tech.categoryLabel}
                        </span>
                        <span className="font-mono text-[9px] text-slate-400">
                          {tech.provider.location}
                        </span>
                      </div>
                      
                      <h4 className="font-display font-bold text-base text-white group-hover:text-[#f15153] transition-colors line-clamp-1">
                        {tech.name}
                      </h4>
                      
                      <p className="font-sans text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {tech.tagline}
                      </p>
                      
                      <div className="pt-2 mt-auto border-t border-white/10 flex items-center justify-between font-mono text-[10px]">
                        <span className="text-slate-400 truncate max-w-[140px]">
                          By {tech.provider.name}
                        </span>
                        <span className="text-[#f15153] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          INSPECT CAD →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PATH A: I KNOW WHAT I NEED (Direct Search & Filters) */}
          {activeTab === 'search' && (
            <div className="space-y-6">
              <div className="border-b border-white/[0.08] pb-4">
                <h3 className="font-display font-bold text-xl text-white">
                  DIRECT CLINICAL CATALOG SEARCH
                </h3>
                <p className="font-sans text-xs text-slate-300 mt-1">
                  Query by hardware specification, anatomical application, or engineering keyword.
                </p>
              </div>

              {/* Direct Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f15153]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search bionic arms, retinal implants, titanium exoskeletons, BCI interfaces..."
                  className="w-full bg-[#1b0a2a] border border-[#321847] focus:border-[#f15153] text-white pl-12 pr-4 py-3.5 font-mono text-xs tracking-wider outline-none transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-slate-300 hover:text-white"
                  >
                    CLEAR [X]
                  </button>
                )}
              </div>

              {/* Category Quick Filter Chips */}
              <div className="space-y-2">
                <div className="font-mono text-[10px] text-slate-300 uppercase tracking-widest flex items-center gap-2">
                  <Filter className="w-3 h-3 text-[#f15153]" />
                  <span>FILTER BY AUGMENTATION CATEGORY:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'all', label: 'All Augmentations' },
                    { id: 'bionics', label: 'Bionic Limbs' },
                    { id: 'neural', label: 'Neural BCI & Speech' },
                    { id: 'mobility', label: 'Exoskeletons' },
                    { id: 'sensory', label: 'Sensory & Optics' },
                    { id: 'rehab', label: 'Neuro-Rehab' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        cyberAudio.playClick();
                        setSelectedCategory(cat.id);
                      }}
                      onMouseEnter={() => cyberAudio.playHover()}
                      className={`px-3 py-1.5 font-mono text-xs border transition-all cursor-pointer ${
                        selectedCategory === cat.id
                          ? 'border-[#f15153] bg-[#f15153] text-white font-bold shadow-[0_0_12px_rgba(241,81,83,0.4)]'
                          : 'border-[#321847] bg-[#321847] text-white hover:border-[#f15153]/50'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#1b0a2a] border border-[#321847] font-mono text-xs text-slate-300 flex items-center justify-between">
                <span>Active Query: "{searchQuery || selectedCategory.toUpperCase()}"</span>
                <a
                  href="#catalog-section"
                  onClick={() => cyberAudio.playClick()}
                  className="text-[#f15153] font-bold hover:underline flex items-center gap-1"
                >
                  JUMP TO RESULTS MATRIX →
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
