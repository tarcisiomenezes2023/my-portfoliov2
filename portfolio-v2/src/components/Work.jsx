import "./Works.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const ColoredBox = () => {
  // Definir as cores e seus tons (saturação e brilho)
  const colors = [
    new THREE.Color("hsl(0, 0, 0)"),  /* White */
    new THREE.Color("hsl(120, 20%, 50%)"), /* Green */
    new THREE.Color("hsl(190, 100%, 50%)"), /* Blue */
    new THREE.Color("hsl(80, 100%, 50%)"),  /* Yellow */
    new THREE.Color("hsl(290, 50%, 50%)"), /* Purple */
    new THREE.Color("hsl(35, 50%, 50%)")   /* Orange */
  ];

  // Criar materiais para cada cor com os tons definidos
  const materials = colors.map(color => new THREE.MeshStandardMaterial({ color }));

  return (
    <mesh scale={[3, 3, 3]} geometry={new THREE.BoxGeometry()}>
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
        <div className="TextContainer"></div>
        <div className="ThreeContainer">
          <Canvas>
            <ambientLight intensity={2}/>
            <pointLight position={[10, 10, 10]} />
            <ColoredBox />
            <OrbitControls enableZoom={false}/>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Work;

