import { useRef, useState, useEffect } from "react";
import "./Works.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

const createTexturedCanvas = (url, size) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = size;
      canvas.height = size;

      context.fillStyle = 'white';
      context.fillRect(0, 0, size, size);

      const newSize = size / 1.2;
      const x = (size - newSize) / 1.2;
      const y = (size - newSize) / 1.2;

      context.drawImage(img, x, y, newSize, newSize);

      resolve(new THREE.CanvasTexture(canvas));
    };
    img.src = url;
  });
};

const ColoredBox = () => {
  const [textures, setTextures] = useState([]);

  useEffect(() => {
    const loadTextures = async () => {
      const textureUrls = [
        '/img/js.png',  
        '/img/react.png',  
        '/img/typescript.png',  
        '/img/devops.png',  
        '/img/python.png',  
        '/img/node.png'   
      ];
      const loadedTextures = await Promise.all(textureUrls.map(url => createTexturedCanvas(url, 256)));
      setTextures(loadedTextures);
    };
    loadTextures();
  }, []);

  const materials = textures.map(texture => new THREE.MeshStandardMaterial({ map: texture }));
  const meshRef = useRef();
  const [isRotating, setIsRotating] = useState(true); 

  useFrame((state, delta) => {
    if (meshRef.current && isRotating) {
      const rotationSpeed = 0.2; 
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

  if (textures.length === 0) return null;

  return (
    <mesh 
      ref={meshRef} 
      scale={[1.5, 1.5, 1.5]}  
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

const variants = {
  initial: {
    x: -1000,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 5,
      staggerChildren: 0.1,
    },
  },
};

const Work = () => {
  return (
    <div className="mainContainer">
      <motion.div className="textH1" variants={variants} initial="initial" animate="animate">
        <h1>Work Experience and Skills</h1>
      </motion.div>
      <div className="container">
        <div className="wrapper">
          <div className="TextContainer">
            <motion.div className="Job1" variants={variants} initial="initial" animate="animate">
              <h2>Frontend Developer Intern</h2>
              <h5>ENGAGEathon | Remote/Freelancing</h5>
              <h6>https://www.f6s.com/company/engageathon/ From Mar 2024 – Jun 2024</h6>
            </motion.div>
            <motion.div className="Job2" variants={variants} initial="initial" animate="animate">
              <h2>Sales and IT support</h2>
              <h5>Mega Mix Construção | Petrolina, Brazil</h5>
              <h6>https://www.instagram.com/mixdaconstrucaopnz/ From Nov 2019 – Jul 2022</h6>
            </motion.div>
            <motion.div className="Job3" variants={variants} initial="initial" animate="animate">
              <h2>Sales Assistant</h2>
              <h6>Embalando Festas | Petrolina, Brazil</h6>
              <h6>https://embalandofestas.com.br/ From Jan 2019 - Nov 2019</h6>
            </motion.div>
            <motion.div className="Job4" variants={variants} initial="initial" animate="animate">
              <h2>IT Support Intern</h2>
              <h5>Hospital Memorial Petrolina | Petrolina, Brazil</h5>
              <h6>https://hmp.com.br/ From Jan 2017 – Jan 2018</h6>
            </motion.div>
          </div>
          <motion.div className="ThreeContainer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>
            <Canvas>
              <ambientLight intensity={2} />
              <pointLight position={[10, 10, 10]} />
              <ColoredBox />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;