import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

export default function PoplationCube() {
  const meshRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const {camera} = useThree();

  useFrame(() => {
    // Rotate the cube around the Y-axis
    meshRef.current.rotation.y += 0.01;
    // camera.position.y += 0.002
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshNormalMaterial />
      <Html center>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="population-cube-link"
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
          ></div>
          {isHovered && <div className="hover-text">CLICK ME!</div>}
        </a>
      </Html>
    </mesh>
  );
}
