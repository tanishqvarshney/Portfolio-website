import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "Initializing Neural Interface...",
  "Optimizing 3D Particle Field...",
  "Calibrating Quantum Flux...",
  "Loading Developer Experience...",
  "Ready for Deployment."
];

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Smooth percentage counter with ease-out finish
    const duration = 2500; // 2.5 seconds total
    const interval = 20; // 20ms update rate
    const steps = duration / interval;
    const increment = 100 / steps;

    let current = 0;
    const timer = setInterval(() => {
      // Non-linear increment: faster at first, slower at the end
      const remaining = 100 - current;
      const step = Math.max(0.1, remaining * 0.05 + Math.random() * 0.5);
      
      current = Math.min(100, current + step);
      setPercent(Math.floor(current));

      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete && onComplete();
        }, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    // Rotate through technical messages
    const messageTimer = setInterval(() => {
      setMessageIndex(prev => (prev < messages.length - 1 ? prev + 1 : prev));
    }, 500);
    return () => clearInterval(messageTimer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#060606] text-white"
    >
      <div className="relative flex flex-col items-center">
        {/* Large Percentage */}
        <motion.h1 
          className="text-8xl md:text-9xl font-bold tracking-tighter tabular-nums"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {percent.toString().padStart(2, '0')}
        </motion.h1>

        {/* Progress Bar Container */}
        <div className="w-64 md:w-80 h-[2px] bg-white/10 mt-8 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-white"
            initial={{ width: "0%" }}
            animate={{ width: `${percent}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Technical Messages */}
        <div className="mt-12 h-6 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={messageIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-xs uppercase tracking-[0.3em] font-medium text-white/40 text-center"
            >
              {messages[messageIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Decorative corners for tech feel */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-white/20" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-white/20" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-white/20" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-white/20" />
    </motion.div>
  );
}
