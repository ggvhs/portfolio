import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import "./style.css";


export default function PopulationCube() {
  const meshRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');



  useFrame(() => {
    // Rotate the cube around the Y-axis
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <>
      
      <mesh ref={meshRef}
        onPointerOver={() =>{
          setIsHovered(true);
          setHoverText('TEST');
        }}
        onPointerOut={() => {
          setIsHovered(false);
          setHoverText('');
        }}
      >
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
      {isHovered && (<div
         style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: 'white',
          padding: '8px',
        }}
        >
          {hoverText}
        </div>
        
        
        )}
        
    </>
  );
}
