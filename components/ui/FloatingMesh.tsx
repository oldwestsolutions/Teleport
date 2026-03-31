"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function BlockCommunicationGraph() {
  const clusterRef = useRef<THREE.Group>(null);
  const links = useMemo(
    () => [
      { from: new THREE.Vector3(-1.4, 0.7, 0.1), to: new THREE.Vector3(-0.4, 0.3, 0.5) },
      { from: new THREE.Vector3(-0.4, 0.3, 0.5), to: new THREE.Vector3(0.7, 0.85, 0.2) },
      { from: new THREE.Vector3(0.7, 0.85, 0.2), to: new THREE.Vector3(1.45, 0.15, 0.7) },
      { from: new THREE.Vector3(-1.05, -0.55, 0.6), to: new THREE.Vector3(-0.15, -0.15, 0.2) },
      { from: new THREE.Vector3(-0.15, -0.15, 0.2), to: new THREE.Vector3(0.9, -0.35, 0.55) },
      { from: new THREE.Vector3(0.9, -0.35, 0.55), to: new THREE.Vector3(1.7, -0.8, 0.3) },
      { from: new THREE.Vector3(-0.4, 0.3, 0.5), to: new THREE.Vector3(-0.15, -0.15, 0.2) },
      { from: new THREE.Vector3(0.7, 0.85, 0.2), to: new THREE.Vector3(0.9, -0.35, 0.55) },
    ],
    [],
  );
  const blocks = useMemo(
    () => [
      { position: [-1.4, 0.7, 0.1] as [number, number, number], scale: [0.55, 0.55, 0.55] as [number, number, number], color: "#0047FF" },
      { position: [-0.4, 0.3, 0.5] as [number, number, number], scale: [0.45, 0.45, 0.45] as [number, number, number], color: "#7B2FFF" },
      { position: [0.7, 0.85, 0.2] as [number, number, number], scale: [0.6, 0.6, 0.6] as [number, number, number], color: "#00FFD1" },
      { position: [1.45, 0.15, 0.7] as [number, number, number], scale: [0.42, 0.42, 0.42] as [number, number, number], color: "#7B2FFF" },
      { position: [-1.05, -0.55, 0.6] as [number, number, number], scale: [0.5, 0.5, 0.5] as [number, number, number], color: "#00FFD1" },
      { position: [-0.15, -0.15, 0.2] as [number, number, number], scale: [0.68, 0.68, 0.68] as [number, number, number], color: "#0047FF" },
      { position: [0.9, -0.35, 0.55] as [number, number, number], scale: [0.56, 0.56, 0.56] as [number, number, number], color: "#7B2FFF" },
      { position: [1.7, -0.8, 0.3] as [number, number, number], scale: [0.48, 0.48, 0.48] as [number, number, number], color: "#0047FF" },
    ],
    [],
  );

  useFrame((_, delta) => {
    if (!clusterRef.current) return;
    clusterRef.current.rotation.y += delta * 0.08;
    clusterRef.current.rotation.x = Math.sin(Date.now() * 0.0002) * 0.12;
  });

  return (
    <group ref={clusterRef}>
      {blocks.map((block, idx) => (
        <mesh key={`block-${idx}`} position={block.position} scale={block.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={block.color}
            emissive={block.color}
            emissiveIntensity={0.4}
            roughness={0.25}
            metalness={0.82}
          />
        </mesh>
      ))}
      {links.map((link, idx) => (
        <Line
          key={`link-${idx}`}
          points={[link.from, link.to]}
          color={idx % 2 === 0 ? "#00FFD1" : "#0047FF"}
          transparent
          opacity={0.6}
          lineWidth={1.1}
        />
      ))}
      <mesh>
        <torusGeometry args={[2.15, 0.02, 18, 120]} />
        <meshStandardMaterial color="#7B2FFF" emissive="#7B2FFF" emissiveIntensity={0.8} />
      </mesh>
      <mesh rotation={[1.1, 0.2, 0.2]}>
        <torusGeometry args={[1.3, 0.015, 16, 100]} />
        <meshStandardMaterial color="#00FFD1" emissive="#00FFD1" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[0.15, 0.1, -0.35]}>
        <octahedronGeometry args={[0.18, 0]} />
        <meshStandardMaterial color="#f5f5f7" emissive="#0047FF" emissiveIntensity={0.9} />
      </mesh>
      {blocks.map((block, idx) => (
        <mesh key={`sat-${idx}`} position={[block.position[0], block.position[1] + 0.42, block.position[2]]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial
            color={idx % 2 === 0 ? "#f5f5f7" : "#00FFD1"}
            emissive={idx % 2 === 0 ? "#0047FF" : "#00FFD1"}
            emissiveIntensity={1.1}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function FloatingMesh() {
  return (
    <Canvas camera={{ position: [0, 0, 5.2], fov: 48 }}>
      <ambientLight intensity={0.38} />
      <directionalLight color="#0047FF" position={[2, 3, 2]} intensity={1.3} />
      <pointLight color="#7B2FFF" position={[-2, -1.2, 2.8]} intensity={1.3} />
      <pointLight color="#00FFD1" position={[1.5, -1.6, 2]} intensity={0.95} />
      <BlockCommunicationGraph />
      <EffectComposer>
        <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.7} intensity={1.25} />
      </EffectComposer>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.22} />
    </Canvas>
  );
}
