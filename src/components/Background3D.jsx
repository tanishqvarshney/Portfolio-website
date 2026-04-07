import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function Particles({ count = 10000 }) {
  const meshRef = useRef();
  const geoRef = useRef();
  
  // Use Memo for static data
  const [origPos, colors, velocities] = useMemo(() => {
    const orig = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const vels = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const radius = 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      orig[i * 3] = x;
      orig[i * 3 + 1] = y;
      orig[i * 3 + 2] = z;

      vels[i * 3] = 0;
      vels[i * 3 + 1] = 0;
      vels[i * 3 + 2] = 0;

      const dice = Math.random();
      if (dice > 0.8) {
        color.setRGB(0.5, 0.5, 0.5); // Muted Clouds
      } else if (dice > 0.45) {
        color.setRGB(0.1, 0.4, 0.2); // Muted Land
      } else {
        color.setRGB(0.05, 0.2, 0.5); // Muted Ocean
      }
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return [orig, cols, vels];
  }, [count]);

  // Current positions
  const pos = useMemo(() => new Float32Array(origPos), [origPos]);

  useFrame((state) => {
    if (!geoRef.current || !meshRef.current) return;

    const positions = geoRef.current.attributes.position.array;
    const { pointer, viewport } = state;

    // Deep 3D Parallax: The whole mesh shifts with the mouse
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, pointer.x * 0.15, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, pointer.y * 0.15, 0.05);

    // Mouse coordinates mapped to viewport
    const mouseX = (pointer.x * viewport.width) / 2;
    const mouseY = (pointer.y * viewport.height) / 2;

    const repulsionRadius = 1.3;
    const repulsionStrength = 0.05;
    const swirlStrength = 0.04;
    const returnStrength = 0.015;
    const damping = 0.94; // Higher damping for smoother return

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      let px = positions[ix];
      let py = positions[iy];
      let pz = positions[iz];

      const dx = px - mouseX;
      const dy = py - mouseY;
      const dz = pz - 0;
      const distSq = dx * dx + dy * dy + dz * dz;
      const dist = Math.sqrt(distSq);

      if (dist < repulsionRadius) {
        const force = (repulsionRadius - dist) / repulsionRadius;
        
        velocities[ix] += (dx / dist) * force * repulsionStrength;
        velocities[iy] += (dy / dist) * force * repulsionStrength;
        velocities[iz] += (dz / dist) * force * repulsionStrength;

        const tx = -dy / dist;
        const ty = dx / dist;
        
        velocities[ix] += tx * force * swirlStrength;
        velocities[iy] += ty * force * swirlStrength;
      }

      const rx = origPos[ix] - px;
      const ry = origPos[iy] - py;
      const rz = origPos[iz] - pz;
      
      velocities[ix] += rx * returnStrength;
      velocities[iy] += ry * returnStrength;
      velocities[iz] += rz * returnStrength;

      velocities[ix] *= damping;
      velocities[iy] *= damping;
      velocities[iz] *= damping;

      positions[ix] += velocities[ix];
      positions[iy] += velocities[iy];
      positions[iz] += velocities[iz];
    }

    geoRef.current.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y += 0.001;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry ref={geoRef}>
        <bufferAttribute
          attach="attributes-position"
          count={pos.length / 3}
          array={pos}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Background3D() {
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? '#030303' : '#f8fafc';

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none transition-colors duration-500">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={[bgColor]} />
        <ambientLight intensity={0.5} />
        <Particles />
        <EffectComposer disableNormalPass multisampling={0}>
          <Bloom
            intensity={0.7}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
      {/* Radial overlay to improve contrast and readability */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, #030303 90%)'
        }}
      />
    </div>
  );
}
