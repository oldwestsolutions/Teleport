"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function BlockAssemblyIllustration() {
  const leftMoverRef = useRef<THREE.Mesh>(null);
  const rightMoverRef = useRef<THREE.Mesh>(null);
  const pulseRef = useRef<THREE.Group>(null);
  const links = useMemo(
    () => [
      { from: new THREE.Vector3(-1, 1, 0), to: new THREE.Vector3(0, 1, 0) },
      { from: new THREE.Vector3(0, 1, 0), to: new THREE.Vector3(1, 1, 0) },
      { from: new THREE.Vector3(-1, 0, 0), to: new THREE.Vector3(0, 0, 0) },
      { from: new THREE.Vector3(0, 0, 0), to: new THREE.Vector3(1, 0, 0) },
      { from: new THREE.Vector3(-1, -1, 0), to: new THREE.Vector3(0, -1, 0) },
      { from: new THREE.Vector3(0, -1, 0), to: new THREE.Vector3(1, -1, 0) },
      { from: new THREE.Vector3(-1, 1, 0), to: new THREE.Vector3(-1, 0, 0) },
      { from: new THREE.Vector3(-1, 0, 0), to: new THREE.Vector3(-1, -1, 0) },
      { from: new THREE.Vector3(0, 1, 0), to: new THREE.Vector3(0, 0, 0) },
      { from: new THREE.Vector3(0, 0, 0), to: new THREE.Vector3(0, -1, 0) },
      { from: new THREE.Vector3(1, 1, 0), to: new THREE.Vector3(1, 0, 0) },
      { from: new THREE.Vector3(1, 0, 0), to: new THREE.Vector3(1, -1, 0) },
    ],
    [],
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const phase = (Math.sin(t * 0.6) + 1) / 2;
    const leftX = THREE.MathUtils.lerp(-2.2, 0, phase);
    const rightY = THREE.MathUtils.lerp(2.2, 0, phase);
    if (leftMoverRef.current) leftMoverRef.current.position.set(leftX, 0, 0);
    if (rightMoverRef.current) rightMoverRef.current.position.set(1, rightY, 0);
    if (pulseRef.current) {
      const s = 1 + Math.sin(t * 1.2) * 0.04;
      pulseRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group ref={pulseRef}>
      <group>
        {[
          [-1, 1, 0],
          [0, 1, 0],
          [1, 1, 0],
          [-1, 0, 0],
          [0, 0, 0],
          [-1, -1, 0],
          [0, -1, 0],
          [1, -1, 0],
        ].map((pos, idx) => (
          <mesh key={`fixed-${idx}`} position={pos as [number, number, number]}>
            <boxGeometry args={[0.86, 0.86, 0.86]} />
            <meshStandardMaterial color="#0f0f0f" emissive="#0047FF" emissiveIntensity={0.15} metalness={0.1} roughness={0.85} />
          </mesh>
        ))}
        <mesh ref={leftMoverRef} position={[-2.2, 0, 0]}>
          <boxGeometry args={[0.86, 0.86, 0.86]} />
          <meshStandardMaterial color="#7B2FFF" emissive="#7B2FFF" emissiveIntensity={0.25} metalness={0.1} roughness={0.75} />
        </mesh>
        <mesh ref={rightMoverRef} position={[1, 2.2, 0]}>
          <boxGeometry args={[0.86, 0.86, 0.86]} />
          <meshStandardMaterial color="#00FFD1" emissive="#00FFD1" emissiveIntensity={0.2} metalness={0.1} roughness={0.75} />
        </mesh>
      </group>

      {links.map((link, idx) => (
        <Line
          key={`link-${idx}`}
          points={[link.from, link.to]}
          color="#2a3e7a"
          transparent
          opacity={0.55}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

export default function FloatingMesh() {
  return (
    <Canvas camera={{ position: [0, 0, 6.4], fov: 36 }}>
      <ambientLight intensity={0.6} />
      <directionalLight color="#84a7ff" position={[2, 3, 2]} intensity={0.7} />
      <pointLight color="#7B2FFF" position={[-2, 0, 2.5]} intensity={0.3} />
      <BlockAssemblyIllustration />
    </Canvas>
  );
}
