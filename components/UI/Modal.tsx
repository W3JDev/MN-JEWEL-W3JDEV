import React, { useEffect, useState } from 'react';
import GlassCard from './GlassCard';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <GlassCard className="w-full max-w-4xl h-[80vh] relative rounded-2xl flex flex-col overflow-hidden" hoverEffect={false}>
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/40">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="ml-4 font-mono text-sm text-gray-400">{title} - Live Environment</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 bg-[#1a1a1a] relative flex items-center justify-center">
          {loading ? (
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-[#00f3ff] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="font-mono text-xs text-[#00f3ff] animate-pulse">CONNECTING TO LIVE SERVER...</p>
            </div>
          ) : (
            <div className="w-full h-full p-8 flex flex-col items-center justify-center animate-[fadeIn_0.3s_ease-out]">
              <span className="material-symbols-outlined text-6xl text-gray-600 mb-4">terminal</span>
              <h3 className="text-2xl font-bold mb-2">Interactive Simulation</h3>
              <p className="text-gray-400 max-w-md text-center mb-6">
                This is a portfolio demonstration. In the live environment, this would load the actual application instance via iframe or remote connection.
              </p>
              <button className="px-4 py-2 border border-white/20 rounded hover:bg-white/10 transition-colors text-sm font-mono text-white">
                View Source Code
              </button>
            </div>
          )}
        </div>
      </GlassCard>
    </div>
  );
};

export default Modal;
