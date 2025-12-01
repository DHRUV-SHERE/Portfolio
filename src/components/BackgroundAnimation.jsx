import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useMemo } from "react";

function NeuronParticles() {
  const pointsRef = useRef();
  const lineRef = useRef();

  const isMobile = window.innerWidth < 768;

  // ⚡ Auto–optimized values
  const COUNT = isMobile ? 80 : 500;
  const RANGE = isMobile ? 25 : 50;
  const SPEED = isMobile ? 0.004 : 0.05;

  // Particles
  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const vel = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT * 3; i++) {
      pos[i] = (Math.random() - 0.5) * RANGE;
      vel[i] = (Math.random() - 0.5) * SPEED;
    }

    return { positions: pos, velocities: vel };
  }, [COUNT]);

  // Lines (desktop only)
  const linePositions = useMemo(() => {
    return new Float32Array(isMobile ? 0 : COUNT * COUNT * 3);
  }, [COUNT, isMobile]);

  let lineCount = 0;

  useFrame(() => {
    const pos = pointsRef.current.geometry.attributes.position.array;

    // move particles
    for (let i = 0; i < COUNT * 3; i++) {
      pos[i] += velocities[i];

      if (pos[i] > RANGE / 2 || pos[i] < -RANGE / 2) {
        velocities[i] *= -1;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // skip lines on mobile (performance boost)
    if (isMobile) return;

    // desktop line connections
    lineCount = 0;
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < i + 30 && j < COUNT; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];

        const dist = dx * dx + dy * dy + dz * dz;

        if (dist < 4) {
          linePositions[lineCount++] = pos[i * 3];
          linePositions[lineCount++] = pos[i * 3 + 1];
          linePositions[lineCount++] = pos[i * 3 + 2];

          linePositions[lineCount++] = pos[j * 3];
          linePositions[lineCount++] = pos[j * 3 + 1];
          linePositions[lineCount++] = pos[j * 3 + 2];
        }
      }
    }

    if (lineRef.current) {
      lineRef.current.geometry.setDrawRange(0, lineCount / 3);
      lineRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      {/* Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={COUNT}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isMobile ? 0.1 : 0.12} // Slightly larger for visibility
          color="#1A365D" // Dark blue for light theme (from foreground color)
          sizeAttenuation
          transparent
          opacity={0.8} // Higher opacity for better visibility
        />
      </points>

      {/* Desktop Only Lines */}
      {!isMobile && (
        <lineSegments ref={lineRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={linePositions}
              count={COUNT * COUNT}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color="#1A365D" // Dark blue for light theme
            transparent 
            opacity={0.4} // Higher opacity for visibility
            linewidth={1.5} // Slightly thicker lines
          />
        </lineSegments>
      )}
    </>
  );
}

export default function NeuralBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 18], fov: 60 }}>
        <color attach="background" args={["#E6F7FF"]} /> {/* Light background */}
        <NeuronParticles />
        
        {/* Optional: Add some subtle ambient light for depth */}
        <ambientLight intensity={0.3} />
      </Canvas>
    </div>
  );
}