import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';

/* ──────────────────────────────────────────────
   Paw SVG — reaches in from the top
   ────────────────────────────────────────────── */
function PawSVG({ grabbed }) {
  return (
    <svg width="90" height="170" viewBox="0 0 90 170" fill="none" style={{ overflow: 'visible' }}>
      {/* Arm */}
      <rect x="22" y="0" width="46" height="120" rx="23" fill="#e8c98a" />
      {/* Arm fur highlight */}
      <rect x="32" y="10" width="12" height="80" rx="6" fill="#f0d9a0" opacity="0.45" />

      {/* Paw base */}
      <ellipse cx="45" cy="130" rx="28" ry="22" fill="#c8a96e" />
      {/* Main pad */}
      <ellipse cx="45" cy="133" rx="16" ry="13" fill="#b8895e" />
      <ellipse cx="45" cy="133" rx="10" ry="8" fill="#a87b52" />

      {/* Toe beans */}
      <ellipse cx="20" cy="115" rx="9" ry="8" fill="#c8a96e" />
      <ellipse cx="36" cy="107" rx="9" ry="8" fill="#c8a96e" />
      <ellipse cx="54" cy="107" rx="9" ry="8" fill="#c8a96e" />
      <ellipse cx="70" cy="115" rx="9" ry="8" fill="#c8a96e" />
      {/* Toe pads */}
      <ellipse cx="20" cy="118" rx="5" ry="4.5" fill="#b8895e" />
      <ellipse cx="36" cy="110" rx="5" ry="4.5" fill="#b8895e" />
      <ellipse cx="54" cy="110" rx="5" ry="4.5" fill="#b8895e" />
      <ellipse cx="70" cy="118" rx="5" ry="4.5" fill="#b8895e" />

      {/* Sparkles on grab */}
      {grabbed && (
        <>
          <motion.circle cx="5" cy="100" r="4" fill="#f5c842"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, delay: 0.05 }} />
          <motion.circle cx="85" cy="95" r="3" fill="#f5c842"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 0.45, delay: 0.15 }} />
          <motion.text x="50" y="75" textAnchor="middle" fontSize="20"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: -20 }}
            transition={{ duration: 0.7 }}>🐾</motion.text>
        </>
      )}
    </svg>
  );
}

/* ──────────────────────────────────────────────
   Wavy bottom edge — simulates paper crumpling
   ────────────────────────────────────────────── */
function WavyEdge({ intensity }) {
  // intensity 0→1
  const amp = intensity * 18;
  const w = typeof window !== 'undefined' ? window.innerWidth : 1440;
  const seg = 80;
  const points = Math.ceil(w / seg) + 1;

  let d = `M 0 0`;
  for (let i = 0; i < points; i++) {
    const x = i * seg;
    const y = (i % 2 === 0 ? amp : -amp);
    d += ` L ${x} ${y}`;
  }
  d += ` L ${w} 0 L ${w} 20 L 0 20 Z`;

  return (
    <svg
      width={w}
      height={20 + amp}
      viewBox={`0 ${-amp} ${w} ${20 + amp}`}
      style={{
        position: 'absolute',
        bottom: -amp,
        left: 0,
        pointerEvents: 'none',
        overflow: 'visible',
      }}
    >
      <path d={d} fill="var(--background, #f8fafc)" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   Main PuppyLoader component
   ────────────────────────────────────────────── */
export default function PuppyLoader({ onDone }) {
  const [phase, setPhase] = useState('enter');
  const [visible, setVisible] = useState(true);
  const [waveIntensity, setWaveIntensity] = useState(0);
  const [grabbed, setGrabbed] = useState(false);

  const sheetY = useMotionValue(0);
  const pawY = useMotionValue(-200);

  // Sheet scale-Y squishes slightly when grabbed for rubbery feel
  const sheetScaleY = useTransform(sheetY, [0, 80, -500], [1, 1.03, 0.97]);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      // 1. Paw descends
      await animate(pawY, 0, { duration: 0.5, ease: [0.22, 1, 0.36, 1] });
      if (cancelled) return;

      // 2. Brief pause before grab
      await new Promise(r => setTimeout(r, 200));
      if (cancelled) return;

      // 3. GRAB — slight downward pull, edge wrinkles
      setGrabbed(true);
      setPhase('grab');
      setWaveIntensity(0.6);

      await Promise.all([
        animate(sheetY, 55, { duration: 0.32, ease: [0.34, 1.56, 0.64, 1] }),
      ]);
      if (cancelled) return;

      setWaveIntensity(1);
      await new Promise(r => setTimeout(r, 100));
      if (cancelled) return;

      // 4. PULL — rip sheet upward off screen
      setPhase('pull');
      setWaveIntensity(0.8);

      await Promise.all([
        animate(sheetY, -(window.innerHeight + 300), {
          duration: 0.58,
          ease: [0.55, 0, 0.1, 1],
        }),
        animate(pawY, -(window.innerHeight + 300), {
          duration: 0.52,
          ease: [0.55, 0, 0.1, 1],
        }),
        new Promise(r => {
          setTimeout(() => { setWaveIntensity(0.3); r(); }, 200);
        }),
      ]);

      if (cancelled) return;

      // 5. Done
      setVisible(false);
      onDone?.();
    }

    const t = setTimeout(run, 80);
    return () => { cancelled = true; clearTimeout(t); };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* ── Sheet overlay ── */}
      <motion.div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9998,
          y: sheetY,
          scaleY: sheetScaleY,
          transformOrigin: 'top center',
          background: 'var(--background, #f8fafc)',
          willChange: 'transform',
        }}
      >
        {/* Wavy bottom edge when sheet is being pulled */}
        {(phase === 'grab' || phase === 'pull') && (
          <WavyEdge intensity={waveIntensity} />
        )}

        {/* Loading dots shown while entering */}
        {phase === 'enter' && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}>
            <div style={{
              fontSize: '14px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              color: 'var(--muted-foreground, #94a3b8)',
              letterSpacing: '0.05em',
            }}>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  animate={{ y: [-5, 5, -5], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.85, repeat: Infinity, delay: i * 0.16, ease: 'easeInOut' }}
                  style={{
                    width: 9, height: 9, borderRadius: '50%',
                    background: 'var(--foreground, #1e293b)',
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom border line — thickens when grabbed */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: phase === 'grab' ? 6 : 2,
            background: 'var(--border, rgba(0,0,0,0.1))',
            transition: 'height 0.15s ease',
          }}
        />
      </motion.div>

      {/* ── Drop shadow under sheet for depth ── */}
      <motion.div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: 40,
          zIndex: 9997,
          pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(0,0,0,0.12), transparent)',
          y: sheetY,
          transformOrigin: 'top center',
          opacity: useTransform(sheetY, [0, 55, -100], [0, 1, 0]),
        }}
      />

      {/* ── Paw coming from the top ── */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: '50%',
          marginLeft: '-45px',
          zIndex: 10000,
          y: pawY,
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      >
        {/* Paw shadow on sheet */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 55,
            height: 12,
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.15)',
            filter: 'blur(8px)',
            opacity: useTransform(pawY, [-200, 0, 80], [0, 0.7, 1]),
          }}
        />
        <PawSVG grabbed={grabbed} />
      </motion.div>
    </>
  );
}
