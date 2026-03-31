"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function NetworkCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringARef = useRef<THREE.Mesh>(null);
  const ringBRef = useRef<THREE.Mesh>(null);
  const nodes = useMemo(
    () => [
      new THREE.Vector3(1.9, 0.25, 0.6),
      new THREE.Vector3(-1.65, -0.35, 0.9),
      new THREE.Vector3(0.2, 1.6, -0.35),
      new THREE.Vector3(0.35, -1.5, -0.5),
      new THREE.Vector3(1.25, -1.05, 0.55),
    ],
    [],
  );

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.06;
    meshRef.current.rotation.y += delta * 0.1;
    if (ringARef.current) ringARef.current.rotation.z += delta * 0.2;
    if (ringBRef.current) ringBRef.current.rotation.x -= delta * 0.14;
  });

  return (
    <group>
      <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.35}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.95, 1]} />
          <meshStandardMaterial
            color="#0f0f0f"
            emissive="#0047FF"
            emissiveIntensity={0.65}
            roughness={0.25}
            metalness={0.8}
            wireframe
          />
        </mesh>
      </Float>

      <mesh ref={ringARef}>
        <torusGeometry args={[1.45, 0.02, 20, 120]} />
        <meshStandardMaterial color="#7B2FFF" emissive="#7B2FFF" emissiveIntensity={1.1} />
      </mesh>

      <mesh ref={ringBRef} rotation={[1.2, 0.2, 0.2]}>
        <torusGeometry args={[1.95, 0.015, 18, 120]} />
        <meshStandardMaterial color="#00FFD1" emissive="#00FFD1" emissiveIntensity={0.6} />
      </mesh>

      {nodes.map((node, idx) => (
        <group key={`node-${idx}`}>
          <mesh position={node}>
            <sphereGeometry args={[0.06, 24, 24]} />
            <meshStandardMaterial
              color={idx % 2 === 0 ? "#00FFD1" : "#7B2FFF"}
              emissive={idx % 2 === 0 ? "#00FFD1" : "#7B2FFF"}
              emissiveIntensity={1.2}
            />
          </mesh>
          <Line
            points={[new THREE.Vector3(0, 0, 0), node]}
            color={idx % 2 === 0 ? "#00FFD1" : "#0047FF"}
            transparent
            opacity={0.55}
            lineWidth={1}
          />
        </group>
      ))}
    </group>
  );
}

export default function FloatingMesh() {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
      <ambientLight intensity={0.35} />
      <directionalLight color="#0047FF" position={[2, 3, 2]} intensity={1.2} />
      <pointLight color="#7B2FFF" position={[-2, -1.2, 2.8]} intensity={1.25} />
      <pointLight color="#00FFD1" position={[1.2, -1.6, 2]} intensity={0.8} />
      <NetworkCore />
      <EffectComposer>
        <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.7} intensity={1.35} />
      </EffectComposer>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
    </Canvas>
  );
}
