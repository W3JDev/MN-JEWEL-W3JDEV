# ⚡ w3.ai | AI Automation & DeFi Architect Portfolio

> **"From The Floor To The Full Stack"**

A high-performance, immersive single-page application (SPA) designed for an Enterprise AI Architect. This portfolio bridges the gap between high-touch service (Hospitality/Operations) and high-tech execution (AI/Blockchain) using a "Cyber-Noir" aesthetic.

---

## 📑 Table of Contents
1. [Tech Stack](#-tech-stack)
2. [Design System](#-design-system)
3. [Project Architecture](#-project-architecture)
4. [Component Breakdown](#-component-breakdown)
5. [Data & Content Strategy](#-data--content-strategy)
6. [Installation & Setup](#-installation--setup)

---

## 🛠 Tech Stack

**Core Framework:**
*   **React 19 (Vite):** Fast HMR and build performance.
*   **TypeScript:** Strict typing for robust interface definitions (`Project`, `Skill`, `StoryChapter`).

**Styling & UI:**
*   **Tailwind CSS:** Utility-first styling with custom configurations for neon glows and dark mode.
*   **Glassmorphism:** Heavily utilized custom CSS for "frosted glass" cards (`bg-white/[0.03]`).

**Animation & VFX:**
*   **Three.js:** Custom shader implementation for the background starfield/particles.
*   **GSAP (GreenSock):** Advanced scroll triggers, timeline animations, and magnetic cursor effects.
*   **CSS Keyframes:** Custom animations for `ticker`, `shimmer`, `glitch`, and `pulse` effects.

---

## 🎨 Design System

The visual identity is defined as **"Operational Cyber-Noir"**. It combines the darkness of a terminal with the vibrancy of neon indicators.

### 1. Color Palette (`constants.ts`)
| Color Name | Hex | Usage |
| :--- | :--- | :--- |
| **Void Black** | `#050505` | Main background. Deep, warm black. |
| **Cyan Protocol** | `#00f3ff` | Tech, AI, Future, System Status (Active). |
| **Magma Orange** | `#FF3D00` | Human element, "The Floor", Hospitality, Alerts. |
| **Royal Purple** | `#7e22ce` | Enterprise, Architecture, Wisdom. |
| **Success Green** | `#22c55e` | Success states, Money, ROI. |

### 2. Typography
*   **Display:** `Space Grotesk` - Used for Headings (H1-H3). Technical yet readable.
*   **Body:** `Inter` - Used for long-form text. Clean and neutral.
*   **Code/Data:** `Space Mono` - Used for tags, metrics, badges, and terminal text.

### 3. Visual Motifs
*   **The "Jewel" Effect:** Iridescent borders and gradients that simulate light hitting a gemstone or fiber optic cable.
*   **Grain & Noise:** An SVG turbulence filter overlay (`GrainOverlay.tsx`) adds film grain to reduce digital harshness.
*   **Glitch:** Text effects (`GlitchText.tsx`) representing the "Ghost in the Machine."

---

## 🏗 Project Architecture

The project follows a flat, modular directory structure for easy maintenance.

```
/
├── components/
│   ├── Effects/        # Visual overlays (ThreeJS, Grain, Cursor, Loader)
│   ├── Layout/         # Structural elements (Navbar)
│   ├── Sections/       # Page sections (Hero, Story, Projects, etc.)
│   └── UI/             # Reusable atomic components (Button, GlassCard, Modal)
├── constants.ts        # Single source of truth for text/data
├── types.ts            # TypeScript interfaces
├── App.tsx             # Main layout & composition
└── main.tsx            # Entry point
```

---

## 🧩 Component Breakdown

### 1. UI Components (`components/UI`)
*   **`GlassCard`**: The fundamental building block. Uses `backdrop-blur-xl`, semi-transparent white borders, and an internal "shimmer" gradient on hover.
*   **`Button`**: Supports variants (`primary` (Orange gradient), `secondary`, `glass`). Includes hover glow effects.
*   **`CustomCursor`**: A GSAP-driven magnetic cursor. It has a small leading dot and a lagging ring that expands when hovering over interactive elements.
*   **`GlitchText`**: Creates a cyberpunk offset effect on text hover using CSS clip-paths.

### 2. Key Sections (`components/Sections`)

#### **Hero (`Hero.tsx`)**
*   **Concept:** "The Introduction."
*   **Features:**
    *   3D Tilt effect on mouse move.
    *   Abstract Circuit Board background image with `mix-blend-screen`.
    *   Infinite scrolling ticker at the bottom displaying key career metrics.

#### **Story (`Story.tsx`)**
*   **Concept:** "The Origin."
*   **Layout:** **Sticky Split-Screen**.
    *   **Left:** A sticky container holding a stack of images. Images cross-fade based on scroll position.
    *   **Right:** Scrolling text chapters.
*   **Tech:** Uses `ScrollTrigger` to detect which chapter is in the viewport (`top 60%`) and updates the active index state.

#### **Expertise (`Expertise.tsx`)**
*   **Concept:** "The Arsenal."
*   **Layout:**
    *   **Dual Cards:** Contrasts "Operational DNA" (Chef/Orange) vs "Tech Fluency" (Coder/Cyan).
    *   **Bento Grid:** Technical skills grid.
*   **VFX:** Animated background blobs using CSS `animate-float`.

#### **Projects (`Projects.tsx`)**
*   **Concept:** "Verifiable Impact."
*   **Layout:** A Bento Grid (Mosaic) of case studies.
*   **Interaction:**
    *   Hovering reveals the "Gemstone Gradient" border.
    *   Clicking opens a `Modal` simulating a live environment connection.
    *   Images are darkened to allow text readability, revealing upon hover.

#### **Blueprint (`Blueprint.tsx`)**
*   **Concept:** "The Automation."
*   **Design:** A visual flowchart showing how code commits trigger webhooks and deploy sites. Uses CSS animations to simulate data flowing through pipes.

#### **Contact (`Contact.tsx`)**
*   **Concept:** "The Handshake."
*   **Features:**
    *   Interactive form type selector (Project vs Consulting vs Hiring).
    *   Simulated API submission with "Protocol Initiated" success state.

### 3. Effects (`components/Effects`)

*   **`ThreeBackground.tsx`**: Renders a 3D starfield using `THREE.Points`. Uses a custom shader to make stars twinkle and respond to mouse movement (parallax).
*   **`Loader.tsx`**: A pre-loader overlay that mimics a system boot sequence.

---

## 💾 Data & Content Strategy

All text content is decoupled from components and stored in `constants.ts`. This allows for instant updates without touching UI code.

**Data Models (`types.ts`):**
*   `Project`: ID, Title, Metrics, Tags, Images.
*   `StoryChapter`: Narrative steps for the Story section.
*   `Skill`: Technical proficiencies.

**Asset Strategy:**
*   Images are sourced from **Unsplash** via `constants.ts` to ensure high quality and theme relevance (Cyberpunk/Dark Office/Kitchen).

---

## ⚡ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-repo/portfolio.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```

4.  **Build for Production:**
    ```bash
    npm run build
    ```

---

## 📝 Author
**Muhammad Nurunnabi (Jewel)**
*   *Enterprise Architect & Automation Engineer*
*   Stack: React, Python, CrewAI, Solidity.
