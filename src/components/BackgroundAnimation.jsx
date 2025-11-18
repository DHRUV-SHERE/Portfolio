import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

function NeuronParticles() {
  const pointsRef = useRef();
  const lineRef = useRef();

  const COUNT = 800;
  const RANGE = 50;

  const positions = new Float32Array(COUNT * 3);
  const velocities = new Float32Array(COUNT * 3);

  for (let i = 0; i < COUNT * 3; i++) {
    positions[i] = (Math.random() - 0.5) * RANGE;
    velocities[i] = (Math.random() - 0.5) * 0.01;
  }

  const linePositions = new Float32Array(COUNT * COUNT * 3);
  let lineCount = 0;

  useFrame(() => {
    const pos = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < COUNT * 3; i++) {
      pos[i] += velocities[i];

      if (pos[i] > RANGE / 2 || pos[i] < -RANGE / 2) {
        velocities[i] *= -1;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

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

    lineRef.current.geometry.setDrawRange(0, lineCount / 3);
    lineRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
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
          size={0.08}
          color="#00eaff"
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>

      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={linePositions}
            count={COUNT * COUNT}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00eaff" transparent opacity={0.2} />
      </lineSegments>
    </>
  );
}

export default function NeuralBackground() {
  // Disable on mobile
  if (window.innerWidth < 768) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,          // background
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 18], fov: 60 }}>
        <color attach="background" args={["#01010f"]} />
        <NeuronParticles />
      </Canvas>
    </div>
  );
}
