import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Chair from "./Chair1";
export const HeroImage3d = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Chair />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};
