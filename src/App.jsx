import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DualDiscovery from './components/DualDiscovery';
import AnatomicalVisualizer from './components/AnatomicalVisualizer';
import FeaturedTechnologies from './components/FeaturedTechnologies';
import HowItWorks from './components/HowItWorks';
import ProviderSection from './components/ProviderSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import TechInspectionModal from './components/TechInspectionModal';
import ProviderModal from './components/ProviderModal';
import CyberCanvas from './components/CyberCanvas';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [inspectedTech, setInspectedTech] = useState(null);
  const [providerModalOpen, setProviderModalOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0717] text-white relative selection:bg-[#f15153] selection:text-white font-sans">
      
      {/* Interactive Background Particle & Synapse Canvas */}
      <CyberCanvas />

      {/* Custom Lerping Targeting Reticle Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenProviderModal={() => setProviderModalOpen(true)}
      />

      {/* Hero Section */}
      <main>
        <Hero
          onExploreClick={() => scrollToSection('catalog-section')}
          onDiagnosticClick={() => scrollToSection('discovery-section')}
        />

        {/* Dual Discovery: Path A (Direct Search) vs Path B (Problem-Oriented Diagnostic) */}
        <DualDiscovery
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onSelectTech={(tech) => setInspectedTech(tech)}
        />

        {/* Human × Technology: Anatomical Augmentation Visualizer */}
        <AnatomicalVisualizer />

        {/* Featured Technologies Catalog */}
        <FeaturedTechnologies
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onInspectTech={(tech) => setInspectedTech(tech)}
        />

        {/* How It Works Ecosystem */}
        <HowItWorks />

        {/* Provider Ecosystem Section */}
        <ProviderSection onOpenProviderModal={() => setProviderModalOpen(true)} />

        {/* Final Strong Call to Action */}
        <FinalCTA
          onExploreClick={() => scrollToSection('catalog-section')}
          onDiagnosticClick={() => scrollToSection('discovery-section')}
        />
      </main>

      {/* Comprehensive Technical Footer */}
      <Footer
        onExploreClick={() => scrollToSection('catalog-section')}
        onDiagnosticClick={() => scrollToSection('discovery-section')}
        onOpenProviderModal={() => setProviderModalOpen(true)}
      />

      {/* Tech Inspection Modal */}
      {inspectedTech && (
        <TechInspectionModal
          tech={inspectedTech}
          onClose={() => setInspectedTech(null)}
        />
      )}

      {/* Provider Onboarding Modal */}
      <ProviderModal
        isOpen={providerModalOpen}
        onClose={() => setProviderModalOpen(false)}
      />

    </div>
  );
}
