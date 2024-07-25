import React, { useRef, useState } from "react";
import "./Works.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const createTextTexture = (text, color) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 256;
  canvas.height = 256;

  context.fillStyle = color;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.font = '48px Arial';
  context.fillStyle = 'white';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  return new THREE.CanvasTexture(canvas);
};

const ColoredBox = () => {
  const textures = [
    createTextTexture('Front', 'hsl(0, 0%, 0%)'),  /* black */
    createTextTexture('Back', 'hsl(120, 20%, 50%)'), /* green */
    createTextTexture('Top', 'hsl(190, 100%, 50%)'), /* blue */
    createTextTexture('Bottom', 'hsl(80, 100%, 50%)'), /* yellow */
    createTextTexture('Left', 'hsl(290, 50%, 50%)'), /* purple */
    createTextTexture('Right', 'hsl(35, 50%, 50%)')  /* orange */
  ];

  const materials = textures.map(texture => new THREE.MeshStandardMaterial({ map: texture }));
  const meshRef = useRef();
  const [isRotating, setIsRotating] = useState(true); 

  useFrame((state, delta) => {
    if (meshRef.current && isRotating) {
      const rotationSpeed = 0.1; 
      meshRef.current.rotation.x += rotationSpeed * delta;
      meshRef.current.rotation.y += rotationSpeed * delta;
    }
  });

  const handlePointerDown = () => {
    setIsRotating(false); 
  };

  const handlePointerUp = () => {
    setIsRotating(true); 
  };

  return (
    <mesh 
      ref={meshRef} 
      scale={[3, 3, 3]} 
      onPointerDown={handlePointerDown} 
      onPointerUp={handlePointerUp}
    >
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      {materials.map((material, index) => (
        <primitive key={index} attach={`material-${index}`} object={material} />
      ))}
    </mesh>
  );
};

const Work = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="TextContainer">
          <div className="Job1">
            <h2></h2>
          </div>
          <div className="Job2">
            <h2></h2>
          </div>
          <div className="Job3">
            <h2></h2>
          </div>
          <div className="Job4">
            <h2></h2>
          </div>
        </div>
        <div className="ThreeContainer">
          <Canvas>
            <ambientLight intensity={2} />
            <pointLight position={[10, 10, 10]} />
            <ColoredBox />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Work;