import React from 'react';
import { ArrowUpRight, Cpu, Layers, Battery, Gauge, ExternalLink } from 'lucide-react';
import { TECHNOLOGIES, CATEGORIES } from '../data/technologies';
import { cyberAudio } from '../utils/audio';

export default function FeaturedTechnologies({
  searchQuery,
  selectedCategory,
  setSelectedCategory,
  onInspectTech,
}) {
  // Filter logic
  const filtered = TECHNOLOGIES.filter((tech) => {
    const matchesCategory =
      selectedCategory === 'all' || tech.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.provider.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog-section" className="py-24 relative bg-[#170921] border-b border-[#321847]">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#f15153] uppercase tracking-widest px-3 py-1 border border-[#f15153]/50 bg-[#f15153]/10">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNOLOGY REPOSITORY // CLINICAL REGISTRY</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              FEATURED AUGMENTATIONS & ASSISTIVE DEVICES
            </h2>
            <p className="font-sans text-slate-200 text-sm sm:text-base max-w-xl">
              Inspect vetted human-assistive hardware, from advanced bionic limbs to cortical speech interfaces.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-300 border border-[#321847] px-4 py-2 self-start md:self-auto bg-[#251236]">
            INDEXED HARDWARE: <strong className="text-[#f15153]">{filtered.length}</strong> / {TECHNOLOGIES.length}
          </div>
        </div>

        {/* Category Horizontal Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                cyberAudio.playClick();
                setSelectedCategory(cat.id);
              }}
              onMouseEnter={() => cyberAudio.playHover()}
              className={`px-4 py-2 font-mono text-xs whitespace-nowrap border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'border-[#f15153] bg-[#f15153] text-white font-bold shadow-[0_0_15px_rgba(241,81,83,0.45)]'
                  : 'border-[#321847] bg-[#321847] text-white hover:border-[#f15153]/50'
              }`}
            >
              {cat.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Technology Cards Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 border border-white/15 bg-[#1b0d27] p-8 space-y-4">
            <div className="font-mono text-[#f15153] text-sm">// NO MATCHES FOUND IN CURRENT CLINICAL REGISTRY</div>
            <p className="font-sans text-slate-300 text-sm max-w-md mx-auto">
              No technologies matched your query "{searchQuery}". Try broadening your filter parameters or switch to Path B.
            </p>
            <button
              onClick={() => {
                cyberAudio.playClick();
                setSelectedCategory('all');
              }}
              className="px-5 py-2.5 bg-[#f15153] text-white font-mono text-xs font-bold cursor-pointer"
            >
              RESET ALL FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tech) => (
              <article
                key={tech.id}
                className="cyber-card flex flex-col justify-between overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/11] bg-black overflow-hidden border-b border-white/[0.08]">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#13091c]/90 backdrop-blur-sm border border-white/20 px-2.5 py-1 font-mono text-[10px] text-[#f15153] font-bold tracking-wider uppercase">
                    {tech.categoryLabel}
                  </div>

                  {/* Clinical Status Badge */}
                  <div className="absolute bottom-3 left-3 bg-[#13091c]/90 backdrop-blur-sm border border-emerald-500/40 px-2 py-0.5 font-mono text-[9px] text-emerald-400 font-bold">
                    ● {tech.clinicalStatus.split('//')[0].trim()}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="font-mono text-[10px] text-slate-400">
                      PROV: <strong className="text-white">{tech.provider.name}</strong> ({tech.provider.location})
                    </div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-[#f15153] transition-colors leading-snug">
                      {tech.name}
                    </h3>
                    <p className="font-sans text-xs text-slate-300 leading-relaxed">
                      {tech.tagline}
                    </p>
                  </div>

                  {/* Micro Specs Bar */}
                  <div className="pt-3 border-t border-white/[0.1] grid grid-cols-2 gap-2 font-mono text-[10px] text-slate-400">
                    <div>
                      <span className="text-slate-400 block">LATENCY</span>
                      <span className="text-white font-semibold">{tech.specs.latency || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">WEIGHT</span>
                      <span className="text-white font-semibold">{tech.specs.weight || 'N/A'}</span>
                    </div>
                  </div>

                  {/* Explore & Inspect Trigger */}
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        cyberAudio.playClick();
                        onInspectTech(tech);
                      }}
                      onMouseEnter={() => cyberAudio.playHover()}
                      className="w-full py-3 px-4 border border-[#f15153]/50 hover:border-[#f15153] bg-[#f15153]/10 hover:bg-[#f15153] text-white hover:text-white font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(241,81,83,0.4)]"
                    >
                      <span>INSPECT TECHNICAL CAD</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#f15153] group-hover:text-white" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
