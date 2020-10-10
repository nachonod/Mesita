import React, { Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./styles.css";

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}



function Mesa() {
  const { nodes } = useLoader(
    GLTFLoader,
    "models/MesitaBlackTreadConverter.glb"
  );

  const scene = useLoader(GLTFLoader, "models/MesitaBlackTreadConverter.glb");
  console.log(scene);

  return (
    <group>
      <mesh
        visible
        geometry={nodes.Mesita.geometry}
        scale={[0.2, 0.2, 0.2]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          attach="material"
          color="white"
          roughness={0.3}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
}

export default function App() {
  return (
    <Canvas 
    style={{ background: "#171717" }}
    camera={{ position: [0, 2, 4] }}>
      <ambientLight intensity={0.6} />
      <spotLight
        castShadow
        penumbra={1}
        position={[15, 4, 12]}
        color={"white"}
        intensity={1}
      />
      <Suspense fallback={<Loading />}>
        <Mesa />
      </Suspense>
    </Canvas>
  );
}
