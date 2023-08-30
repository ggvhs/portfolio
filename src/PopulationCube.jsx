import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';


export default function PopulationCube() {
  const meshRef = useRef();

  useFrame(() => {
    // Rotate the cube around the Y-axis
    meshRef.current.rotation.y += 0.01;
  });

  const handleMouseEnter =() => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <>
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
    

    
    </>

  );
}