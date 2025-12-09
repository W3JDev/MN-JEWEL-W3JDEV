import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import ThreeBackground from './components/Effects/ThreeBackground';
import Loader from './components/Effects/Loader';
import CustomCursor from './components/UI/CustomCursor';
import GrainOverlay from './components/Effects/GrainOverlay';
import ParallaxBackground from './components/Effects/ParallaxBackground';
import Hero from './components/Sections/Hero';
import Story from './components/Sections/Story';
import Expertise from './components/Sections/Expertise';
import Services from './components/Sections/Services';
import Projects from './components/Sections/Projects';
import Testimonials from './components/Sections/Testimonials';
import Clients from './components/Sections/Clients';
import Blueprint from './components/Sections/Blueprint';
import FAQ from './components/Sections/FAQ';
import Hobbies from './components/Sections/Hobbies';
import Newsletter from './components/Sections/Newsletter';
import Contact from './components/Sections/Contact';
import Modal from './components/UI/Modal';
import SystemStatus from './components/UI/SystemStatus';
import { Project } from './types'; // Import type
import { PROJECTS } from './constants'; // Import constants to lookup if needed

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [modalMode, setModalMode] = useState<'demo' | 'case-study'>('demo');

  const handleOpenDemo = (projectTitle: string) => {
    const project = PROJECTS.find(p => p.title === projectTitle);
    if (project) {
        setActiveProject(project);
        setModalMode('demo');
        setModalOpen(true);
    }
  };

  const handleOpenCaseStudy = (projectTitle: string) => {
    const project = PROJECTS.find(p => p.title === projectTitle);
    if (project) {
        setActiveProject(project);
        setModalMode('case-study');
        setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => {
        setActiveProject(null);
        setModalMode('demo'); // Reset to default
    }, 300);
  };

  return (
    <div className="text-[#e5e5e5] font-sans overflow-x-hidden selection:bg-[#FF3D00] selection:text-white relative cursor-none">
      <Loader />
      <CustomCursor />
      <GrainOverlay />
      <SystemStatus />
      
      {/* Background Layers */}
      <ThreeBackground />
      <ParallaxBackground />
      
      <Navbar />
      
      <main className="relative z-10">
        <div id="hero"><Hero /></div>
        <Story />
        <Expertise />
        <Services />
        <Projects onOpenModal={handleOpenDemo} onOpenCaseStudy={handleOpenCaseStudy} />
        <Testimonials />
        <Clients />
        <Blueprint />
        <FAQ />
        <Hobbies />
        <Newsletter />
      </main>

      <Contact />

      <Modal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        project={activeProject}
        mode={modalMode}
      />
    </div>
  );
};

export default App;