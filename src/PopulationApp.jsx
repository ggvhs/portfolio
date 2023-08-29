import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import {Html, PivotControls, TrackballControls, OrbitControls} from '@react-three/drei'

export default function PopulationApp() {
  const meshRef = useRef();

  useFrame(() => {
    // Rotate the cube around the Y-axis
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <>
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
    

    
    </>

  );
}