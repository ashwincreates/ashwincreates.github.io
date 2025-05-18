"use client"

import { Canvas, useFrame } from "@react-three/fiber";
import vertexShader from "@/shaders/vertex.glsl";
import fragmentShader from "@/shaders/fragment.glsl";
import { useRef } from "react";
import { Color, Mesh, ShaderMaterial } from "three";

function Frost() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0">
      <Canvas>
        <color attach="background" args={["transparent"]} />
        <ambientLight />
        <Effect />
      </Canvas>
    </div>
  );
}

const Effect = () => {
  const aspect = window.innerHeight / window.innerWidth;
  const meshRef = useRef<Mesh>(null!)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      (meshRef.current.material as ShaderMaterial).uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[14, 14 * aspect]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          aspect: { value: aspect },
          time: { value: 0 },
          color: { value: new Color().setHex(0x222222) }
        }}
      />
    </mesh>
  )
}

export default Frost;
