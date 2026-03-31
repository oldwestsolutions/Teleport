"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

function MeshShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.1, 0.3, 180, 28]} />
      <meshStandardMaterial
        color="#7B2FFF"
        emissive="#0047FF"
        emissiveIntensity={0.8}
        wireframe
      />
    </mesh>
  );
}

export default function FloatingMesh() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 55 }}>
      <ambientLight intensity={0.45} />
      <directionalLight color="#0047FF" position={[2, 3, 3]} intensity={1.4} />
      <pointLight color="#7B2FFF" position={[-2, -1, 3]} intensity={1.2} />
      <MeshShape />
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.8} intensity={1.1} />
      </EffectComposer>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
    </Canvas>
  );
}
