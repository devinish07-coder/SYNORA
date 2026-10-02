# SYNORA — Human × Technology

> **Next-Generation Ecosystem & Marketplace for Assistive Bionics, Neural Interfaces & Cybernetic Augmentation.**

SYNORA connects individuals experiencing physical, sensory, or neuromuscular barriers directly with clinically validated technologies and certified medical device providers.

---

## 🎨 Theme & Visual Identity

The interface is built with an atmospheric **cybernetic aesthetic** inspired by high-end cyberpunk design systems and aerospace HUD telemetry:

| Token | Hex Code | Role |
| :--- | :--- | :--- |
| **Primary** | `#f15153` | Action triggers, glowing reticles, laser scanlines, active badges, and clinical match metrics |
| **Secondary** | `#321847` | Deep obsidian purple surfaces, card backdrops, telemetry frames, and section dividers |
| **Accent** | `#FFFFFF` | Crisp, high-contrast headings, value readouts, and structural borders |

---

## ⚡ Key Features

### 1. Dual Discovery Pathways
* **Path A: "I Know What I Need" (Direct Clinical Registry Search)**
  * Full-text search across hardware specifications, anatomical applications, and keywords.
  * Rapid category filtering: Bionic Limbs, Neural BCI & Speech, Powered Exoskeletons, Sensory Restoration, and Neuro-Rehabilitation.
* **Path B: "I Need a Solution" (Diagnostic Matcher)**
  * Natural language, problem-oriented diagnostic selector for patients and clinicians without engineering jargon.
  * Dynamic compatibility engine scanning clinical trial fit, latency, and biocompatibility criteria.

### 2. Interactive Cyborg UX & Atmospheric Telemetry
* **HTML5 Canvas Synapse Engine:** Interactive background neural grid with dynamic particle connections responding to cursor coordinates.
* **Custom Crosshair Reticle Cursor:** Lerping targeting crosshair with interactive active-state scaling on interactive controls.
* **Web Audio API Feedback Engine:** Synthesized cyber clicks, scan pulses, and navigation audio with a toggleable visual EQ wave monitor in the navigation bar.
* **CAD Telemetry Inspection Modals:** Interactive hardware telemetry modals showing ISO 13485 / MDR compliance standards, micro-actuator latency, battery endurance, and live CAD wireframe modes.
* **Human × Technology Anatomical Visualizer:** 3-mode anatomical layer switcher (Biological Baseline, Cybernetic Integration, and Synaptic Synergy Overdrive) with interactive SVG CAD overlays.

### 3. Medical Device Provider Portal
* Direct onboarding interface for biomedical robotics manufacturers, research labs, and clinical trial coordinators to list validated hardware without intermediary distortion.

---

## 🛠️ Tech Stack

* **Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
* **Styling Engine:** Custom Vanilla CSS Design System with responsive border-box architecture, HSL/HEX color tokens, and fluid typography.
* **Icons:** [Lucide React](https://lucide.dev/)
* **Audio:** Web Audio API (tactile audio synthesis)
* **Fonts:** Syne (display headings), Plus Jakarta Sans (body copy), JetBrains Mono (telemetry & CAD codes)

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (v9.0.0 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/synora.git
   cd synora
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   Production-ready files will be generated in the `/dist` directory.

---

## 📁 Project Architecture

```
intern/
├── public/
│   └── assets/                     # Dedicated high-resolution cybernetic product photography
│       ├── hero_bionic.jpg         # Bionic Motion X-9 Hand
│       ├── neural_bci.jpg          # Synapse-Link Temporal BCI
│       ├── exoskeleton.jpg         # Titan-Gait Powered Mobility Exoskeleton
│       ├── retinal_lens.jpg        # ChronoRetina Bio-Optical Lens
│       ├── vocal_collar.jpg        # MyoVocal Synth-4 Laryngeal Collar
│       ├── rehab_sleeve.jpg        # AxonKinetic NeuroSleeve
│       └── anatomical_cyber.jpg    # Human × Tech Biomechanical Cross-Section
├── src/
│   ├── components/                 # Modular, decoupled UI components
│   │   ├── Navbar.jsx              # Fixed header, sound toggle with EQ, mobile drawer
│   │   ├── Hero.jsx                # Scrambled headline, CAD inspection hotspot HUD
│   │   ├── DualDiscovery.jsx       # Path A & Path B diagnostic matcher
│   │   ├── AnatomicalVisualizer.jsx# 3-layer biological/cybernetic cross-section
│   │   ├── FeaturedTechnologies.jsx# Verified hardware catalog grid & category filters
│   │   ├── HowItWorks.jsx          # 3-stage ecosystem protocol
│   │   ├── ProviderSection.jsx     # Manufacturer & clinical hub portal
│   │   ├── FinalCTA.jsx            # High-conversion closing action trigger
│   │   ├── Footer.jsx              # WCAG 2.1 AAA accreditation & sitemap
│   │   ├── TechInspectionModal.jsx # Detailed hardware telemetry inspection modal
│   │   ├── ProviderModal.jsx       # Provider application onboarding form
│   │   ├── CyberCanvas.jsx         # Canvas particle synapse background
│   │   └── CustomCursor.jsx        # Cybernetic targeting crosshair
│   ├── data/
│   │   └── technologies.js         # Comprehensive clinical hardware data & challenges
│   ├── hooks/
│   │   └── useTextScramble.js      # Terminal text decoding/scrambling hook
│   ├── utils/
│   │   └── audio.js                # Synthesized Web Audio API sound generator
│   ├── App.jsx                     # Application root orchestrator
│   ├── index.css                   # Custom responsive CSS engine with strict palette tokens
│   └── main.jsx                    # Vite React entry point
├── index.html                      # HTML5 root with SEO metadata & Google Fonts
├── vite.config.js                  # Vite bundler configuration
└── package.json                    # Project dependencies and scripts
```

---

## 📜 Compliance & Accessibility
* Designed adhering to **WCAG 2.1 AAA** high-contrast text guidelines.
* Reduced-motion preferences honored via `@media (prefers-reduced-motion: reduce)`.
* Zero external CSS runtime overhead for blazing-fast page loads.
